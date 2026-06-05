CREATE TABLE public.shareholders (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  role text NOT NULL DEFAULT '',
  stake text NOT NULL DEFAULT '',
  bio text NOT NULL DEFAULT '',
  email text NOT NULL DEFAULT '',
  phone text NOT NULL DEFAULT '',
  image_url text,
  sort_order integer NOT NULL DEFAULT 0,
  active boolean NOT NULL DEFAULT true,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);

GRANT SELECT ON public.shareholders TO anon;
GRANT SELECT, INSERT, UPDATE, DELETE ON public.shareholders TO authenticated;
GRANT ALL ON public.shareholders TO service_role;

ALTER TABLE public.shareholders ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view active shareholders"
  ON public.shareholders FOR SELECT
  USING (active = true);

CREATE POLICY "Admins manage shareholders"
  ON public.shareholders FOR ALL
  TO authenticated
  USING (has_role(auth.uid(), 'admin'::app_role))
  WITH CHECK (has_role(auth.uid(), 'admin'::app_role));

CREATE TRIGGER shareholders_set_updated_at
  BEFORE UPDATE ON public.shareholders
  FOR EACH ROW EXECUTE FUNCTION public.set_updated_at();

INSERT INTO public.shareholders (name, role, stake, bio, email, phone, sort_order) VALUES
  ('Tesfaye Alemu', 'Founder & Chairman', '35% equity',
   'Founded Dinigaas Trading S.C. in 2013 with a vision of bringing quality education and healthcare to Sheger City. Oversees long-term strategy across all five sectors.',
   'tesfaye@dinigaas.com', '+251 911 000 001', 1),
  ('Genet Mekonnen', 'Principal Investor', '28% equity',
   'Leads investment decisions and capital allocation for the company''s healthcare and agricultural programs. Brings 20+ years of financial expertise.',
   'genet@dinigaas.com', '+251 911 000 002', 2),
  ('Dawit Hailu', 'Strategic Partner', '22% equity',
   'Drives partnerships across mining and commerce sectors. Responsible for expanding the company''s regional footprint and trade relationships.',
   'dawit@dinigaas.com', '+251 911 000 003', 3),
  ('Almaz Tesfaye', 'Board Member', '15% equity',
   'Champions the education portfolio, including Albright Academy. Focuses on curriculum quality, teacher development, and student outcomes.',
   'almaz@dinigaas.com', '+251 911 000 004', 4);