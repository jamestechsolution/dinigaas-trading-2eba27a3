import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { MapPin, Mail, Phone } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { useI18n } from "@/i18n/I18nProvider";
import logo from "@/assets/dinigaas-logo.jpg";

export function SiteFooter() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const { t } = useI18n();

  async function subscribe(e: React.FormEvent) {
    e.preventDefault();
    const trimmed = email.trim();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed)) {
      toast.error(t("footer.toast.invalidEmail"));
      return;
    }
    setLoading(true);
    const { error } = await supabase.from("newsletter_subscribers").insert({ email: trimmed });
    setLoading(false);
    if (error) {
      if (error.code === "23505") toast.success(t("footer.toast.alreadySubscribed"));
      else toast.error(t("footer.toast.subError"));
      return;
    }
    toast.success(t("footer.toast.subSuccess"));
    setEmail("");
  }

  const explore: [string, string][] = [
    ["/about", t("nav.About")],
    ["/services", t("nav.Services")],
    ["/products", t("nav.Products")],
    ["/register", t("header.register")],
    ["/news", t("nav.News")],
    ["/careers", t("nav.Careers")],
    ["/contact", t("nav.Contact")],
  ];

  return (
    <footer className="mt-24 bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-12">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <div className="flex items-center gap-4">
              <img
                src={logo}
                alt="Dinigaas Trading S.C. logo"
                width={64}
                height={64}
                className="size-16 shrink-0 rounded-full bg-primary-foreground/95 object-contain p-1"
              />
              <div>
                <p className="font-serif text-3xl font-semibold">Dinigaas Trading S.C.</p>
                <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.22em] text-primary-foreground/70">
                  {t("footer.brand.tag")}
                </p>
              </div>
            </div>
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-primary-foreground/75">
              {t("footer.about")}
            </p>
          </div>

          <div className="lg:col-span-3">
            <h3 className="font-serif text-lg">{t("footer.visit")}</h3>
            <ul className="mt-4 space-y-3 text-sm text-primary-foreground/80">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 size-4 shrink-0" />
                <span>{t("footer.address")}</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="mt-0.5 size-4 shrink-0" />
                <a href="tel:+251923014132" className="hover:text-primary-foreground">+251 923 014 132</a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="mt-0.5 size-4 shrink-0" />
                <a href="mailto:dinigaastrading@gmail.com" className="hover:text-primary-foreground">dinigaastrading@gmail.com</a>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h3 className="font-serif text-lg">{t("footer.explore")}</h3>
            <ul className="mt-4 space-y-2 text-sm">
              {explore.map(([to, label]) => (
                <li key={to}>
                  <Link to={to} className="text-primary-foreground/75 transition-colors hover:text-primary-foreground">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h3 className="font-serif text-lg">{t("footer.newsletter")}</h3>
            <p className="mt-4 text-sm text-primary-foreground/75">
              {t("footer.newsletter.desc")}
            </p>
            <form onSubmit={subscribe} className="mt-4 flex flex-col gap-2">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={t("footer.email.placeholder")}
                className="w-full rounded-full border border-primary-foreground/20 bg-primary-foreground/5 px-4 py-2.5 text-sm text-primary-foreground placeholder:text-primary-foreground/50 focus:border-primary-foreground/50 focus:outline-none"
              />
              <button
                type="submit"
                disabled={loading}
                className="rounded-full bg-primary-foreground px-5 py-2.5 text-sm font-semibold text-primary transition-all hover:bg-primary-foreground/90 disabled:opacity-60"
              >
                {loading ? t("footer.subscribing") : t("footer.subscribe")}
              </button>
            </form>
          </div>
        </div>

        <div className="mt-14 border-t border-primary-foreground/15 pt-6">
          <div className="flex flex-col items-start justify-between gap-4 text-xs text-primary-foreground/60 sm:flex-row sm:items-center">
            <p>{t("footer.copyright", { year: new Date().getFullYear() })}</p>
            <Link to="/admin" className="hover:text-primary-foreground">
              {t("footer.adminLink")}
            </Link>
          </div>
          <p className="mt-4 text-center text-[11px] font-medium tracking-wide text-primary-foreground/55">
            <span className="inline-block animate-rise">
              {t("footer.designedBy")}{" "}
              <span className="font-semibold text-primary-foreground/90 story-link">
                Yaikob Diriba Tadessa
              </span>
              {t("footer.designedSuffix")}
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}
