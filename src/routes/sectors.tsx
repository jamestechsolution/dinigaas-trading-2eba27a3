import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  GraduationCap,
  Stethoscope,
  Mountain,
  Wheat,
  ShoppingBag,
  ArrowRight,
  CheckCircle2,
  HelpCircle,
  Link2,
  Check,
} from "lucide-react";
import { SiteLayout } from "@/components/SiteLayout";
import { Reveal } from "@/components/Reveal";
import { useI18n } from "@/i18n/I18nProvider";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const Route = createFileRoute("/sectors")({
  head: () => ({
    meta: [
      { title: "Sectors — Dinigaas Trading S.C." },
      {
        name: "description",
        content:
          "Explore the five sectors Dinigaas Trading S.C. operates in: Education, Health, Mining, Agriculture, and Commerce.",
      },
      { property: "og:title", content: "Our Sectors — Dinigaas Trading S.C." },
      {
        property: "og:description",
        content:
          "Education, Health, Mining, Agriculture, and Commerce — integrated solutions for Sheger City and beyond.",
      },
    ],
  }),
  component: SectorsPage,
});

type Sector = {
  Icon: typeof GraduationCap;
  key: "education" | "health" | "mining" | "agriculture" | "commerce";
  title: string;
  tagline: string;
  description: string;
  highlights: string[];
};

type LangPack = {
  sectors: Sector[];
  faqs: { sector: string; key: string; faqs: { q: string; a: string }[] }[];
};

