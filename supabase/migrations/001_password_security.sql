-- =====================================================
-- PASSWORD BACKUP QUERY
-- Run this in Supabase SQL Editor BEFORE migration
-- =====================================================

-- This query exports all current passwords to a CSV-like format
-- Copy the results and save them securely before running the migration

SELECT 
  u.id,
  u.email,
  u.password AS plaintext_password,
  u.rol,
  CASE 
    WHEN u.rol = 'alumno' THEN a.nombre
    ELSE u.email
  END as nombre
FROM usuarios u
LEFT JOIN alumnos a ON a.usuario_id = u.id
ORDER BY u.rol, u.email;

-- =====================================================
-- STEP 1: Add password_hash column
-- =====================================================

ALTER TABLE usuarios 
ADD COLUMN IF NOT EXISTS password_hash TEXT;

-- =====================================================
-- STEP 2: Create function to hash existing passwords
-- =====================================================

-- Note: This will be done via the migration script
-- because bcrypt hashing must be done in application code
-- See: migrate-passwords.ts

-- =====================================================
-- STEP 3: After hashing is complete, drop old column
-- =====================================================

-- Run this ONLY after confirming all passwords are hashed
-- and the application is working

-- ALTER TABLE usuarios DROP COLUMN password;

-- =====================================================
-- STEP 4: Add RLS (Row Level Security) policies
-- =====================================================

-- Enable RLS on tables
ALTER TABLE usuarios ENABLE ROW LEVEL SECURITY;
ALTER TABLE alumnos ENABLE ROW LEVEL SECURITY;

-- Drop existing policies if any
DROP POLICY IF EXISTS "Enable read for authenticated users" ON usuarios;
DROP POLICY IF EXISTS "Enable read for authenticated users" ON alumnos;
DROP POLICY IF EXISTS "Enable update for users based on id" ON usuarios;
DROP POLICY IF EXISTS "Enable update for users based on id" ON alumnos;

-- Policy: Users can read all usuarios (needed for login check)
-- Note: This is acceptable because we don't expose password_hash to clients
CREATE POLICY "Enable read for authenticated users" ON usuarios
  FOR SELECT
  USING (true);

-- Policy: Users can update their own data only
CREATE POLICY "Enable update for users based on id" ON usuarios
  FOR UPDATE
  USING (auth.uid()::text = id);

-- Policy: Anyone can read alumnos (for teacher dashboard)
CREATE POLICY "Enable read for authenticated users" ON alumnos
  FOR SELECT
  USING (true);

-- Policy: Only the user can update their own alumno data
CREATE POLICY "Enable update for users based on id" ON alumnos
  FOR UPDATE
  USING (auth.uid()::text = usuario_id);

-- =====================================================
-- STEP 5: Create indexes for performance
-- =====================================================

CREATE INDEX IF NOT EXISTS idx_usuarios_email ON usuarios(email);
CREATE INDEX IF NOT EXISTS idx_alumnos_usuario_id ON alumnos(usuario_id);
CREATE INDEX IF NOT EXISTS idx_alumnos_grado ON alumnos(grado);

-- =====================================================
-- VERIFICATION QUERIES
-- =====================================================

-- Check that all passwords are hashed (should return 0)
SELECT COUNT(*) as unhashed_passwords
FROM usuarios
WHERE password_hash IS NULL OR password_hash = '';

-- Check that hashes have correct format (should equal total users)
SELECT COUNT(*) as properly_hashed
FROM usuarios
WHERE password_hash LIKE '$2%';

-- View sample of hashed data (verify passwords are NOT visible)
SELECT id, email, 
  CASE 
    WHEN password_hash IS NOT NULL THEN '***HASHED***'
    ELSE 'NOT HASHED'
  END as password_status,
  rol
FROM usuarios
LIMIT 5;
