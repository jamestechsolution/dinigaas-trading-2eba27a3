INSERT INTO public.site_content (key, value, label, section, multiline, sort_order) VALUES
('about_mission_title', 'Our Mission', 'Mission title', 'about', false, 10),
('about_mission_text', 'To uplift the families of Sheger City through accessible, high-quality education, healthcare, and trade — building stronger neighborhoods one family at a time.', 'Mission text', 'about', true, 11),
('about_vision_title', 'Our Vision', 'Vision title', 'about', false, 12),
('about_vision_text', 'A thriving, self-reliant community where every child learns, every family is healthy, and local enterprise creates lasting opportunity.', 'Vision text', 'about', true, 13),
('about_values_title', 'Our Values', 'Values title', 'about', false, 14),
('about_values_text', 'Community first. Integrity in everything. Excellence in service. Respect for every person we serve and every colleague we work alongside.', 'Values text', 'about', true, 15)
ON CONFLICT (key) DO NOTHING;