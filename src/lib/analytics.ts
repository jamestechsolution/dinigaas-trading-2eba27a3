import { supabase } from "@/integrations/supabase/client";

export type AnalyticsProps = Record<string, unknown>;

/**
 * Fire-and-forget client-side event tracker.
 * Writes to the public.analytics_events table; failures are swallowed so
 * a logging issue never blocks the originating user action.
 */
export function track(eventName: string, properties: AnalyticsProps = {}): void {
  try {
    const path =
      typeof window !== "undefined" ? window.location.pathname + window.location.search : null;
    void supabase
      .from("analytics_events")
      .insert({ event_name: eventName, properties: properties as never, path })
      .then(({ error }) => {
        if (error && typeof console !== "undefined") {
          console.debug("[analytics] insert failed", error.message);
        }
      });
  } catch (err) {
    if (typeof console !== "undefined") console.debug("[analytics] track threw", err);
  }
}
