import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { Reveal } from "@/components/Reveal";
import { useI18n } from "@/i18n/I18nProvider";
import t1 from "@/assets/team/t1.jpg.asset.json";
import t2 from "@/assets/team/t2.jpg.asset.json";
import t3 from "@/assets/team/t3.jpg.asset.json";
import t4 from "@/assets/team/t4.jpg.asset.json";
import t5 from "@/assets/team/t5.jpg.asset.json";
import t6 from "@/assets/team/t6.jpg.asset.json";
import t7 from "@/assets/team/t7.jpg.asset.json";
import students from "@/assets/team/students.png.asset.json";

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

const MEMBERS: { name: string; role: string; img: string }[] = [
  { name: "Board of Directors", role: "Leadership", img: t1.url },
  { name: "Advisory Council", role: "Strategy & Governance", img: t2.url },
  { name: "Operations Lead", role: "Operations Manager", img: t3.url },
  { name: "Medical Team", role: "Healthcare Staff", img: t4.url },
  { name: "Full Staff", role: "Bright Academy Team", img: t5.url },
  { name: "Department Head", role: "Administration", img: t6.url },
  { name: "Senior Officer", role: "Finance & Records", img: t7.url },
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
            {MEMBERS.map((m, i) => (
              <Reveal
                key={m.img}
                as="article"
                delay={i * 80}
                className="group lift overflow-hidden rounded-3xl border border-border bg-background shadow-card"
              >
                <div className="aspect-[4/3] overflow-hidden bg-muted">
                  <img
                    src={m.img}
                    alt={m.name}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-serif text-xl text-primary">{m.name}</h3>
                  <p className="mt-1 text-sm font-semibold text-clay">{m.role}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
