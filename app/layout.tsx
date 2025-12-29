import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Discipline Illimitée™ | Pierre Amougou',
  description:
    'Un cadre structuré basé sur les sciences cognitives pour reprendre le contrôle de ton temps, de ton énergie et de ta trajectoire.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
