import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, GraduationCap, Stethoscope, Sparkles, Users, ShieldCheck } from "lucide-react";
import { SiteLayout } from "@/components/SiteLayout";
import { Reveal } from "@/components/Reveal";
import { PersonAvatar } from "@/components/Avatar";
import { useSiteImages } from "@/hooks/use-site-images";
import { useI18n } from "@/i18n/I18nProvider";
import heroImg from "@/assets/hero-students.jpg";
import healthImg from "@/assets/healthcare.jpg";
import schoolImg from "@/assets/school-building.jpg";
import t1 from "@/assets/team/t1.jpg.asset.json";
import t2 from "@/assets/team/t2.jpg.asset.json";
import t3 from "@/assets/team/t3.jpg.asset.json";
import t4 from "@/assets/team/t4.jpg.asset.json";
import t6 from "@/assets/team/t6.jpg.asset.json";
import t7 from "@/assets/team/t7.jpg.asset.json";
import students from "@/assets/team/albright-students.png.asset.json";

const HOME_TEAM = [
  { name: "Board of Directors", role: "Leadership", slot: "team.board", fallback: t1.url },
  { name: "Advisory Council", role: "Strategy & Governance", slot: "team.advisory", fallback: t2.url },
  { name: "Operations Lead", role: "Operations Manager", slot: "team.operations", fallback: t3.url },
  { name: "Medical Team", role: "Healthcare Staff", slot: "team.medical", fallback: t4.url },
  { name: "Albright Academy Students", role: "Students", slot: "team.students", fallback: students.url },
  { name: "Department Head", role: "Administration", slot: "team.department", fallback: t6.url },
  { name: "Senior Officer", role: "Finance & Records", slot: "team.senior", fallback: t7.url },
];

