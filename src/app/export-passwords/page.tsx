"use client";

import { supabase } from "@/lib/supabaseClient";
import { useState } from "react";

export default function ExportPasswordsPage() {
    const [status, setStatus] = useState("");
    const [passwords, setPasswords] = useState<any[]>([]);

    const exportPasswords = async () => {
        try {
            setStatus("Fetching users from database...");

            const { data: usuarios, error } = await supabase
                .from("usuarios")
                .select("id, email, password, rol")
                .order("email");

            if (error) {
                setStatus(`Error: ${error.message}`);
                return;
            }

            if (!usuarios || usuarios.length === 0) {
                setStatus("No users found in database");
                return;
            }

            setPasswords(usuarios);
            setStatus(`✅ Successfully exported ${usuarios.length} user passwords`);

            // Create markdown content
            let mdContent = '# Current User Passwords - BACKUP\n\n';
            mdContent += '> [!CAUTION]\n';
            mdContent += '> **KEEP THIS FILE SECURE AND DELETE AFTER MIGRATION**\n';
            mdContent += '> This file contains plaintext passwords extracted before security migration.\n\n';
            mdContent += `**Export Date:** ${new Date().toLocaleString()}\n\n`;
            mdContent += `**Total Users:** ${usuarios.length}\n\n`;
            mdContent += '---\n\n';

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
            mdContent += '## Security Notes\n\n';
            mdContent += '- These passwords are being migrated to bcrypt hashed format\n';
            mdContent += '- Users can continue logging in with the same passwords\n';
            mdContent += '- Delete this file once migration is verified\n';

            // Download the markdown file
            const blob = new Blob([mdContent], { type: 'text/markdown' });
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = 'current-passwords-backup.md';
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            URL.revokeObjectURL(url);

            setStatus(`✅ File downloaded! Check your Downloads folder for current-passwords-backup.md`);
        } catch (err) {
            console.error(err);
            setStatus(`Error: ${err}`);
        }
    };

    return (
        <div style={{ padding: '40px', maxWidth: '1200px', margin: '0 auto' }}>
            <h1>Export Passwords Before Migration</h1>
            <p>Click the button below to export all current passwords to a markdown file.</p>

            <button
                onClick={exportPasswords}
                style={{
                    padding: '12px 24px',
                    fontSize: '16px',
                    backgroundColor: '#4CAF50',
                    color: 'white',
                    border: 'none',
                    borderRadius: '4px',
                    cursor: 'pointer',
                    marginTop: '20px'
                }}
            >
                Export Passwords
            </button>

            {status && (
                <div style={{
                    marginTop: '20px',
                    padding: '15px',
                    backgroundColor: '#f0f0f0',
                    borderRadius: '4px'
                }}>
                    <strong>Status:</strong> {status}
                </div>
            )}

            {passwords.length > 0 && (
                <div style={{ marginTop: '30px' }}>
                    <h2>Preview ({passwords.length} users)</h2>
                    <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '15px' }}>
                        <thead>
                            <tr style={{ backgroundColor: '#333', color: 'white' }}>
                                <th style={{ padding: '10px', textAlign: 'left' }}>Email</th>
                                <th style={{ padding: '10px', textAlign: 'left' }}>Password</th>
                                <th style={{ padding: '10px', textAlign: 'left' }}>Role</th>
                            </tr>
                        </thead>
                        <tbody>
                            {passwords.map((user, idx) => (
                                <tr key={user.id} style={{ backgroundColor: idx % 2 === 0 ? '#f9f9f9' : 'white' }}>
                                    <td style={{ padding: '10px', border: '1px solid #ddd' }}>{user.email}</td>
                                    <td style={{ padding: '10px', border: '1px solid #ddd' }}>{user.password}</td>
                                    <td style={{ padding: '10px', border: '1px solid #ddd' }}>{user.rol}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
}
