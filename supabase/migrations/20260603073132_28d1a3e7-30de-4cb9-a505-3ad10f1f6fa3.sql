INSERT INTO public.site_images (slot, label, image_url) VALUES
  ('team.board', 'Team — Board of Directors', NULL),
  ('team.advisory', 'Team — Advisory Council', NULL),
  ('team.operations', 'Team — Operations Lead', NULL),
  ('team.medical', 'Team — Medical Team', NULL),
  ('team.students', 'Team — Albright Academy Students', NULL),
  ('team.department', 'Team — Department Head', NULL),
  ('team.senior', 'Team — Senior Officer', NULL)
ON CONFLICT (slot) DO NOTHING;