
ALTER TABLE public.death_notices
ADD COLUMN slug TEXT UNIQUE,
ADD COLUMN content TEXT,
ADD COLUMN agency_name TEXT DEFAULT 'Paris 15';
