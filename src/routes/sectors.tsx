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