function buildContent(lang: "en" | "am" | "om"): LangPack {
  const en: LangPack = {
    sectors: [
      {
        Icon: GraduationCap,
        key: "education",
        title: "Education",
        tagline: "Nurturing the next generation, KG1 to Grade 8.",
        description:
          "Our schools deliver a modern, child-centered curriculum that blends academic rigor with social and emotional growth. Certified educators guide students from early years through middle school in classrooms designed for active learning.",
        highlights: [
          "KG1–KG3 early years program",
          "Primary education (Grade 1–4)",
          "Middle school (Grade 5–8)",
          "After-school enrichment & tutoring",
          "Parent engagement programs",
        ],
      },
      {
        Icon: Stethoscope,
        key: "health",
        title: "Health",
        tagline: "Compassionate, accessible care close to home.",
        description:
          "Our clinic provides affordable outpatient care, maternal and child health services, immunizations and laboratory diagnostics for families across Gefarsa Gujje Kella.",
        highlights: [
          "General outpatient consultations",
          "Maternal & child health",
          "Vaccination & immunization",
          "Laboratory & diagnostic services",
          "Community health outreach",
        ],
      },
      {
        Icon: Mountain,
        key: "mining",
        title: "Mining",
        tagline: "Responsible sourcing with community at the core.",
        description:
          "We operate in mining with a focus on safety, sustainability and shared value, helping unlock the value of Ethiopia's natural resources while protecting workers and surrounding communities.",
        highlights: [
          "Responsible mineral sourcing",
          "Local community partnerships",
          "Safe extraction practices",
          "Logistics & supply support",
        ],
      },
      {
        Icon: Wheat,
        key: "agriculture",
        title: "Agriculture",
        tagline: "Supporting farmers and feeding the city.",
        description:
          "Our agriculture work connects smallholder farmers with the inputs, knowledge and markets they need to grow sustainable livelihoods.",
        highlights: [
          "Crop production & supply",
          "Smallholder farmer support",
          "Modern farming inputs",
          "Post-harvest handling",
        ],
      },
      {
        Icon: ShoppingBag,
        key: "commerce",
        title: "Commerce",
        tagline: "Reliable trading and distribution for everyday needs.",
        description:
          "Our commerce arm covers general trading, wholesale and retail operations — supplying educational materials, medical equipment, consumer goods and more.",
        highlights: [
          "General trading & distribution",
          "Educational & medical supplies",
          "Wholesale & retail operations",
          "Local market development",
        ],
      },
    ],
    faqs: [
      {
        sector: "Education",
        key: "education",
        faqs: [
          { q: "What grade levels do your schools offer?", a: "We offer KG1–KG3, primary (Grade 1–4) and middle school (Grade 5–8)." },
          { q: "How do I register my child?", a: "Start online from our Register page or visit our campus in Gefarsa Gujje Kella." },
          { q: "Do you offer after-school programs?", a: "Yes — enrichment and tutoring sessions, reading clubs and creative activities." },
        ],
      },
      {
        sector: "Health",
        key: "health",
        faqs: [
          { q: "What services does the clinic provide?", a: "Outpatient consultations, maternal and child health, immunizations and lab diagnostics." },
          { q: "Do I need an appointment?", a: "Walk-ins are welcome; for specialist visits and lab work, booking ahead is recommended." },
          { q: "Do you run community outreach programs?", a: "Yes — regular health education and preventive care visits." },
        ],
      },
      {
        sector: "Mining",
        key: "mining",
        faqs: [
          { q: "What minerals do you work with?", a: "Responsibly sourced industrial minerals from licensed sites." },
          { q: "How do you ensure safety and sustainability?", a: "Modern extraction, regular safety training and environmental monitoring." },
          { q: "Can suppliers and partners work with you?", a: "Yes — reach out via our contact page." },
        ],
      },
      {
        sector: "Agriculture",
        key: "agriculture",
        faqs: [
          { q: "Which crops do you focus on?", a: "Staple and cash crops adapted to local conditions, prioritizing food security." },
          { q: "Do you work directly with smallholder farmers?", a: "Yes — modern inputs, training and reliable market access." },
          { q: "How do you handle post-harvest?", a: "Proper storage, handling and distribution partners minimize losses." },
        ],
      },
      {
        sector: "Commerce",
        key: "commerce",
        faqs: [
          { q: "What products do you trade and distribute?", a: "Educational materials, medical supplies and consumer goods." },
          { q: "Can institutions order in bulk?", a: "Yes — wholesale pricing and dependable delivery for schools, clinics, NGOs." },
          { q: "How do I become a supplier?", a: "Contact our commerce team via the contact page with your company profile." },
        ],
      },
    ],
  };

  const am: LangPack = {
    sectors: [
      { Icon: GraduationCap, key: "education", title: "ትምህርት", tagline: "ቀጣዩን ትውልድ ማሳደግ፣ ኬጂ1 እስከ 8ኛ ክፍል።", description: "ት/ቤቶቻችን ዘመናዊና ልጅ-ተኮር ሥርዓተ-ትምህርት ይሰጣሉ።", highlights: ["ኬጂ1–ኬጂ3 መጀመሪያ ዓመታት", "የመጀመሪያ ደረጃ (ክፍል 1–4)", "መካከለኛ ደረጃ (ክፍል 5–8)", "ከትምህርት ሰዓት ውጪ ድጋፍ", "የወላጆች ተሳትፎ"] },
      { Icon: Stethoscope, key: "health", title: "ጤና", tagline: "ርኅራኄ ያለውና ተደራሽ እንክብካቤ።", description: "ክሊኒካችን የውጪ ህሙማን፣ የእናቶችና ህፃናት ጤና፣ ክትባቶችና ላቦራቶሪ ያቀርባል።", highlights: ["የውጪ ህሙማን ምርመራ", "የእናቶችና ህፃናት ጤና", "ክትባት", "ላቦራቶሪ", "የማህበረሰብ ጤና"] },
      { Icon: Mountain, key: "mining", title: "ማዕድን", tagline: "ኃላፊነት ያለው ምንጭ።", description: "ደህንነት፣ ዘላቂነትና የጋራ እሴት ላይ አተኩረን እንሰራለን።", highlights: ["ኃላፊነት ያለው ምንጭ", "የአካባቢ አጋርነት", "ደህንነቱ የተጠበቀ ስራ", "ሎጅስቲክስ ድጋፍ"] },
      { Icon: Wheat, key: "agriculture", title: "ግብርና", tagline: "ገበሬዎችን መደገፍ።", description: "አነስተኛ ገበሬዎችን ከገብያዎች ጋር እናገናኛለን።", highlights: ["ሰብል ምርት", "የገበሬዎች ድጋፍ", "ዘመናዊ ግብዓቶች", "ድህረ-ሰብል"] },
      { Icon: ShoppingBag, key: "commerce", title: "ንግድ", tagline: "አስተማማኝ ንግድና ስርጭት።", description: "አጠቃላይ ንግድ፣ ጅምላና ችርቻሮ።", highlights: ["አጠቃላይ ንግድ", "የትምህርትና የህክምና አቅርቦት", "ጅምላና ችርቻሮ", "የአካባቢ ገበያ ልማት"] },
    ],
    faqs: [
      { sector: "ትምህርት", key: "education", faqs: [
        { q: "ት/ቤቶቻችሁ የትኞቹን ክፍሎች ይሰጣሉ?", a: "ኬጂ1–ኬጂ3፣ የመጀመሪያ (1–4) እና መካከለኛ (5–8)።" },
        { q: "ልጄን እንዴት ላስመዝግብ?", a: "በምዝገባ ገጻችን ይጀምሩ ወይም ይምጡ።" },
        { q: "ከትምህርት ሰዓት ውጪ ፕሮግራም አለ?", a: "አዎ — ድጋፍ፣ ንባብና ፈጠራ።" },
      ]},
      { sector: "ጤና", key: "health", faqs: [
        { q: "ክሊኒኩ ምን ያቀርባል?", a: "የውጪ ህሙማን፣ እናቶችና ህፃናት፣ ክትባትና ላቦራቶሪ።" },
        { q: "ቀጠሮ ያስፈልገኛል?", a: "ቀጥታ መምጣት ይቻላል፤ ለልዩ ቀጠሮ መያዝ ይመከራል።" },
        { q: "የማህበረሰብ ፕሮግራሞች አሉ?", a: "አዎ — መደበኛ የጤና ትምህርትና ጉብኝቶች።" },
      ]},
      { sector: "ማዕድን", key: "mining", faqs: [
        { q: "የምትሰሩት የትኞቹ ማዕድናት ናቸው?", a: "ከተፈቀዱ ቦታዎች ኃላፊነት ባለው መንገድ።" },
        { q: "ደህንነትን እንዴት ታረጋግጣላችሁ?", a: "ዘመናዊ አወጣጥ፣ ስልጠናና የአካባቢ ክትትል።" },
        { q: "አጋር መሆን ይቻላል?", a: "አዎ — በእውቂያ ገጻችን ይገናኙን።" },
      ]},
      { sector: "ግብርና", key: "agriculture", faqs: [
        { q: "በየትኞቹ ሰብሎች ላይ ታተኩራላችሁ?", a: "ለአካባቢው ተስማሚ ሰብሎች።" },
        { q: "ከአነስተኛ ገበሬዎች ጋር ትሰራላችሁ?", a: "አዎ — ግብዓቶች፣ ስልጠናና ገበያ።" },
        { q: "ድህረ-ሰብል እንዴት ይያዛል?", a: "ተገቢ ማከማቻና ስርጭት።" },
      ]},
      { sector: "ንግድ", key: "commerce", faqs: [
        { q: "ምን ምርቶች ናቸው?", a: "የትምህርትና የጤና ቁሳቁስ፣ የተጠቃሚ እቃዎች።" },
        { q: "በጅምላ መግዛት ይቻላል?", a: "አዎ — ለት/ቤቶችና ድርጅቶች።" },
        { q: "አቅራቢ መሆን እንዴት?", a: "በእውቂያ ገጻችን ያግኙን።" },
      ]},
    ],
  };

  const om: LangPack = {
    sectors: [
      { Icon: GraduationCap, key: "education", title: "Barnoota", tagline: "Dhaloota itti aanu guddisuu, KG1 hanga kutaa 8.", description: "Manni barumsaa keenya sirna barnootaa ammayyaa fi mucaa-giddugaleessa kenna.", highlights: ["Sagantaa KG1–KG3", "Sadarkaa tokkoffaa (1–4)", "Giddugaleessa (5–8)", "Deeggarsa booda barnoota", "Hirmaannaa maatii"] },
      { Icon: Stethoscope, key: "health", title: "Fayyaa", tagline: "Kunuunsa garaa-laafinaa, dhihoo.", description: "Kiliinikni keenya yaalii alaa, fayyaa haadhaa fi mucaa, talaallii fi laaboraatoorii dhiyeessa.", highlights: ["Yaalii alaa", "Fayyaa haadhaa fi mucaa", "Talaallii", "Laaboraatoorii", "Tajaajila hawaasaa"] },
      { Icon: Mountain, key: "mining", title: "Albuuda", tagline: "Madda itti gaafatamaa.", description: "Nageenya, dhaabbii fi gatii waliinii irratti xiyyeeffanna.", highlights: ["Madda itti gaafatamaa", "Michuu naannoo", "Hojii nagaa", "Deeggarsa loojistikii"] },
      { Icon: Wheat, key: "agriculture", title: "Qonna", tagline: "Qonnaan bultoota deeggaruu.", description: "Qonnaan bultoota xixiqqaa gabaa wajjin walqunnamsiisna.", highlights: ["Oomisha midhaanii", "Deeggarsa qonnaan bulaa", "Meeshaa ammayyaa", "Booda-oomishaa"] },
      { Icon: ShoppingBag, key: "commerce", title: "Daldala", tagline: "Daldala fi dhiyeessii amanamaa.", description: "Daldala waliigalaa, jumlaa fi kuusaa.", highlights: ["Daldala waliigalaa", "Meeshaa barnoota fi fayyaa", "Jumlaa fi kuusaa", "Misooma gabaa"] },
    ],
    faqs: [
      { sector: "Barnoota", key: "education", faqs: [
        { q: "Sadarkaalee kamiin manni barumsaa keessan dhiyeessa?", a: "KG1–KG3, sadarkaa tokkoffaa (1–4) fi giddugaleessa (5–8)." },
        { q: "Mucaa koo akkamitti galmeessuu danda'a?", a: "Fuula galmee irraa jalqabuu yookin nu daawwachuu." },
        { q: "Sagantaa booda barnootaa qabduu?", a: "Eeyyee — deeggarsa, dubbisuu fi tola." },
      ]},
      { sector: "Fayyaa", key: "health", faqs: [
        { q: "Kiliinikni maal dhiyeessa?", a: "Yaalii alaa, fayyaa haadhaa fi mucaa, talaallii fi laaboraatoorii." },
        { q: "Beellama na barbaachisaa?", a: "Kallattiin dhufuun ni danda'ama; ogeessotaaf beellama gaaridha." },
        { q: "Sagantaa hawaasaa qabduu?", a: "Eeyyee — barnoota fayyaa fi daawwannaa." },
      ]},
      { sector: "Albuuda", key: "mining", faqs: [
        { q: "Albuuda kam wajjin hojjattu?", a: "Iddoo eeyyamamoo irraa itti gaafatamummaadhaan." },
        { q: "Nageenya akkamitti mirkaneessitu?", a: "Hojii ammayyaa, leenjii fi to'annoo naannoo." },
        { q: "Michuu ta'uun ni danda'amaa?", a: "Eeyyee — fuula nu quunnamuu irraa." },
      ]},
      { sector: "Qonna", key: "agriculture", faqs: [
        { q: "Midhaan kam irratti xiyyeeffattu?", a: "Midhaan haala naannoof mijatu." },
        { q: "Qonnaan bultoota xixiqqaa wajjin hojjattuu?", a: "Eeyyee — meeshaa, leenjii fi gabaa." },
        { q: "Booda-oomisha akkamitti?", a: "Kuusaa fi raabsaa sirrii." },
      ]},
      { sector: "Daldala", key: "commerce", faqs: [
        { q: "Oomisha kam dhiyeessitu?", a: "Meeshaa barnoota fi fayyaa, oomisha fayyadamaa." },
        { q: "Jumlaan bituun ni danda'amaa?", a: "Eeyyee — manneen barnootaa fi dhaabbileef." },
        { q: "Akka dhiyeessaa ta'utti akkamitti?", a: "Fuula nu quunnamuu irraan nu quunnamaa." },
      ]},
    ],
  };

  return lang === "am" ? am : lang === "om" ? om : en;
}

