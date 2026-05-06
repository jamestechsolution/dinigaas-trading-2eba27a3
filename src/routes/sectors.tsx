import { createFileRoute, Link } from "@tanstack/react-router";
import {
  GraduationCap,
  Stethoscope,
  Mountain,
  Wheat,
  ShoppingBag,
  ArrowRight,
  CheckCircle2,
  HelpCircle,
} from "lucide-react";
import { SiteLayout } from "@/components/SiteLayout";
import { Reveal } from "@/components/Reveal";
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
  title: string;
  tagline: string;
  description: string;
  highlights: string[];
};

const SECTORS: Sector[] = [
  {
    Icon: GraduationCap,
    title: "Education",
    tagline: "Nurturing the next generation, KG1 to Grade 8.",
    description:
      "Our schools deliver a modern, child-centered curriculum that blends academic rigor with social and emotional growth. Certified educators guide students from early years through middle school in classrooms designed for active learning, creativity and curiosity. We also invest in teacher training, learning materials and parent engagement so every child has the support they need to thrive — both inside the classroom and at home.",
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
    title: "Health",
    tagline: "Compassionate, accessible care close to home.",
    description:
      "Our clinic provides affordable outpatient care, maternal and child health services, immunizations and laboratory diagnostics for families across Gefarsa Gujje Kella. A warm, qualified team works to make every visit safe and dignified, while community outreach programs bring health education and preventive services directly to neighborhoods, schools and workplaces.",
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
    title: "Mining",
    tagline: "Responsible sourcing with community at the core.",
    description:
      "We operate in mining with a focus on safety, sustainability and shared value. Through responsible mineral sourcing, modern extraction practices and strong logistics partnerships, we help unlock the value of Ethiopia's natural resources while protecting workers and surrounding communities. Local partnerships and transparent operations are central to how we do business.",
    highlights: [
      "Responsible mineral sourcing",
      "Local community partnerships",
      "Safe extraction practices",
      "Logistics & supply support",
    ],
  },
  {
    Icon: Wheat,
    title: "Agriculture",
    tagline: "Supporting farmers and feeding the city.",
    description:
      "Our agriculture work connects smallholder farmers with the inputs, knowledge and markets they need to grow sustainable livelihoods. From crop production and modern farming inputs to post-harvest handling and distribution, we strengthen the food system that supports schools, clinics and households across the region.",
    highlights: [
      "Crop production & supply",
      "Smallholder farmer support",
      "Modern farming inputs",
      "Post-harvest handling",
    ],
  },
  {
    Icon: ShoppingBag,
    title: "Commerce",
    tagline: "Reliable trading and distribution for everyday needs.",
    description:
      "Our commerce arm covers general trading, wholesale and retail operations — supplying educational materials, medical equipment, consumer goods and more. By building dependable supply chains and supporting local market development, we keep essential products flowing to schools, clinics and businesses throughout Sheger City.",
    highlights: [
      "General trading & distribution",
      "Educational & medical supplies",
      "Wholesale & retail operations",
      "Local market development",
    ],
  },
];

type FaqGroup = { sector: string; faqs: { q: string; a: string }[] };

const SECTOR_FAQS: FaqGroup[] = [
  {
    sector: "Education",
    faqs: [
      {
        q: "What grade levels do your schools offer?",
        a: "We offer a complete early-years to middle-school path: KG1–KG3, primary (Grade 1–4) and middle school (Grade 5–8).",
      },
      {
        q: "How do I register my child?",
        a: "You can start the process online from our Register page, or visit our campus in Gefarsa Gujje Kella. Our admissions team will guide you through documents, placement and fees.",
      },
      {
        q: "Do you offer after-school programs?",
        a: "Yes — we run after-school enrichment and tutoring sessions in core subjects, reading clubs and creative activities.",
      },
    ],
  },
  {
    sector: "Health",
    faqs: [
      {
        q: "What services does the clinic provide?",
        a: "General outpatient consultations, maternal and child health, immunizations and laboratory diagnostics — all delivered by qualified staff.",
      },
      {
        q: "Do I need an appointment?",
        a: "Walk-ins are welcome for general consultations. For specialist visits and lab work, we recommend booking ahead by phone.",
      },
      {
        q: "Do you run community outreach programs?",
        a: "Yes — we organize regular health education and preventive care visits in schools, neighborhoods and workplaces.",
      },
    ],
  },
  {
    sector: "Mining",
    faqs: [
      {
        q: "What minerals do you work with?",
        a: "We focus on responsibly sourced industrial minerals from licensed sites, with safety and traceability built into every step.",
      },
      {
        q: "How do you ensure safety and sustainability?",
        a: "We follow modern extraction practices, regular safety training and environmental monitoring, alongside transparent community engagement.",
      },
      {
        q: "Can suppliers and partners work with you?",
        a: "Absolutely. We welcome logistics, equipment and community partners — reach out through our contact page to start a conversation.",
      },
    ],
  },
  {
    sector: "Agriculture",
    faqs: [
      {
        q: "Which crops do you focus on?",
        a: "We support a mix of staple and cash crops adapted to local conditions, prioritizing food security for the surrounding community.",
      },
      {
        q: "Do you work directly with smallholder farmers?",
        a: "Yes. We provide modern inputs, training and reliable market access so smallholders can grow stable, sustainable livelihoods.",
      },
      {
        q: "How do you handle post-harvest?",
        a: "Through proper storage, handling and distribution partners we minimize losses and keep produce moving from farm to market.",
      },
    ],
  },
  {
    sector: "Commerce",
    faqs: [
      {
        q: "What products do you trade and distribute?",
        a: "Educational materials, medical supplies and a range of consumer goods supporting schools, clinics and businesses across the region.",
      },
      {
        q: "Can institutions order in bulk?",
        a: "Yes — we serve schools, clinics, NGOs and private businesses with wholesale pricing and dependable delivery.",
      },
      {
        q: "How do I become a supplier?",
        a: "Contact our commerce team via the contact page with your company profile and product catalog; we'll be in touch.",
      },
    ],
  },
];

function SectorsPage() {
  return (
    <SiteLayout>
      <section className="bg-cotton py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-primary-light">
            Our Sectors
          </p>
          <h1 className="mt-3 max-w-3xl font-serif text-5xl text-primary md:text-6xl">
            Five sectors. One integrated mission.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
            Dinigaas Trading S.C. invests across Education, Health, Mining, Agriculture and
            Commerce — building a stronger, more self-reliant community for Sheger City and beyond.
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
                  Sector 0{i + 1}
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

      <section className="py-16">
        <div className="mx-auto max-w-5xl rounded-3xl bg-primary p-10 text-center text-primary-foreground md:p-16">
          <h2 className="font-serif text-4xl md:text-5xl">Want to work with us?</h2>
          <p className="mx-auto mt-4 max-w-xl text-primary-foreground/80">
            Whether you're a parent, partner, supplier or community member — we'd love to hear
            from you.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-primary-foreground px-7 py-3 text-sm font-semibold text-primary hover:bg-primary-foreground/90"
            >
              Contact us <ArrowRight className="size-4" />
            </Link>
            <Link
              to="/services"
              className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/40 px-7 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary-foreground/10"
            >
              View services
            </Link>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
