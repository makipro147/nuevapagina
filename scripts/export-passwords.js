// Script to export current passwords before migration
// This will be run once to save existing passwords for reference

const { createClient } = require('@supabase/supabase-js');
const fs = require('fs');
const path = require('path');
require('dotenv').config({ path: '.env.local' });

// Load environment variables
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseKey) {
    console.error('Missing Supabase credentials in environment variables');
    console.error('Make sure .env.local file exists with NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY');
    process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);

async function exportPasswords() {
    try {
        console.log('Fetching all users from database...');

        // Fetch all users with their passwords
        const { data: usuarios, error } = await supabase
            .from('usuarios')
            .select('id, email, password, rol')
            .order('email');

        if (error) {
            console.error('Error fetching users:', error.message);
            process.exit(1);
        }

        if (!usuarios || usuarios.length === 0) {
            console.log('No users found in database');
            return;
        }

        // Create markdown content
        let mdContent = '# Current User Passwords - BACKUP\n\n';
        mdContent += '> [!CAUTION]\n';
        mdContent += '> **KEEP THIS FILE SECURE AND DELETE AFTER MIGRATION**\n';
        mdContent += '> This file contains plaintext passwords extracted before security migration.\n';
        mdContent += '> Do not share this file or commit it to version control.\n\n';
        mdContent += `**Export Date:** ${new Date().toLocaleString()}\n\n`;
        mdContent += `**Total Users:** ${usuarios.length}\n\n`;
        mdContent += '---\n\n';

        // Group by role
        const profesores = usuarios.filter(u => u.rol === 'profesor');
        const alumnos = usuarios.filter(u => u.rol === 'alumno');

        if (profesores.length > 0) {
            mdContent += '## Profesores\n\n';
            mdContent += '| Email | Password | ID |\n';
            mdContent += '|-------|----------|----|\n';
            profesores.forEach(user => {
                mdContent += `| ${user.email} | ${user.password} | ${user.id} |\n`;
            });
            mdContent += '\n';
        }

        if (alumnos.length > 0) {
            mdContent += '## Alumnos\n\n';
            mdContent += '| Email | Password | ID |\n';
            mdContent += '|-------|----------|----|\n';
            alumnos.forEach(user => {
                mdContent += `| ${user.email} | ${user.password} | ${user.id} |\n`;
            });
            mdContent += '\n';
        }

        mdContent += '---\n\n';
        mdContent += '## Next Steps\n\n';
        mdContent += '1. Review and save this file securely\n';
        mdContent += '2. After password migration is complete and tested, delete this file\n';
        mdContent += '3. If users report login issues, you can reference this file to verify their original password\n\n';
        mdContent += '## Security Notes\n\n';
        mdContent += '- These passwords are now being migrated to bcrypt hashed format\n';
        mdContent += '- Users can continue logging in with the same passwords\n';
        mdContent += '- The passwords will be securely hashed in the database\n';
        mdContent += '- This file should be deleted once migration is verified\n';

        // Save to artifacts directory
        const artifactsDir = path.join(process.env.USERPROFILE || process.env.HOME, '.gemini', 'antigravity', 'brain', 'af5efac4-eab4-4565-bcec-e3baea15b0de');
        const outputPath = path.join(artifactsDir, 'current-passwords-backup.md');

        // Ensure directory exists
        if (!fs.existsSync(artifactsDir)) {
            fs.mkdirSync(artifactsDir, { recursive: true });
        }

        fs.writeFileSync(outputPath, mdContent, 'utf8');

        console.log(`✅ Successfully exported ${usuarios.length} user passwords`);
        console.log(`📁 File saved to: ${outputPath}`);
        console.log('\n⚠️  IMPORTANT: Keep this file secure and delete after migration!');

        return outputPath;
    } catch (err) {
        console.error('Unexpected error:', err);
        process.exit(1);
    }
}

exportPasswords();