function slugify(s: string) {
  return s
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-")
    .slice(0, 60) || "faq";
}

function SectorsPage() {
  const { t, lang } = useI18n();
  const { sectors: SECTORS, faqs: SECTOR_FAQS } = buildContent(lang);
  const [openHash, setOpenHash] = useState<string>("");
  const [copied, setCopied] = useState<string>("");

  // Read hash from URL on mount + when it changes
  useEffect(() => {
    function sync() {
      const h = decodeURIComponent(window.location.hash.replace(/^#/, ""));
      setOpenHash(h);
      if (h) {
        // Scroll the matching element into view
        requestAnimationFrame(() => {
          const el = document.getElementById(h);
          if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
        });
      }
    }
    sync();
    window.addEventListener("hashchange", sync);
    return () => window.removeEventListener("hashchange", sync);
  }, []);

  function copyLink(id: string) {
    const url = `${window.location.origin}${window.location.pathname}#${id}`;
    navigator.clipboard?.writeText(url);
    setCopied(id);
    // Update URL without scroll jump
    history.replaceState(null, "", `#${id}`);
    setOpenHash(id);
    setTimeout(() => setCopied(""), 1600);
  }

  return (
    <SiteLayout>
      <section className="bg-cotton py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-primary-light">
            {t("sectors.eyebrow")}
          </p>
          <h1 className="mt-3 max-w-3xl font-serif text-5xl text-primary md:text-6xl">
            {t("sectors.title")}
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
            {t("sectors.intro")}
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl space-y-16 px-6 lg:px-12">
          {SECTORS.map(({ Icon, title, tagline, description, highlights }, i) => (
            <Reveal
              key={title}
              as="article"
              className="grid gap-10 scroll-mt-24 rounded-3xl border border-border bg-background p-8 shadow-card md:grid-cols-[auto_1fr] md:p-12"
            >
              <div className="flex md:block">
                <span className="grid size-16 place-items-center rounded-2xl bg-primary/10 text-primary">
                  <Icon className="size-8" />
                </span>
              </div>
              <div>
                <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-clay">
                  {t("sectors.sectorN", { n: i + 1 })}
                </p>
                <h2 className="mt-2 font-serif text-4xl text-primary">{title}</h2>
                <p className="mt-2 text-lg font-medium text-foreground/80">{tagline}</p>
                <p className="mt-5 text-base leading-relaxed text-muted-foreground">
                  {description}
                </p>
                <ul className="mt-7 grid gap-3 sm:grid-cols-2">
                  {highlights.map((h) => (
                    <li key={h} className="flex items-start gap-3 text-sm text-foreground/80">
                      <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-primary" />
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section id="faq" className="bg-cotton py-20 scroll-mt-24">
        <div className="mx-auto max-w-5xl px-6 lg:px-12">
          <Reveal className="text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.22em] text-primary">
              <HelpCircle className="size-3.5" />
              {t("sectors.faq.eyebrow")}
            </span>
            <h2 className="mt-4 font-serif text-4xl text-primary md:text-5xl">
              {t("sectors.faq.title")}
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              {t("sectors.faq.subtitle")}
            </p>
          </Reveal>

          <div className="mt-12 space-y-10">
            {SECTOR_FAQS.map((group, gi) => {
              // Determine which item is open in this group from URL hash
              const openValues = group.faqs
                .map((f) => `faq-${group.key}-${slugify(f.q)}`)
                .filter((id) => id === openHash);
              const openValue = openValues[0] ?? undefined;
              return (
                <Reveal
                  key={group.sector}
                  delay={gi * 80}
                  className="rounded-3xl border border-border bg-background p-6 shadow-card md:p-8 lift"
                >
                  <h3 className="font-serif text-2xl text-primary">{group.sector}</h3>
                  <Accordion
                    type="single"
                    collapsible
                    className="mt-3"
                    value={openValue}
                    onValueChange={(v) => {
                      setOpenHash(v ?? "");
                      if (v) history.replaceState(null, "", `#${v}`);
                      else history.replaceState(null, "", window.location.pathname);
                    }}
                  >
                    {group.faqs.map((f) => {
                      const id = `faq-${group.key}-${slugify(f.q)}`;
                      const isCopied = copied === id;
                      return (
                        <AccordionItem
                          key={id}
                          value={id}
                          id={id}
                          className="scroll-mt-28 group/item"
                        >
                          <div className="flex items-center gap-2">
                            <AccordionTrigger className="flex-1 text-left text-base font-semibold text-foreground transition-colors hover:text-primary [&[data-state=open]>svg]:rotate-180 [&>svg]:transition-transform [&>svg]:duration-300">
                              {f.q}
                            </AccordionTrigger>
                            <button
                              type="button"
                              onClick={(e) => {
                                e.stopPropagation();
                                copyLink(id);
                              }}
                              title={isCopied ? t("sectors.faq.copied") : t("sectors.faq.copy")}
                              aria-label={isCopied ? t("sectors.faq.copied") : t("sectors.faq.copy")}
                              className="grid size-8 shrink-0 place-items-center rounded-full text-muted-foreground opacity-0 transition-all hover:bg-primary/10 hover:text-primary group-hover/item:opacity-100 focus:opacity-100"
                            >
                              {isCopied ? <Check className="size-4 text-primary" /> : <Link2 className="size-4" />}
                            </button>
                          </div>
                          <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                            {f.a}
                          </AccordionContent>
                        </AccordionItem>
                      );
                    })}
                  </Accordion>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-5xl rounded-3xl bg-primary p-10 text-center text-primary-foreground md:p-16">
          <h2 className="font-serif text-4xl md:text-5xl">{t("sectors.work.title")}</h2>
          <p className="mx-auto mt-4 max-w-xl text-primary-foreground/80">
            {t("sectors.work.body")}
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-primary-foreground px-7 py-3 text-sm font-semibold text-primary hover:bg-primary-foreground/90"
            >
              {t("sectors.work.contact")} <ArrowRight className="size-4" />
            </Link>
            <Link
              to="/services"
              className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/40 px-7 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary-foreground/10"
            >
              {t("sectors.work.services")}
            </Link>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
