import { createFileRoute } from "@tanstack/react-router";
import { Mail, Phone, Briefcase, PieChart } from "lucide-react";
import { SiteLayout } from "@/components/SiteLayout";
import { Reveal } from "@/components/Reveal";
import { PersonAvatar } from "@/components/Avatar";
import { useSiteImages } from "@/hooks/use-site-images";
import { useI18n } from "@/i18n/I18nProvider";

export const Route = createFileRoute("/shareholders")({
  head: () => ({
    meta: [
      { title: "Shareholders — Dinigaas Trading S.C." },
      {
        name: "description",
        content:
          "Meet the shareholders and partners of Dinigaas Trading S.C. — their roles, stakes, and contributions.",
      },
      { property: "og:title", content: "Shareholders — Dinigaas Trading S.C." },
      { property: "og:description", content: "Our shareholders, partners and their roles." },
    ],
  }),
  component: ShareholdersPage,
});

type Shareholder = {
  slot: string;
  nameKey: string;
  stakeKey: string;
  role: string;
  stake: string;
  bio: string;
  email: string;
  phone: string;
};

const SHAREHOLDERS: Shareholder[] = [
  {
    slot: "shareholder.s1",
    nameKey: "sh.s1.n",
    stakeKey: "sh.s1.s",
    role: "Founder & Chairman",
    stake: "35% equity",
    bio: "Founded Dinigaas Trading S.C. in 2013 with a vision of bringing quality education and healthcare to Sheger City. Oversees long-term strategy across all five sectors.",
    email: "tesfaye@dinigaas.com",
    phone: "+251 911 000 001",
  },
  {
    slot: "shareholder.s2",
    nameKey: "sh.s2.n",
    stakeKey: "sh.s2.s",
    role: "Principal Investor",
    stake: "28% equity",
    bio: "Leads investment decisions and capital allocation for the company's healthcare and agricultural programs. Brings 20+ years of financial expertise.",
    email: "genet@dinigaas.com",
    phone: "+251 911 000 002",
  },
  {
    slot: "shareholder.s3",
    nameKey: "sh.s3.n",
    stakeKey: "sh.s3.s",
    role: "Strategic Partner",
    stake: "22% equity",
    bio: "Drives partnerships across mining and commerce sectors. Responsible for expanding the company's regional footprint and trade relationships.",
    email: "dawit@dinigaas.com",
    phone: "+251 911 000 003",
  },
  {
    slot: "shareholder.s4",
    nameKey: "sh.s4.n",
    stakeKey: "sh.s4.s",
    role: "Board Member",
    stake: "15% equity",
    bio: "Champions the education portfolio, including Albright Academy. Focuses on curriculum quality, teacher development, and student outcomes.",
    email: "almaz@dinigaas.com",
    phone: "+251 911 000 004",
  },
];

function ShareholdersPage() {
  const { t } = useI18n();
  const { get } = useSiteImages();

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
          <div className="grid gap-8 md:grid-cols-2">
            {SHAREHOLDERS.map((s, i) => {
              const name = t(s.nameKey);
              const stakeLabel = t(s.stakeKey);
              const photo = get(s.slot, "");
              return (
                <Reveal
                  key={s.slot}
                  as="article"
                  delay={i * 80}
                  className="group lift overflow-hidden rounded-3xl border border-border bg-background shadow-card"
                >
                  <div className="grid gap-0 sm:grid-cols-[200px_1fr]">
                    <div className="aspect-square sm:aspect-auto overflow-hidden bg-muted">
                      {photo ? (
                        <img
                          src={photo}
                          alt={name}
                          loading="lazy"
                          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      ) : (
                        <PersonAvatar
                          name={name}
                          className="h-full w-full transition-transform duration-500 group-hover:scale-105"
                        />
                      )}
                    </div>
                    <div className="p-6">
                      <h3 className="font-serif text-2xl text-primary">{name}</h3>
                      <p className="mt-1 text-xs font-bold uppercase tracking-widest text-clay">
                        {stakeLabel}
                      </p>
                      <div className="mt-4 flex flex-wrap gap-2">
                        <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                          <Briefcase className="size-3" /> {s.role}
                        </span>
                        <span className="inline-flex items-center gap-1.5 rounded-full bg-accent px-3 py-1 text-xs font-semibold text-foreground">
                          <PieChart className="size-3" /> {s.stake}
                        </span>
                      </div>
                      <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{s.bio}</p>
                      <div className="mt-5 space-y-1.5 border-t border-border pt-4 text-sm">
                        <a
                          href={`mailto:${s.email}`}
                          className="flex items-center gap-2 text-muted-foreground hover:text-primary"
                        >
                          <Mail className="size-4 shrink-0" /> {s.email}
                        </a>
                        <a
                          href={`tel:${s.phone.replace(/\s/g, "")}`}
                          className="flex items-center gap-2 text-muted-foreground hover:text-primary"
                        >
                          <Phone className="size-4 shrink-0" /> {s.phone}
                        </a>
                      </div>
                    </div>
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
