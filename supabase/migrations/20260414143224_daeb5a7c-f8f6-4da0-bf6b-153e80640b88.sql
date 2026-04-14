
CREATE TABLE public.death_notices (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  date_of_death TEXT,
  agency_slug TEXT NOT NULL DEFAULT 'paris-15',
  link TEXT,
  display_order INTEGER NOT NULL DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

ALTER TABLE public.death_notices ENABLE ROW LEVEL SECURITY;

-- Public read access
CREATE POLICY "Anyone can view death notices"
ON public.death_notices
FOR SELECT
TO anon, authenticated
USING (true);

-- Admin/editor can manage
CREATE POLICY "Admin+ can manage death notices"
ON public.death_notices
FOR ALL
TO authenticated
USING (get_user_role(auth.uid()) = ANY (ARRAY['super_admin'::app_role, 'admin'::app_role, 'editor'::app_role]));

-- Timestamp trigger
CREATE TRIGGER update_death_notices_updated_at
BEFORE UPDATE ON public.death_notices
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();
