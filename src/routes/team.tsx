import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { Reveal } from "@/components/Reveal";
import { PersonAvatar } from "@/components/Avatar";
import { useI18n } from "@/i18n/I18nProvider";

export const Route = createFileRoute("/team")({
  head: () => ({
    meta: [
      { title: "Our Team — Dinigaas Trading S.C." },
      { name: "description", content: "Meet the leadership team driving Dinigaas Trading S.C." },
      { property: "og:title", content: "Our Team — Dinigaas Trading S.C." },
      { property: "og:description", content: "Meet our leadership team." },
    ],
  }),
  component: TeamPage,
});

const MEMBERS = [
  { nameKey: "team.m1.n", roleKey: "team.m1.r" },
  { nameKey: "team.m2.n", roleKey: "team.m2.r" },
  { nameKey: "team.m3.n", roleKey: "team.m3.r" },
  { nameKey: "team.m4.n", roleKey: "team.m4.r" },
  { nameKey: "team.m5.n", roleKey: "team.m5.r" },
  { nameKey: "team.m6.n", roleKey: "team.m6.r" },
];

function TeamPage() {
  const { t } = useI18n();
  return (
    <SiteLayout>
      <section className="bg-cotton py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-primary-light">
            {t("team.eyebrow")}
          </p>
          <h1 className="mt-3 max-w-3xl font-serif text-5xl text-primary md:text-6xl">
            {t("team.title")}
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground">{t("team.intro")}</p>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
            {MEMBERS.map((m, i) => {
              const name = t(m.nameKey);
              const role = t(m.roleKey);
              return (
                <Reveal
                  key={m.nameKey}
                  as="article"
                  delay={i * 80}
                  className="group lift overflow-hidden rounded-3xl border border-border bg-background shadow-card"
                >
                  <PersonAvatar name={name} className="aspect-[4/3] transition-transform duration-500 group-hover:scale-105" />
                  <div className="p-6">
                    <h3 className="font-serif text-xl text-primary">{name}</h3>
                    <p className="mt-1 text-sm font-semibold text-clay">{role}</p>
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
