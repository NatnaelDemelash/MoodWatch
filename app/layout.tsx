import type { Metadata } from 'next';
import { JetBrains_Mono } from 'next/font/google';
import './globals.css';

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'MoodWatch - Find movies that match your mood',
  description:
    'Discover film recommendations based on how you feel. Get personalized movie suggestions for every mood - from exhausted to excited.',
  keywords:
    'movie recommendations, mood-based movies, film finder, personalized movie picks, what to watch',
  authors: [{ name: 'Natnael' }],
  openGraph: {
    title: 'MoodWatch - Movies for every mood',
    description:
      'Tell us how you feel and get movie recommendations that match your vibe.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MoodWatch - Movies for every mood',
    description: 'Find films that match how you feel right now.',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={jetbrainsMono.className}>
      <body>{children}</body>
    </html>
  );
}
