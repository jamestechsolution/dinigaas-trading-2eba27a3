import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, PieChart, ImageIcon } from "lucide-react";
import { SiteLayout } from "@/components/SiteLayout";
import { Reveal } from "@/components/Reveal";
import { PersonAvatar } from "@/components/Avatar";
import { useShareholders } from "@/hooks/use-shareholders";
import { useI18n } from "@/i18n/I18nProvider";

export const Route = createFileRoute("/shareholders/")({
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

function ShareholdersPage() {
  const { t } = useI18n();
  const { items, loading } = useShareholders();

  return (
    <SiteLayout>
      <section className="bg-cotton py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-primary-light">
            {t("sh.eyebrow")}
          </p>
          <h1 className="mt-3 max-w-3xl font-serif text-4xl text-primary sm:text-5xl md:text-6xl">
            {t("sh.title")}
          </h1>
          <p className="mt-6 max-w-2xl text-base text-muted-foreground md:text-lg">{t("sh.intro")}</p>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          {loading ? (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {Array.from({ length: 4 }).map((_, i) => (
                <div key={i} className="animate-pulse rounded-3xl border border-border bg-muted/40 p-6">
                  <div className="aspect-[4/3] rounded-2xl bg-muted" />
                  <div className="mt-4 h-5 w-2/3 rounded bg-muted" />
                  <div className="mt-2 h-3 w-1/2 rounded bg-muted" />
                </div>
              ))}
            </div>
          ) : items.length === 0 ? (
            <p className="text-center text-muted-foreground">No shareholders yet.</p>
          ) : (
            <ul className="grid list-none gap-6 sm:grid-cols-2 lg:grid-cols-3" role="list">
              {items.map((s, i) => (
                <li key={s.id}>
                  <Reveal
                    as="article"
                    delay={i * 60}
                    className="group lift flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-background shadow-card"
                  >
                    <Link
                      to="/shareholders/$id"
                      params={{ id: s.id }}
                      className="block focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                      aria-label={s.name ? `View profile of ${s.name}` : "View profile"}
                    >
                      <ShareholderMedia name={s.name} src={s.image_url} />
                    </Link>
                    {(s.name || s.role || s.stake || s.bio) && (
                      <div className="flex flex-1 flex-col p-5 sm:p-6">
                        {s.name && (
                          <h2 className="font-serif text-xl text-primary md:text-2xl">
                            <Link
                              to="/shareholders/$id"
                              params={{ id: s.id }}
                              className="hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded"
                            >
                              {s.name}
                            </Link>
                          </h2>
                        )}
                        {s.role && (
                          <p className="mt-1 text-xs font-bold uppercase tracking-widest text-clay">
                            {s.role}
                          </p>
                        )}
                        <div className="mt-3 flex flex-wrap gap-2">
                          {s.stake && (
                            <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                              <PieChart className="size-3" aria-hidden /> {s.stake}
                            </span>
                          )}
                        </div>
                        {s.bio && (
                          <p className="mt-4 line-clamp-3 text-sm leading-relaxed text-muted-foreground">
                            {s.bio}
                          </p>
                        )}
                        <Link
                          to="/shareholders/$id"
                          params={{ id: s.id }}
                          className="mt-auto inline-flex items-center gap-1.5 pt-5 text-sm font-semibold text-primary hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded"
                        >
                          View profile
                          <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden />
                        </Link>
                      </div>
                    )}

                  </Reveal>
                </li>
              ))}
            </ul>
          )}
        </div>
      </section>
    </SiteLayout>
  );
}

export function ShareholderMedia({
  name,
  src,
  className = "",
}: {
  name: string;
  src: string | null;
  className?: string;
}) {
  return (
    <div className={`relative aspect-[4/3] w-full overflow-hidden bg-muted ${className}`}>
      {src ? (
        <img
          src={src}
          alt={name}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      ) : (
        <div className="relative h-full w-full">
          <PersonAvatar name={name} className="absolute inset-0 h-full w-full" />
          <div className="absolute inset-x-0 bottom-0 flex items-center justify-center gap-1.5 bg-foreground/60 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-widest text-background">
            <ImageIcon className="size-3" aria-hidden /> No photo yet
          </div>
        </div>
      )}
    </div>
  );
}
