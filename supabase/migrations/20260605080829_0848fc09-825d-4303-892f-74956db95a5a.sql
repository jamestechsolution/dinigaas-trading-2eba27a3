INSERT INTO public.site_images (slot, label, image_url) VALUES
  ('shareholder.s1', 'Shareholder 1 photo/logo', NULL),
  ('shareholder.s2', 'Shareholder 2 photo/logo', NULL),
  ('shareholder.s3', 'Shareholder 3 photo/logo', NULL),
  ('shareholder.s4', 'Shareholder 4 photo/logo', NULL)
ON CONFLICT DO NOTHING;