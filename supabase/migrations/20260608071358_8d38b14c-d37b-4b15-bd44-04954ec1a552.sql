
INSERT INTO public.site_content (key, value, label, section, multiline, sort_order) VALUES
  ('about_mission_cta_label', 'Our Services', 'Mission — Button label', 'about', false, 110),
  ('about_mission_cta_href',  '/services',    'Mission — Button link',  'about', false, 111),
  ('about_vision_cta_label',  'Explore Products', 'Vision — Button label', 'about', false, 120),
  ('about_vision_cta_href',   '/products',        'Vision — Button link',  'about', false, 121),
  ('about_values_cta_label',  'Get in Touch', 'Values — Button label', 'about', false, 130),
  ('about_values_cta_href',   '/contact',     'Values — Button link',  'about', false, 131)
ON CONFLICT (key) DO NOTHING;
