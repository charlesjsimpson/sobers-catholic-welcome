
-- Create role enum
CREATE TYPE public.app_role AS ENUM ('super_admin', 'admin', 'editor', 'viewer');

-- Create profiles table
CREATE TABLE public.profiles (
  id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  email TEXT NOT NULL,
  full_name TEXT,
  role app_role NOT NULL DEFAULT 'viewer',
  is_active BOOLEAN NOT NULL DEFAULT true,
  last_login TIMESTAMP WITH TIME ZONE,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;

-- Create user_roles table (separate from profiles as per security guidelines)
CREATE TABLE public.user_roles (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  role app_role NOT NULL,
  UNIQUE (user_id, role)
);
ALTER TABLE public.user_roles ENABLE ROW LEVEL SECURITY;

-- Security definer function to check roles
CREATE OR REPLACE FUNCTION public.has_role(_user_id UUID, _role app_role)
RETURNS BOOLEAN
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT EXISTS (
    SELECT 1 FROM public.user_roles
    WHERE user_id = _user_id AND role = _role
  )
$$;

-- Function to get user role
CREATE OR REPLACE FUNCTION public.get_user_role(_user_id UUID)
RETURNS app_role
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT role FROM public.user_roles
  WHERE user_id = _user_id
  LIMIT 1
$$;

-- Profiles RLS policies
CREATE POLICY "Users can view their own profile" ON public.profiles
  FOR SELECT USING (auth.uid() = id);
CREATE POLICY "Admin+ can view all profiles" ON public.profiles
  FOR SELECT USING (
    public.get_user_role(auth.uid()) IN ('super_admin', 'admin')
  );
CREATE POLICY "Users can update their own profile" ON public.profiles
  FOR UPDATE USING (auth.uid() = id);
CREATE POLICY "Super admin can manage all profiles" ON public.profiles
  FOR ALL USING (public.has_role(auth.uid(), 'super_admin'));

-- User roles RLS
CREATE POLICY "Super admin can manage roles" ON public.user_roles
  FOR ALL USING (public.has_role(auth.uid(), 'super_admin'));
CREATE POLICY "Users can view their own role" ON public.user_roles
  FOR SELECT USING (auth.uid() = user_id);

-- Create pages table
CREATE TABLE public.pages (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  slug TEXT NOT NULL UNIQUE,
  content TEXT DEFAULT '',
  meta_title TEXT,
  meta_description TEXT,
  og_image TEXT,
  status TEXT NOT NULL DEFAULT 'draft' CHECK (status IN ('draft', 'published', 'archived')),
  published_at TIMESTAMP WITH TIME ZONE,
  scheduled_at TIMESTAMP WITH TIME ZONE,
  author_id UUID REFERENCES auth.users(id),
  deleted_at TIMESTAMP WITH TIME ZONE,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);
ALTER TABLE public.pages ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Authenticated can view pages" ON public.pages
  FOR SELECT TO authenticated
  USING (public.get_user_role(auth.uid()) IN ('super_admin', 'admin', 'editor', 'viewer'));
CREATE POLICY "Editor+ can insert pages" ON public.pages
  FOR INSERT TO authenticated
  WITH CHECK (public.get_user_role(auth.uid()) IN ('super_admin', 'admin', 'editor'));
CREATE POLICY "Editor+ can update pages" ON public.pages
  FOR UPDATE TO authenticated
  USING (public.get_user_role(auth.uid()) IN ('super_admin', 'admin', 'editor'));
CREATE POLICY "Admin+ can delete pages" ON public.pages
  FOR DELETE TO authenticated
  USING (public.get_user_role(auth.uid()) IN ('super_admin', 'admin'));

-- Create articles table
CREATE TABLE public.articles (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  slug TEXT NOT NULL UNIQUE,
  content TEXT DEFAULT '',
  excerpt TEXT,
  featured_image TEXT,
  category TEXT NOT NULL DEFAULT 'actualite' CHECK (category IN ('actualite', 'emission', 'video', 'livre', 'priere', 'ressource')),
  tags TEXT[] DEFAULT '{}',
  reading_time INT,
  meta_title TEXT,
  meta_description TEXT,
  status TEXT NOT NULL DEFAULT 'draft' CHECK (status IN ('draft', 'published', 'archived')),
  published_at TIMESTAMP WITH TIME ZONE,
  author_id UUID REFERENCES auth.users(id),
  deleted_at TIMESTAMP WITH TIME ZONE,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);
ALTER TABLE public.articles ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Authenticated can view articles" ON public.articles
  FOR SELECT TO authenticated
  USING (public.get_user_role(auth.uid()) IN ('super_admin', 'admin', 'editor', 'viewer'));
CREATE POLICY "Editor+ can insert articles" ON public.articles
  FOR INSERT TO authenticated
  WITH CHECK (public.get_user_role(auth.uid()) IN ('super_admin', 'admin', 'editor'));
CREATE POLICY "Editor+ can update articles" ON public.articles
  FOR UPDATE TO authenticated
  USING (public.get_user_role(auth.uid()) IN ('super_admin', 'admin', 'editor'));
CREATE POLICY "Admin+ can delete articles" ON public.articles
  FOR DELETE TO authenticated
  USING (public.get_user_role(auth.uid()) IN ('super_admin', 'admin'));

-- Create agencies table
CREATE TABLE public.agencies (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  address TEXT,
  city TEXT NOT NULL,
  region TEXT,
  phone TEXT,
  email TEXT,
  hours TEXT,
  photo TEXT,
  status TEXT NOT NULL DEFAULT 'active' CHECK (status IN ('active', 'temporarily_closed', 'under_renovation')),
  latitude DOUBLE PRECISION,
  longitude DOUBLE PRECISION,
  display_order INT NOT NULL DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);
ALTER TABLE public.agencies ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Authenticated can view agencies" ON public.agencies
  FOR SELECT TO authenticated
  USING (public.get_user_role(auth.uid()) IN ('super_admin', 'admin', 'editor', 'viewer'));
CREATE POLICY "Admin+ can manage agencies" ON public.agencies
  FOR ALL TO authenticated
  USING (public.get_user_role(auth.uid()) IN ('super_admin', 'admin'));

-- Create activity_logs table
CREATE TABLE public.activity_logs (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id),
  user_email TEXT,
  action TEXT NOT NULL,
  entity_type TEXT,
  entity_id UUID,
  entity_title TEXT,
  details JSONB,
  ip_address TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);
