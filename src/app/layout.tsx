import './globals.css';
import './globals-fonts.css';
import 'aos/dist/aos.css';

export const metadata = {
  title: 'Plataforma Michael',
  description: 'Página personal de Michael Rojas Urtecho',
};

export const viewport = 'width=device-width, initial-scale=1';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}