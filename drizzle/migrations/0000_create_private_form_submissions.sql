CREATE TABLE public.appointment_requests (
 id uuid PRIMARY KEY DEFAULT gen_random_uuid(), created_at timestamptz NOT NULL DEFAULT now(),
 name text NOT NULL CHECK (char_length(name) BETWEEN 2 AND 100), mobile text NOT NULL CHECK (mobile ~ '^\+91[6-9][0-9]{9}$'),
 email text CHECK (char_length(email) <= 255), address text CHECK (char_length(address) <= 300),
 consultation_type text NOT NULL CHECK (char_length(consultation_type) BETWEEN 1 AND 100), consultation_method text NOT NULL CHECK (consultation_method IN ('In person at our office', 'Video call (Google Meet or other)')),
 preferred_date date NOT NULL, preferred_time text NOT NULL CHECK (char_length(preferred_time) <= 20), notes text CHECK (char_length(notes) <= 1000),
 status text NOT NULL DEFAULT 'pending' CHECK (status IN ('pending','confirmed','declined','completed'))
);
GRANT ALL ON public.appointment_requests TO service_role;
REVOKE ALL ON public.appointment_requests FROM anon, authenticated;
ALTER TABLE public.appointment_requests ENABLE ROW LEVEL SECURITY;
CREATE TABLE public.contact_messages (
 id uuid PRIMARY KEY DEFAULT gen_random_uuid(), created_at timestamptz NOT NULL DEFAULT now(),
 name text NOT NULL CHECK (char_length(name) BETWEEN 2 AND 100), email text NOT NULL CHECK (char_length(email) <= 255), phone text NOT NULL CHECK (phone ~ '^[6-9][0-9]{9}$'),
 message text NOT NULL CHECK (char_length(message) BETWEEN 5 AND 1000), status text NOT NULL DEFAULT 'new'
);
GRANT ALL ON public.contact_messages TO service_role;
REVOKE ALL ON public.contact_messages FROM anon, authenticated;
ALTER TABLE public.contact_messages ENABLE ROW LEVEL SECURITY;
CREATE TABLE public.career_applications (
 id uuid PRIMARY KEY DEFAULT gen_random_uuid(), created_at timestamptz NOT NULL DEFAULT now(),
 name text NOT NULL CHECK (char_length(name) BETWEEN 2 AND 100), email text NOT NULL CHECK (char_length(email) <= 255), phone text NOT NULL CHECK (phone ~ '^[6-9][0-9]{9}$'),
 position text NOT NULL CHECK (char_length(position) BETWEEN 1 AND 100), message text NOT NULL DEFAULT '' CHECK (char_length(message) <= 1000),
 cv_file_path text CHECK (char_length(cv_file_path) <= 300), status text NOT NULL DEFAULT 'new'
);
GRANT ALL ON public.career_applications TO service_role;
REVOKE ALL ON public.career_applications FROM anon, authenticated;
ALTER TABLE public.career_applications ENABLE ROW LEVEL SECURITY;
-- Intentionally no public policies: all writes use validated server functions; no website reads, edits, or deletes.
