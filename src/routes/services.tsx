import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import {
  GraduationCap,
  Stethoscope,
  Mountain,
  Wheat,
  ShoppingBag,
  ArrowRight,
} from "lucide-react";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Dinigaas Trading S.C." },
      {
        name: "description",
        content:
          "Our work across Education, Health, Mining, Agriculture and Commerce serving Sheger City, Ethiopia.",
      },
      { property: "og:title", content: "Services — Dinigaas Trading S.C." },
      {
        property: "og:description",
        content: "Education, Health, Mining, Agriculture and Commerce.",
      },
    ],
  }),
  component: ServicesPage,
});

import { useI18n } from "@/i18n/I18nProvider";

type Sector = { Icon: typeof GraduationCap; title: string; items: string[] };

function ServicesPage() {
  const { t } = useI18n();
  const SECTORS: Sector[] = [
    { Icon: GraduationCap, title: t("services.education"), items: ["KG1 – KG3", "Grade 1–4", "Grade 5–8", "After-school tutoring", "Parent engagement"] },
    { Icon: Stethoscope, title: t("services.health"), items: ["Outpatient consultations", "Maternal & child health", "Vaccination", "Lab & diagnostics", "Community outreach"] },
    { Icon: Mountain, title: t("services.mining"), items: ["Responsible sourcing", "Local partnerships", "Safe extraction", "Logistics & supply"] },
    { Icon: Wheat, title: t("services.agriculture"), items: ["Crop production", "Smallholder support", "Modern inputs", "Post-harvest handling"] },
    { Icon: ShoppingBag, title: t("services.commerce"), items: ["General trading", "Educational & medical supplies", "Wholesale & retail", "Local market development"] },
  ];

  return (
    <SiteLayout>
      <section className="bg-cotton py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-primary-light">{t("services.eyebrow")}</p>
          <h1 className="mt-3 max-w-3xl font-serif text-5xl text-primary md:text-6xl">
            {t("services.title")}
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
            {t("services.intro")}
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 md:grid-cols-2 lg:grid-cols-3 lg:px-12">
          {SECTORS.map(({ Icon, title, items }) => (
            <article key={title} className="rounded-3xl border border-border bg-background p-8 shadow-card">
              <span className="grid size-14 place-items-center rounded-2xl bg-primary/10 text-primary">
                <Icon className="size-6" />
              </span>
              <h2 className="mt-6 font-serif text-2xl text-primary">{title}</h2>
              <ul className="mt-5 space-y-3">
                {items.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-foreground/80">
                    <span className="mt-2 size-1.5 shrink-0 rounded-full bg-clay" />
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-5xl rounded-3xl bg-primary p-10 text-center text-primary-foreground md:p-16">
          <h2 className="font-serif text-4xl md:text-5xl">{t("services.cta.title")}</h2>
          <p className="mx-auto mt-4 max-w-xl text-primary-foreground/80">
            {t("services.cta.body")}
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/register"
              className="inline-flex items-center gap-2 rounded-full bg-primary-foreground px-7 py-3 text-sm font-semibold text-primary hover:bg-primary-foreground/90"
            >
              {t("services.cta.register")} <ArrowRight className="size-4" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/40 px-7 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary-foreground/10"
            >
              {t("services.cta.contact")}
            </Link>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
