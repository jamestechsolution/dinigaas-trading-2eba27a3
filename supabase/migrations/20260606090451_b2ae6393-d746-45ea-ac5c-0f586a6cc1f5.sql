
DELETE FROM public.nav_items WHERE path = '/Our Teams' OR label IN ('Our Teams','Team','Shareholders','Sectors','Services');
INSERT INTO public.nav_items (label, path, sort_order, active) VALUES
  ('Services', '/services', 3, true),
  ('Sectors', '/sectors', 4, true),
  ('Team', '/team', 5, true),
  ('Shareholders', '/shareholders', 6, true);
UPDATE public.nav_items SET sort_order = 7 WHERE path = '/products';
UPDATE public.nav_items SET sort_order = 8 WHERE path = '/news';
UPDATE public.nav_items SET sort_order = 9 WHERE path = '/careers';
UPDATE public.nav_items SET sort_order = 10 WHERE path = '/register';
