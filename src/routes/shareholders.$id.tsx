import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, Mail, Phone, PieChart, Loader2 } from "lucide-react";
import { useEffect, useState } from "react";
import { SiteLayout } from "@/components/SiteLayout";
import { PersonAvatar } from "@/components/Avatar";
import { supabase } from "@/integrations/supabase/client";
import type { Shareholder } from "@/hooks/use-shareholders";

export const Route = createFileRoute("/shareholders/$id")({
  head: () => ({
    meta: [
      { title: "Shareholder profile — Dinigaas Trading S.C." },
      { name: "description", content: "Shareholder profile and contact details." },
    ],
  }),
  component: ShareholderProfile,
  errorComponent: ({ error }) => (
    <SiteLayout>
      <div role="alert" className="mx-auto max-w-3xl px-6 py-20 text-center">
        <h1 className="font-serif text-3xl text-primary">Couldn't load this profile</h1>
        <p className="mt-3 text-muted-foreground">{error.message}</p>
        <Link
          to="/shareholders"
          className="mt-6 inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm font-semibold hover:bg-accent"
        >
          <ArrowLeft className="size-4" /> Back to shareholders
        </Link>
      </div>
    </SiteLayout>
  ),
  notFoundComponent: () => (
    <SiteLayout>
      <div className="mx-auto max-w-3xl px-6 py-20 text-center">
        <h1 className="font-serif text-3xl text-primary">Shareholder not found</h1>
        <p className="mt-3 text-muted-foreground">This profile doesn't exist or is no longer active.</p>
        <Link
          to="/shareholders"
          className="mt-6 inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm font-semibold hover:bg-accent"
        >
          <ArrowLeft className="size-4" /> Back to shareholders
        </Link>
      </div>
    </SiteLayout>
  ),
});

function ShareholderProfile() {
  const { id } = Route.useParams();
  const [item, setItem] = useState<Shareholder | null>(null);
  const [loading, setLoading] = useState(true);
  const [missing, setMissing] = useState(false);

  useEffect(() => {
    let cancelled = false;
    setLoading(true);
    setMissing(false);
    (async () => {
      const { data, error } = await supabase
        .from("shareholders")
        .select("*")
        .eq("id", id)
        .eq("active", true)
        .maybeSingle();
      if (cancelled) return;
      if (error || !data) {
        setMissing(true);
      } else {
        setItem(data as Shareholder);
      }
      setLoading(false);
    })();
    return () => {
      cancelled = true;
    };
  }, [id]);

  if (loading) {
    return (
      <SiteLayout>
        <div className="grid min-h-[40vh] place-items-center">
          <Loader2 className="size-8 animate-spin text-primary" aria-label="Loading" />
        </div>
      </SiteLayout>
    );
  }

  if (missing || !item) {
    throw notFound();
  }

  return (
    <SiteLayout>
      <section className="bg-cotton py-10 md:py-14">
        <div className="mx-auto max-w-5xl px-6 lg:px-12">
          <Link
            to="/shareholders"
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded"
          >
            <ArrowLeft className="size-4" aria-hidden /> All shareholders
          </Link>
        </div>
      </section>

      <section className="py-10 md:py-16">
        <div className="mx-auto grid max-w-5xl gap-10 px-6 lg:grid-cols-[minmax(0,2fr)_minmax(0,3fr)] lg:gap-14 lg:px-12">
          <div>
            <div className="relative aspect-square w-full max-w-md overflow-hidden rounded-3xl border border-border bg-muted shadow-card">
              {item.image_url ? (
                <img
                  src={item.image_url}
                  alt={item.name}
                  className="h-full w-full object-cover"
                />
              ) : (
                <PersonAvatar name={item.name} className="absolute inset-0 h-full w-full" />
              )}
            </div>
          </div>

          <div>
            <h1 className="font-serif text-4xl text-primary md:text-5xl">{item.name}</h1>
            {item.role && (
              <p className="mt-2 text-sm font-bold uppercase tracking-widest text-clay">
                {item.role}
              </p>
            )}

            <div className="mt-5 flex flex-wrap gap-2">
              {item.stake && (
                <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3 py-1.5 text-xs font-semibold text-primary">
                  <PieChart className="size-3.5" aria-hidden /> {item.stake}
                </span>
              )}
            </div>

            {item.bio && (
              <div className="mt-6 space-y-4 text-base leading-relaxed text-muted-foreground">
                {item.bio.split(/\n\n+/).map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            )}

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {item.email && (
                <a
                  href={`mailto:${item.email}`}
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary-light focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 min-h-11"
                  aria-label={`Email ${item.name}`}
                >
                  <Mail className="size-4" aria-hidden /> {item.email}
                </a>
              )}
              {item.phone && (
                <a
                  href={`tel:${item.phone.replace(/\s/g, "")}`}
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-background px-5 py-3 text-sm font-semibold text-foreground hover:bg-accent focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 min-h-11"
                  aria-label={`Call ${item.name}`}
                >
                  <Phone className="size-4" aria-hidden /> {item.phone}
                </a>
              )}
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
