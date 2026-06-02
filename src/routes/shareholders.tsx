import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { Reveal } from "@/components/Reveal";
import { PersonAvatar } from "@/components/Avatar";
import { useI18n } from "@/i18n/I18nProvider";

export const Route = createFileRoute("/shareholders")({
  head: () => ({
    meta: [
      { title: "Shareholders — Dinigaas Trading S.C." },
      { name: "description", content: "Our shareholders and partners." },
      { property: "og:title", content: "Shareholders — Dinigaas Trading S.C." },
      { property: "og:description", content: "Our shareholders and partners." },
    ],
  }),
  component: ShareholdersPage,
});

const SHAREHOLDERS = [
  { nameKey: "sh.s1.n", stakeKey: "sh.s1.s" },
  { nameKey: "sh.s2.n", stakeKey: "sh.s2.s" },
  { nameKey: "sh.s3.n", stakeKey: "sh.s3.s" },
  { nameKey: "sh.s4.n", stakeKey: "sh.s4.s" },
];

function ShareholdersPage() {
  const { t } = useI18n();
  return (
    <SiteLayout>
      <section className="bg-cotton py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-primary-light">
            {t("sh.eyebrow")}
          </p>
          <h1 className="mt-3 max-w-3xl font-serif text-5xl text-primary md:text-6xl">
            {t("sh.title")}
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground">{t("sh.intro")}</p>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
            {SHAREHOLDERS.map((s, i) => {
              const name = t(s.nameKey);
              const stake = t(s.stakeKey);
              return (
                <Reveal
                  key={s.nameKey}
                  as="article"
                  delay={i * 80}
                  className="group lift overflow-hidden rounded-3xl border border-border bg-background shadow-card"
                >
                  <PersonAvatar name={name} className="aspect-square transition-transform duration-500 group-hover:scale-105" />
                  <div className="p-6 text-center">
                    <h3 className="font-serif text-lg text-primary">{name}</h3>
                    <p className="mt-1 text-xs font-bold uppercase tracking-widest text-clay">{stake}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
