-- Restrict base table SELECT to admins only
DROP POLICY IF EXISTS "Anyone can view active shareholders" ON public.shareholders;
CREATE POLICY "Admins can view shareholders"
ON public.shareholders
FOR SELECT
TO authenticated
USING (public.has_role(auth.uid(), 'admin'));

-- Public view exposes only non-sensitive fields
CREATE OR REPLACE VIEW public.shareholders_public
WITH (security_invoker = on) AS
SELECT id, name, role, stake, bio, image_url, sort_order, active
FROM public.shareholders
WHERE active = true;

GRANT SELECT ON public.shareholders_public TO anon, authenticated;