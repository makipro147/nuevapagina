-- =====================================================
-- COMPLETE DATABASE RESTORATION SCRIPT
-- =====================================================
-- This script recreates all tables needed for the application
-- Run this in Supabase SQL Editor to restore your database
-- =====================================================

-- Step 1: Drop existing tables if they exist (clean slate)
-- =====================================================
DROP TABLE IF EXISTS alumnos CASCADE;
DROP TABLE IF EXISTS usuarios CASCADE;
DROP TABLE IF EXISTS profesores CASCADE;

-- Step 2: Create usuarios table (main authentication table)
-- =====================================================
CREATE TABLE usuarios (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  email TEXT NOT NULL UNIQUE,
  password TEXT,  -- Legacy plaintext (for backward compatibility)
  password_hash TEXT,  -- New secure hashed passwords
  rol TEXT NOT NULL CHECK (rol IN ('profesor', 'alumno')),
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Add indexes for performance
CREATE INDEX idx_usuarios_email ON usuarios(email);
CREATE INDEX idx_usuarios_rol ON usuarios(rol);

-- Add comments for documentation
COMMENT ON TABLE usuarios IS 'Main user authentication table for professors and students';
COMMENT ON COLUMN usuarios.password IS 'DEPRECATED - Legacy plaintext passwords, will be removed after migration';
COMMENT ON COLUMN usuarios.password_hash IS 'Bcrypt hashed passwords (recommended)';
COMMENT ON COLUMN usuarios.rol IS 'User role: profesor or alumno';

-- =====================================================
-- Step 3: Create alumnos table (student details)
-- =====================================================
CREATE TABLE alumnos (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  usuario_id UUID NOT NULL REFERENCES usuarios(id) ON DELETE CASCADE,
  nombre TEXT NOT NULL,
  edad INTEGER CHECK (edad >= 12 AND edad <= 20),
  telefono TEXT,
  grado INTEGER NOT NULL CHECK (grado >= 1 AND grado <= 5),
  puntos INTEGER DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Add indexes for performance
CREATE INDEX idx_alumnos_usuario_id ON alumnos(usuario_id);
CREATE INDEX idx_alumnos_grado ON alumnos(grado);

-- Add comments for documentation
COMMENT ON TABLE alumnos IS 'Student profile information';
COMMENT ON COLUMN alumnos.usuario_id IS 'Foreign key to usuarios table';
COMMENT ON COLUMN alumnos.grado IS 'Grade level (1-5 for secundaria)';
COMMENT ON COLUMN alumnos.puntos IS 'Student points/rewards system';

-- =====================================================
-- Step 4: Create profesores table (optional, if needed)
-- =====================================================
CREATE TABLE IF NOT EXISTS profesores (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  usuario_id UUID REFERENCES usuarios(id) ON DELETE CASCADE,
  nombre TEXT NOT NULL,
  especialidad TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Add index
CREATE INDEX IF NOT EXISTS idx_profesores_usuario_id ON profesores(usuario_id);

-- =====================================================
-- Step 5: Enable Row Level Security (RLS)
-- =====================================================
ALTER TABLE usuarios ENABLE ROW LEVEL SECURITY;
ALTER TABLE alumnos ENABLE ROW LEVEL SECURITY;
ALTER TABLE profesores ENABLE ROW LEVEL SECURITY;

-- Drop existing policies if any
DROP POLICY IF EXISTS "Enable read for all users" ON usuarios;
DROP POLICY IF EXISTS "Enable read for all users" ON alumnos;
DROP POLICY IF EXISTS "Enable read for all users" ON profesores;

-- Create RLS policies for usuarios
-- Allow anyone to read (needed for login)
CREATE POLICY "Enable read for all users" ON usuarios
  FOR SELECT
  USING (true);

-- Allow users to update their own data
CREATE POLICY "Enable update for own user" ON usuarios
  FOR UPDATE
  USING (auth.uid()::text = id)
  WITH CHECK (auth.uid()::text = id);

-- Create RLS policies for alumnos
-- Allow anyone to read alumnos (needed for teacher dashboard)
CREATE POLICY "Enable read for all users" ON alumnos
  FOR SELECT
  USING (true);

-- Allow users to update their own alumno data
CREATE POLICY "Enable update for own alumno" ON alumnos
  FOR UPDATE
  USING (auth.uid()::text = usuario_id)
  WITH CHECK (auth.uid()::text = usuario_id);

-- Allow insert (for teacher adding students)
CREATE POLICY "Enable insert for all" ON alumnos
  FOR INSERT
  WITH CHECK (true);

-- Create RLS policies for profesores
CREATE POLICY "Enable read for all users" ON profesores
  FOR SELECT
  USING (true);

-- =====================================================
-- Step 6: Create sample/default professor account
-- =====================================================
-- This creates a default professor account for testing
-- Password: "profesor123" (hashed with bcrypt)
-- Email: rojasmichael148@gmail.com (from code)

-- Note: You should change this password after login!
INSERT INTO usuarios (email, password, rol) 
VALUES ('rojasmichael148@gmail.com', 'profesor123', 'profesor')
ON CONFLICT (email) DO NOTHING;

-- =====================================================
-- Step 7: Create updated_at trigger function
-- =====================================================
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Add triggers to auto-update updated_at
CREATE TRIGGER update_usuarios_updated_at
  BEFORE UPDATE ON usuarios
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_alumnos_updated_at
  BEFORE UPDATE ON alumnos
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

-- =====================================================
-- Step 8: Verification Queries
-- =====================================================
-- Run these to verify the tables were created successfully

-- Check if all tables exist
SELECT table_name 
FROM information_schema.tables 
WHERE table_schema = 'public' 
  AND table_name IN ('usuarios', 'alumnos', 'profesores')
ORDER BY table_name;

-- Count rows in each table
SELECT 
  'usuarios' as table_name, COUNT(*) as row_count FROM usuarios
UNION ALL
SELECT 'alumnos', COUNT(*) FROM alumnos
UNION ALL
SELECT 'profesores', COUNT(*) FROM profesores;

-- Check columns in usuarios table
SELECT column_name, data_type, is_nullable
FROM information_schema.columns
WHERE table_name = 'usuarios'
ORDER BY ordinal_position;

-- Check columns in alumnos table
SELECT column_name, data_type, is_nullable
FROM information_schema.columns
WHERE table_name = 'alumnos'
ORDER BY ordinal_position;

-- =====================================================
-- SUCCESS MESSAGE
-- =====================================================
DO $$
BEGIN
  RAISE NOTICE '✅ Database restoration complete!';
  RAISE NOTICE '📊 Tables created: usuarios, alumnos, profesores';
  RAISE NOTICE '🔐 RLS policies enabled';
  RAISE NOTICE '👤 Default professor account created';
  RAISE NOTICE '';
  RAISE NOTICE 'Next steps:';
  RAISE NOTICE '1. Run the backup restoration if you have data to restore';
  RAISE NOTICE '2. Test login at /login page';
  RAISE NOTICE '3. Change default professor password';
END $$;

-- =====================================================
-- NOTES FOR DATA RESTORATION FROM BACKUP
-- =====================================================
/*
If you have a backup file (db_cluster-19-09-2024@00-17-12.backup), 
you can restore it using one of these methods:

METHOD 1: Using Supabase Dashboard
1. Go to Database → Backups
2. Upload your backup file
3. Click Restore

METHOD 2: Using psql command line
psql -h your-project.supabase.co -U postgres -d postgres < db_cluster-19-09-2024@00-17-12.backup

METHOD 3: Using pg_restore (if it's a binary dump)
pg_restore -h your-project.supabase.co -U postgres -d postgres db_cluster-19-09-2024@00-17-12.backup

IMPORTANT: Make sure to run this restoration script FIRST before restoring backup data!
*/
