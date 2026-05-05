
-- Bootstrap policy: allow a signed-in user to insert an admin role for THEMSELVES
-- only when there are no admins in the system yet.
CREATE POLICY "Bootstrap first admin"
ON public.user_roles
FOR INSERT
TO authenticated
WITH CHECK (
  user_id = auth.uid()
  AND role = 'admin'::app_role
  AND NOT EXISTS (SELECT 1 FROM public.user_roles WHERE role = 'admin'::app_role)
);
