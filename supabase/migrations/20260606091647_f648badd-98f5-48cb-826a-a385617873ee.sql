DROP POLICY IF EXISTS "Anyone can insert analytics events" ON public.analytics_events;
CREATE POLICY "Anyone can insert valid analytics events"
ON public.analytics_events
FOR INSERT
TO anon, authenticated
WITH CHECK (
  length(trim(event_name)) BETWEEN 1 AND 100
  AND event_name ~ '^[a-zA-Z0-9_.-]+$'
  AND (path IS NULL OR length(path) <= 500)
  AND pg_column_size(properties) <= 4096
);