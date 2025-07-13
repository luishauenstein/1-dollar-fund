import type { Metadata } from 'next';
import './globals.css';
import Providers from './providers';
import { Analytics } from '@vercel/analytics/react';

export const metadata: Metadata = {
  title: '1 Dollar Fund',
  description:
    'The 1 Dollar Fund is an experiment set to run for decades, aimed at proving that $1 of Bitcoin is enough to retire. It has a simple strategy: Buy $1 of Bitcoin every hour. Forever.',
  openGraph: {
    title: '1 Dollar Fund',
    description:
      'The 1 Dollar Fund is an experiment set to run for decades, aimed at proving that $1 per hour is enough to retire on Bitcoin. Starting on 1st of January 2025, $1 of Bitcoin is purchased every hour by the fund.',
    images: [
      {
        url: '/og-img.jpg',
        width: 1200,
        height: 630,
        alt: 'The 1 Dollar Fund has a simple strategy: Buy $1 of Bitcoin every hour. Forever.',
      },
    ],
  },
  robots: 'index, follow',
  icons: {
    icon: '/favicon.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
        <Analytics />
      </body>
    </html>
  );
}
