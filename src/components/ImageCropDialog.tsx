import { useCallback, useEffect, useState } from "react";
import Cropper, { type Area } from "react-easy-crop";
import { Loader2, X } from "lucide-react";

type Props = {
  file: File;
  aspect?: number;
  onCancel: () => void;
  onConfirm: (blob: Blob) => void | Promise<void>;
  busy?: boolean;
};

const ASPECT_PRESETS: { label: string; value: number }[] = [
  { label: "4:3", value: 4 / 3 },
  { label: "1:1", value: 1 },
  { label: "16:9", value: 16 / 9 },
  { label: "3:4", value: 3 / 4 },
];

async function cropToBlob(
  src: string,
  area: Area,
  type: string,
  maxDim = 1920,
): Promise<Blob> {
  const img = await new Promise<HTMLImageElement>((resolve, reject) => {
    const i = new Image();
    i.crossOrigin = "anonymous";
    i.onload = () => resolve(i);
    i.onerror = reject;
    i.src = src;
  });
  const scale = Math.min(1, maxDim / Math.max(area.width, area.height));
  const w = Math.round(area.width * scale);
  const h = Math.round(area.height * scale);
  const canvas = document.createElement("canvas");
  canvas.width = w;
  canvas.height = h;
  const ctx = canvas.getContext("2d")!;
  ctx.drawImage(img, area.x, area.y, area.width, area.height, 0, 0, w, h);
  const out = type === "image/png" ? "image/png" : "image/jpeg";
  return await new Promise<Blob>((resolve, reject) =>
    canvas.toBlob((b) => (b ? resolve(b) : reject(new Error("crop failed"))), out, 0.9),
  );
}

export function ImageCropDialog({ file, aspect: initialAspect, onCancel, onConfirm, busy }: Props) {
  const [src, setSrc] = useState<string>("");
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [aspect, setAspect] = useState<number>(initialAspect ?? 4 / 3);
  const [pixels, setPixels] = useState<Area | null>(null);

  useEffect(() => {
    const url = URL.createObjectURL(file);
    setSrc(url);
    return () => URL.revokeObjectURL(url);
  }, [file]);

  const onComplete = useCallback((_: Area, p: Area) => setPixels(p), []);

  async function confirm() {
    if (!pixels) return;
    const blob = await cropToBlob(src, pixels, file.type || "image/jpeg");
    await onConfirm(blob);
  }

  return (
    <div className="fixed inset-0 z-[100] grid place-items-center bg-foreground/60 p-4">
      <div className="flex w-full max-w-3xl flex-col overflow-hidden rounded-2xl bg-background shadow-2xl">
        <div className="flex items-center justify-between border-b border-border px-5 py-3">
          <h3 className="font-serif text-lg text-primary">Crop & resize</h3>
          <button onClick={onCancel} disabled={busy} className="rounded-full p-1.5 hover:bg-accent">
            <X className="size-4" />
          </button>
        </div>
        <div className="relative h-[55vh] w-full bg-muted">
          {src && (
            <Cropper
              image={src}
              crop={crop}
              zoom={zoom}
              aspect={aspect}
              onCropChange={setCrop}
              onZoomChange={setZoom}
              onCropComplete={onComplete}
              restrictPosition
              objectFit="contain"
            />
          )}
        </div>
        <div className="space-y-3 border-t border-border px-5 py-4">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Aspect</span>
            {ASPECT_PRESETS.map((p) => (
              <button
                key={p.label}
                onClick={() => setAspect(p.value)}
                className={`rounded-full border px-3 py-1 text-xs font-semibold ${
                  Math.abs(aspect - p.value) < 0.001
                    ? "border-primary bg-primary text-primary-foreground"
                    : "border-border bg-background hover:bg-accent"
                }`}
              >
                {p.label}
              </button>
            ))}
          </div>
          <div className="flex items-center gap-3">
            <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Zoom</span>
            <input
              type="range"
              min={1}
              max={4}
              step={0.05}
              value={zoom}
              onChange={(e) => setZoom(Number(e.target.value))}
              className="flex-1 accent-primary"
            />
          </div>
          <div className="flex justify-end gap-2 pt-1">
            <button
              onClick={onCancel}
              disabled={busy}
              className="rounded-full border border-border px-5 py-2 text-sm font-semibold hover:bg-accent"
            >
              Cancel
            </button>
            <button
              onClick={confirm}
              disabled={busy || !pixels}
              className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2 text-sm font-semibold text-primary-foreground hover:bg-primary-light disabled:opacity-60"
            >
              {busy && <Loader2 className="size-4 animate-spin" />}
              {busy ? "Uploading…" : "Upload"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