ALTER TABLE public.activity_logs ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Admin+ can view logs" ON public.activity_logs
  FOR SELECT TO authenticated
  USING (public.get_user_role(auth.uid()) IN ('super_admin', 'admin'));
CREATE POLICY "Authenticated can insert logs" ON public.activity_logs
  FOR INSERT TO authenticated
  WITH CHECK (auth.uid() = user_id);

-- Create page_versions table
CREATE TABLE public.page_versions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  page_id UUID REFERENCES public.pages(id) ON DELETE CASCADE,
  title TEXT NOT NULL,
  content TEXT,
  version_number INT NOT NULL DEFAULT 1,
  created_by UUID REFERENCES auth.users(id),
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);
ALTER TABLE public.page_versions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Authenticated can view versions" ON public.page_versions
  FOR SELECT TO authenticated
  USING (public.get_user_role(auth.uid()) IN ('super_admin', 'admin', 'editor', 'viewer'));
CREATE POLICY "Editor+ can insert versions" ON public.page_versions
  FOR INSERT TO authenticated
  WITH CHECK (public.get_user_role(auth.uid()) IN ('super_admin', 'admin', 'editor'));

-- Storage bucket for media
INSERT INTO storage.buckets (id, name, public) VALUES ('media', 'media', true);

CREATE POLICY "Authenticated can upload media" ON storage.objects
  FOR INSERT TO authenticated
  WITH CHECK (bucket_id = 'media');
CREATE POLICY "Anyone can view media" ON storage.objects
  FOR SELECT USING (bucket_id = 'media');
CREATE POLICY "Admin+ can delete media" ON storage.objects
  FOR DELETE TO authenticated
  USING (bucket_id = 'media' AND public.get_user_role(auth.uid()) IN ('super_admin', 'admin'));
CREATE POLICY "Admin+ can update media" ON storage.objects
  FOR UPDATE TO authenticated
  USING (bucket_id = 'media' AND public.get_user_role(auth.uid()) IN ('super_admin', 'admin'));

-- Trigger for auto-creating profile on signup
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  INSERT INTO public.profiles (id, email, full_name)
  VALUES (NEW.id, NEW.email, COALESCE(NEW.raw_user_meta_data->>'full_name', NEW.email));
  RETURN NEW;
END;
$$;

CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();

-- Updated_at trigger function
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SET search_path = public;

CREATE TRIGGER update_profiles_updated_at BEFORE UPDATE ON public.profiles FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();
CREATE TRIGGER update_pages_updated_at BEFORE UPDATE ON public.pages FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();
CREATE TRIGGER update_articles_updated_at BEFORE UPDATE ON public.articles FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();
CREATE TRIGGER update_agencies_updated_at BEFORE UPDATE ON public.agencies FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();
