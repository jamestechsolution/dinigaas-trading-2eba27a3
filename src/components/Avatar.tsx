import { useMemo } from "react";

const PALETTES = [
  ["#1e3a8a", "#3b82f6"],
  ["#0f766e", "#14b8a6"],
  ["#7c2d12", "#ea580c"],
  ["#581c87", "#a855f7"],
  ["#0c4a6e", "#0ea5e9"],
  ["#3f6212", "#84cc16"],
  ["#831843", "#ec4899"],
  ["#713f12", "#f59e0b"],
];

function hash(s: string) {
  let h = 0;
  for (let i = 0; i < s.length; i++) h = (h * 31 + s.charCodeAt(i)) | 0;
  return Math.abs(h);
}

function initials(name: string) {
  return name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((n) => n[0]?.toUpperCase() ?? "")
    .join("");
}

export function PersonAvatar({
  name,
  className = "",
}: {
  name: string;
  className?: string;
}) {
  const { from, to, ini } = useMemo(() => {
    const idx = hash(name) % PALETTES.length;
    return { from: PALETTES[idx][0], to: PALETTES[idx][1], ini: initials(name) };
  }, [name]);
  return (
    <div
      role="img"
      aria-label={name}
      className={`relative grid w-full place-items-center overflow-hidden ${className}`}
      style={{ backgroundImage: `linear-gradient(135deg, ${from}, ${to})` }}
    >
      <span className="font-serif text-3xl font-bold tracking-wide text-white drop-shadow">
        {ini}
      </span>
    </div>
  );
}
