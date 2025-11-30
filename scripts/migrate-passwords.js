/**
 * Password Migration Script
 * 
 * This script migrates existing plaintext passwords to bcrypt hashed format.
 * Run this ONCE before deploying the new authentication code.
 * 
 * Usage: node scripts/migrate-passwords.js
 */

const { createClient } = require('@supabase/supabase-js');
const bcrypt = require('bcryptjs');
const fs = require('fs');
const path = require('path');
require('dotenv').config({ path: '.env.local' });

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseKey) {
    console.error('❌ Missing Supabase credentials in .env.local');
    process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);
const SALT_ROUNDS = 10;

async function migratePasswords() {
    console.log('🔄 Starting password migration...\n');

    try {
        // Step 1: Fetch all users
        console.log('📊 Fetching all users...');
        const { data: usuarios, error: fetchError } = await supabase
            .from('usuarios')
            .select('*')
            .order('email');

        if (fetchError) {
            console.error('❌ Error fetching users:', fetchError.message);
            process.exit(1);
        }

        if (!usuarios || usuarios.length === 0) {
            console.log('ℹ️  No users found in database');
            return;
        }

        console.log(`✅ Found ${usuarios.length} users\n`);

        // Step 2: Create backup file with plaintext passwords
        console.log('💾 Creating password backup...');
        const backupContent = createBackupContent(usuarios);
        const backupDir = path.join(process.env.USERPROFILE || process.env.HOME, '.gemini', 'antigravity', 'brain', 'af5efac4-eab4-4565-bcec-e3baea15b0de');

        if (!fs.existsSync(backupDir)) {
            fs.mkdirSync(backupDir, { recursive: true });
        }

        const backupPath = path.join(backupDir, 'password-backup.md');
        fs.writeFileSync(backupPath, backupContent, 'utf8');
        console.log(`✅ Backup saved to: ${backupPath}\n`);

        // Step 3: Hash each password and update
        console.log('🔐 Hashing passwords...');
        let successCount = 0;
        let errorCount = 0;

        for (const user of usuarios) {
            try {
                // Skip if already hashed
                if (user.password_hash && user.password_hash.startsWith('$2')) {
                    console.log(`⏭️  User ${user.email} already has hashed password, skipping`);
                    successCount++;
                    continue;
                }

                // Hash the plaintext password
                const hash = await bcrypt.hash(user.password, SALT_ROUNDS);

                // Update the user record
                const { error: updateError } = await supabase
                    .from('usuarios')
                    .update({ password_hash: hash })
                    .eq('id', user.id);

                if (updateError) {
                    console.error(`❌ Error updating ${user.email}:`, updateError.message);
                    errorCount++;
                } else {
                    console.log(`✅ Migrated password for ${user.email}`);
                    successCount++;
                }

                // Small delay to avoid rate limiting
                await new Promise(resolve => setTimeout(resolve, 100));

            } catch (err) {
                console.error(`❌ Error processing ${user.email}:`, err.message);
                errorCount++;
            }
        }

        console.log('\n' + '='.repeat(50));
        console.log('📊 Migration Summary:');
        console.log(`   ✅ Successful: ${successCount}`);
        console.log(`   ❌ Failed: ${errorCount}`);
        console.log('='.repeat(50));

        if (errorCount === 0) {
            console.log('\n✨ All passwords successfully migrated!');
            console.log('\n⚠️  NEXT STEPS:');
            console.log('   1. Test login with existing credentials');
            console.log('   2. Verify all users can log in');
            console.log('   3. After confirming everything works, run SQL:');
            console.log('      ALTER TABLE usuarios DROP COLUMN password;');
            console.log(`   4. Delete the backup file: ${backupPath}`);
        } else {
            console.log('\n⚠️  Some passwords failed to migrate. Review errors above.');
        }

    } catch (err) {
        console.error('❌ Unexpected error:', err);
        process.exit(1);
    }
}

function createBackupContent(usuarios) {
    let content = '# Password Backup - Pre-Migration\n\n';
    content += '> [!CAUTION]\n';
    content += '> **CONFIDENTIAL - DELETE AFTER MIGRATION**\n';
    content += '> This file contains plaintext passwords before bcrypt migration.\n\n';
    content += `**Backup Date:** ${new Date().toLocaleString()}\n`;
    content += `**Total Users:** ${usuarios.length}\n\n`;
    content += '---\n\n';

    const profesores = usuarios.filter(u => u.rol === 'profesor');
    const alumnos = usuarios.filter(u => u.rol === 'alumno');

    if (profesores.length > 0) {
        content += '## Profesores\n\n';
        content += '| Email | Password |\n';
        content += '|-------|----------|\n';
        profesores.forEach(u => {
            content += `| ${u.email} | ${u.password} |\n`;
        });
        content += '\n';
    }

    if (alumnos.length > 0) {
        content += '## Alumnos\n\n';
        content += '| Email | Password |\n';
        content += '|-------|----------|\n';
        alumnos.forEach(u => {
            content += `| ${u.email} | ${u.password} |\n`;
        });
        content += '\n';
    }

    return content;
}

// Run the migration
migratePasswords();
