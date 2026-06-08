import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { useSiteContent } from "@/hooks/use-site-content";
import { useSiteImages } from "@/hooks/use-site-images";
import { useI18n } from "@/i18n/I18nProvider";
import { Heart, Target, Eye, Users, ArrowRight } from "lucide-react";
import schoolImg from "@/assets/school-building.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Dinigaas Trading S.C." },
      { name: "description", content: "Our story, mission, vision and values." },
      { property: "og:title", content: "About — Dinigaas Trading S.C." },
      { property: "og:description", content: "Our story, mission, vision and values." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  const { get } = useSiteContent("about");
  const { get: getImg } = useSiteImages();
  const { t } = useI18n();
  const aboutImg = getImg("about_story", schoolImg);
  return (
    <SiteLayout>
      <section className="bg-cotton py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-primary-light">{t("about.eyebrow")}</p>
          <h1 className="mt-3 max-w-3xl font-serif text-5xl text-primary md:text-6xl">
            {t("about.title")}
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground whitespace-pre-line">
            {get("about_intro", "")}
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto grid max-w-7xl gap-14 px-6 lg:grid-cols-2 lg:px-12">
          <img src={aboutImg} alt="Dinigaas campus" loading="lazy" width={1200} height={900} className="rounded-3xl object-cover shadow-card" />
          <div>
            <h2 className="font-serif text-3xl text-primary md:text-4xl">{t("about.story.title")}</h2>
            <p className="mt-5 leading-relaxed text-muted-foreground whitespace-pre-line">
              {get("about_story_p1", "")}
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground whitespace-pre-line">
              {get("about_story_p2", "")}
            </p>
          </div>
        </div>
      </section>

      <section className="bg-cotton py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="grid gap-6 md:grid-cols-3">
            {[
              { Icon: Target, title: get("about_mission_title", t("about.mission.title")), text: get("about_mission_text", t("about.mission.text")), cta: "Our Services", to: "/services" },
              { Icon: Eye, title: get("about_vision_title", t("about.vision.title")), text: get("about_vision_text", t("about.vision.text")), cta: "Explore Products", to: "/products" },
              { Icon: Heart, title: get("about_values_title", t("about.values.title")), text: get("about_values_text", t("about.values.text")), cta: "Get in Touch", to: "/contact" },
            ].map(({ Icon, title, text, cta, to }) => (
              <article key={title} className="flex flex-col rounded-3xl border border-border bg-background p-7">
                <Icon className="size-7 text-primary" />
                <h3 className="mt-4 font-serif text-2xl text-primary">{title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground whitespace-pre-line">{text}</p>
                <Link
                  to={to}
                  className="mt-6 inline-flex w-fit items-center gap-1.5 rounded-full bg-primary px-4 py-2 text-xs font-semibold text-primary-foreground transition-all hover:bg-primary-light"
                >
                  {cta}
                  <ArrowRight className="size-3.5" />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <h2 className="font-serif text-3xl text-primary md:text-4xl">{t("about.team.title")}</h2>
          <p className="mt-3 max-w-xl text-muted-foreground">{t("about.team.subtitle")}</p>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              [t("about.team.gm.r"), t("about.team.gm.d")],
              [t("about.team.ad.r"), t("about.team.ad.d")],
              [t("about.team.md.r"), t("about.team.md.d")],
              [t("about.team.ops.r"), t("about.team.ops.d")],
            ].map(([role, desc]) => (
              <article key={role} className="rounded-3xl border border-border bg-cotton p-6">
                <div className="grid h-32 place-items-center rounded-2xl bg-primary/10">
                  <Users className="size-10 text-primary" />
                </div>
                <h3 className="mt-4 font-serif text-lg text-primary">{role}</h3>
                <p className="mt-1 text-xs text-muted-foreground">{desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
