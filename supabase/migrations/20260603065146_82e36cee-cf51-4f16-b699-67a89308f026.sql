-- 1) Remove privilege-escalation bootstrap policy
DROP POLICY IF EXISTS "Bootstrap first admin" ON public.user_roles;

-- 2) Stop public listing of storage bucket (files remain accessible via their public URLs)
DROP POLICY IF EXISTS "Public can view site media" ON storage.objects;

-- 3) Lock down SECURITY DEFINER functions
REVOKE EXECUTE ON FUNCTION public.log_student_registration_status_change() FROM PUBLIC, anon, authenticated;
REVOKE EXECUTE ON FUNCTION public.has_role(uuid, public.app_role) FROM PUBLIC, anon;
-- keep EXECUTE for authenticated since RLS policies invoke has_role() under the caller's role