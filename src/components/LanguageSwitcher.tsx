import { useState, useRef, useEffect } from "react";
import { Languages, Check } from "lucide-react";
import { LANGS, type Lang } from "@/i18n/translations";
import { useI18n } from "@/i18n/I18nProvider";

export function LanguageSwitcher({ className = "" }: { className?: string }) {
  const { lang, setLang, t } = useI18n();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const current = LANGS.find((l) => l.code === lang) ?? LANGS[0];

  useEffect(() => {
    function onDoc(e: MouseEvent) {
      if (!ref.current?.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener("mousedown", onDoc);
    return () => document.removeEventListener("mousedown", onDoc);
  }, []);

  return (
    <div className={`relative ${className}`} ref={ref}>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="menu"
        aria-expanded={open}
        title={t("header.language")}
        className="inline-flex items-center gap-1.5 rounded-full border border-primary/20 bg-background px-3 py-2 text-xs font-semibold uppercase tracking-widest text-primary transition-all hover:bg-primary hover:text-primary-foreground"
      >
        <Languages className="size-3.5" />
        {current.label}
      </button>
      {open && (
        <div
          role="menu"
          className="absolute right-0 z-50 mt-2 w-44 origin-top-right animate-rise-sm overflow-hidden rounded-2xl border border-border bg-background shadow-card"
        >
          {LANGS.map((l) => (
            <button
              key={l.code}
              type="button"
              role="menuitemradio"
              aria-checked={l.code === lang}
              onClick={() => {
                setLang(l.code as Lang);
                setOpen(false);
              }}
              className={`flex w-full items-center justify-between gap-3 px-4 py-2.5 text-left text-sm transition-colors hover:bg-accent ${
                l.code === lang ? "text-primary font-semibold" : "text-foreground/80"
              }`}
            >
              <span>{l.native}</span>
              {l.code === lang && <Check className="size-4" />}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
