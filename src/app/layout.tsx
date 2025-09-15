import './globals.css';

export const metadata = {
  title: 'Plataforma Michael',
  description: 'Página personal de Michael Rojas Urtecho',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      
      <body>{children}</body>
    </html>
  );
}