const HOME_SHAREHOLDERS = [
  { nameKey: "sh.s1.n", stakeKey: "sh.s1.s" },
  { nameKey: "sh.s2.n", stakeKey: "sh.s2.s" },
  { nameKey: "sh.s3.n", stakeKey: "sh.s3.s" },
  { nameKey: "sh.s4.n", stakeKey: "sh.s4.s" },
];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Dinigaas Trading S.C. — Education & Healthcare in Sheger City" },
      {
        name: "description",
        content:
          "Quality KG1–Grade 8 education and community healthcare in Sheger City, Gefarsa Gujje Kella.",
      },
      { property: "og:title", content: "Dinigaas Trading S.C." },
      { property: "og:description", content: "Education and healthcare for Sheger City." },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  const { t } = useI18n();
  const { get: getImg } = useSiteImages();
  const heroSrc = getImg("home_hero", heroImg);
  const storySrc = getImg("home_story", schoolImg);
  const healthSrc = getImg("home_health", healthImg);
  return (
    <SiteLayout>
      <section className="hero-gradient gradient-animated relative overflow-hidden">
        <div className="pointer-events-none absolute -top-24 -left-24 size-96 animate-orb rounded-full bg-white/10 blur-3xl" aria-hidden />
        <div className="pointer-events-none absolute -bottom-24 -right-24 size-96 animate-orb rounded-full bg-white/10 blur-3xl [animation-delay:-7s]" aria-hidden />
        <div className="pointer-events-none absolute top-1/2 left-1/2 size-[40rem] -translate-x-1/2 -translate-y-1/2 animate-spin-slow rounded-full border border-white/5" aria-hidden />
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 py-24 lg:grid-cols-2 lg:px-12 lg:py-32">
          <div>
            <div className="mb-7 inline-flex animate-rise items-center gap-2 rounded-full border border-white/25 bg-white/10 px-3 py-1 backdrop-blur-sm">
              <span className="size-1.5 animate-pulse rounded-full bg-white" />
              <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-white">
                {t("home.hero.eyebrow")}
              </span>
            </div>
            <h1 className="animate-rise delay-100 text-shimmer text-balance font-serif text-5xl leading-[1.05] tracking-tight md:text-6xl lg:text-7xl">
              {t("home.hero.title")}
            </h1>
            <p className="animate-rise delay-200 mt-7 max-w-[52ch] text-pretty text-lg leading-relaxed text-white/85 whitespace-pre-line">
              {t("home.hero.subtitle")}
            </p>
            <div className="animate-rise delay-300 mt-10 flex flex-col gap-3 sm:flex-row">
              <Link
                to="/services"
                className="btn-glow btn-glow-light group relative inline-flex items-center justify-center gap-2 overflow-visible rounded-lg bg-white px-7 py-3.5 text-sm font-semibold text-primary shadow-lg"
              >
                <span className="btn-halo" aria-hidden />
                {t("home.cta.primary")}{" "}
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                to="/contact"
                className="btn-glow btn-glow-light relative inline-flex items-center justify-center overflow-visible rounded-lg border-2 border-white/70 bg-transparent px-7 py-3.5 text-sm font-semibold text-white transition-all hover:bg-white hover:text-primary"
              >
                <span className="btn-halo" aria-hidden />
                {t("home.cta.secondary")}
              </Link>
            </div>

            <dl className="animate-rise delay-400 mt-14 grid grid-cols-3 gap-6 border-t border-white/20 pt-8">
              {[
                ["1,200+", t("home.stats.students")],
                ["KG1–G8", t("home.stats.grades")],
                ["24/7", t("home.stats.care")],
              ].map(([value, label]) => (
                <div key={label} className="transition-transform hover:-translate-y-1">
                  <dt className="font-serif text-2xl font-medium text-white md:text-3xl">{value}</dt>
                  <dd className="mt-1 text-[11px] font-bold uppercase tracking-widest text-white/70">
                    {label}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="relative">
            <div className="glass-card animate-tilt relative rounded-2xl p-8 shadow-2xl">
              <h3 className="font-serif text-2xl font-bold text-white">{t("home.impact.title")}</h3>
              <ul className="mt-6 space-y-4">
                {[
                  t("home.impact.education"),
                  t("home.impact.health"),
                  t("home.impact.mining"),
                  t("home.impact.agriculture"),
                  t("home.impact.commerce"),
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-white">
                    <span className="grid size-8 place-items-center rounded-full bg-white/20 text-white">
                      <ShieldCheck className="size-4" />
                    </span>
                    <span className="text-base font-semibold">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="zoom-img mt-6 overflow-hidden rounded-2xl ring-1 ring-white/20 shadow-2xl">
              <img
                src={heroSrc}
                alt="Dinigaas Trading S.C."
                width={1280}
                height={720}
                className="aspect-[16/10] h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-cotton py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <Reveal className="mb-12 max-w-2xl">
            <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-primary-light">{t("home.pillars.eyebrow")}</p>
            <h2 className="mt-3 font-serif text-4xl text-primary md:text-5xl">
              {t("home.pillars.title")}
            </h2>
          </Reveal>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              { Icon: GraduationCap, title: t("home.pillars.edu.title"), desc: t("home.pillars.edu.desc") },
              { Icon: Stethoscope, title: t("home.pillars.health.title"), desc: t("home.pillars.health.desc") },
              { Icon: Sparkles, title: t("home.pillars.trade.title"), desc: t("home.pillars.trade.desc") },
            ].map(({ Icon, title, desc }, i) => (
              <Reveal
                key={title}
                as="article"
                delay={i * 120}
                className="group lift rounded-3xl border border-border bg-background p-7"
              >
                <span className="mb-5 inline-grid size-12 place-items-center rounded-2xl bg-primary/10 text-primary transition-all duration-300 group-hover:rotate-3 group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground">
                  <Icon className="size-5" />
                </span>
                <h3 className="font-serif text-xl text-primary">{title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{desc}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-cotton py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <Reveal className="mb-12 flex flex-wrap items-end justify-between gap-6">
            <div className="max-w-2xl">
              <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-primary-light">
                {t("team.eyebrow")}
              </p>
              <h2 className="mt-3 font-serif text-4xl text-primary md:text-5xl">{t("team.title")}</h2>
              <p className="mt-4 text-base text-muted-foreground">{t("team.intro")}</p>
            </div>
            <Link
              to="/team"
              className="group inline-flex items-center gap-2 rounded-full border border-border bg-background px-5 py-2.5 text-sm font-semibold text-primary hover:bg-accent"
            >
              View all
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Reveal>
          <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
            {HOME_TEAM.slice(0, 3).map((m, i) => {
              const img = getImg(m.slot, m.fallback);
              return (
                <Reveal
                  key={m.slot}
                  as="article"
                  delay={i * 80}
                  className="group lift overflow-hidden rounded-3xl border border-border bg-background shadow-card"
                >
                  <div className="aspect-[4/3] overflow-hidden bg-muted">
                    <img
                      src={img}
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
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <Reveal className="mb-12 flex flex-wrap items-end justify-between gap-6">
            <div className="max-w-2xl">
              <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-primary-light">
                {t("sh.eyebrow")}
              </p>
              <h2 className="mt-3 font-serif text-4xl text-primary md:text-5xl">{t("sh.title")}</h2>
              <p className="mt-4 text-base text-muted-foreground">{t("sh.intro")}</p>
            </div>
            <Link
              to="/shareholders"
              className="group inline-flex items-center gap-2 rounded-full border border-border bg-background px-5 py-2.5 text-sm font-semibold text-primary hover:bg-accent"
            >
              View all
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Reveal>
          <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
            {HOME_SHAREHOLDERS.map((s, i) => {
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

      <section className="py-24">

        <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 lg:grid-cols-2 lg:px-12">
          <Reveal className="relative">
            <div className="zoom-img overflow-hidden rounded-3xl shadow-card">
              <img
                src={storySrc}
                alt="Dinigaas school building"
                loading="lazy"
                width={1200}
                height={900}
                className="w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 hidden animate-float rounded-2xl bg-primary p-5 text-primary-foreground shadow-card md:block">
              <p className="font-serif text-2xl">{t("home.est.title")}</p>
              <p className="text-xs text-primary-foreground/70">{t("home.est.sub")}</p>
            </div>
          </Reveal>
          <Reveal delay={150}>
            <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-primary-light">{t("home.story.eyebrow")}</p>
            <h2 className="mt-3 font-serif text-4xl text-primary md:text-5xl">
              {t("home.story.title")}
            </h2>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground">
              {t("home.story.body")}
            </p>
            <ul className="mt-8 space-y-4">
              {[
                [t("home.story.li1.t"), t("home.story.li1.d")],
                [t("home.story.li2.t"), t("home.story.li2.d")],
                [t("home.story.li3.t"), t("home.story.li3.d")],
              ].map(([head, body]) => (
                <li key={head} className="flex gap-4 transition-transform hover:translate-x-1">
                  <span className="mt-1 grid size-7 shrink-0 place-items-center rounded-full bg-primary/10 text-primary transition-transform hover:scale-110">
                    <ShieldCheck className="size-4" />
                  </span>
                  <div>
                    <p className="font-semibold text-foreground">{head}</p>
                    <p className="text-sm text-muted-foreground">{body}</p>
                  </div>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <section className="bg-primary py-20 text-primary-foreground">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 lg:grid-cols-2 lg:px-12">
          <Reveal>
            <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-primary-foreground/70">{t("home.health.eyebrow")}</p>
            <h2 className="mt-3 font-serif text-4xl md:text-5xl">
              {t("home.health.title")}
            </h2>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-primary-foreground/80">
              {t("home.health.body")}
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                to="/services"
                className="group inline-flex items-center gap-2 rounded-full bg-primary-foreground px-6 py-3 text-sm font-semibold text-primary transition-all hover:-translate-y-0.5 hover:bg-primary-foreground/90 hover:shadow-lg"
              >
                {t("home.health.browse")}
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center rounded-full border border-primary-foreground/25 px-6 py-3 text-sm font-semibold text-primary-foreground transition-all hover:-translate-y-0.5 hover:bg-primary-foreground/10"
              >
                {t("home.health.book")}
              </Link>
            </div>
          </Reveal>
          <Reveal delay={150} className="zoom-img overflow-hidden rounded-3xl shadow-card">
            <img
              src={healthSrc}
              alt="Healthcare professional at the Dinigaas clinic"
              loading="lazy"
              width={1200}
              height={900}
              className="w-full object-cover"
            />
          </Reveal>
        </div>
      </section>

      <section className="py-24">
        <Reveal className="lift mx-auto max-w-5xl rounded-3xl border border-border bg-cotton p-10 text-center md:p-16">
          <span className="mx-auto inline-grid size-14 animate-pulse-ring place-items-center rounded-full bg-primary/10 text-primary">
            <Users className="size-7" />
          </span>
          <h2 className="mt-4 font-serif text-4xl text-primary md:text-5xl">{t("home.cta.title")}</h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            {t("home.cta.body")}
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link
              to="/contact"
              className="btn-glow relative overflow-visible rounded-full bg-primary px-7 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary-light"
            >
              <span className="btn-halo" aria-hidden />
              {t("home.cta.getInTouch")}
            </Link>
            <Link
              to="/about"
              className="btn-glow relative overflow-visible rounded-full border border-border bg-background px-7 py-3 text-sm font-semibold text-foreground hover:bg-accent"
            >
              <span className="btn-halo" aria-hidden />
              {t("home.cta.about")}
            </Link>
          </div>
        </Reveal>
      </section>
    </SiteLayout>
  );
}
