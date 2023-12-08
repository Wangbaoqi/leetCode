import type { Metadata } from 'next';
import { Providers } from './providers';
import { Analytics } from '@vercel/analytics/react';

import clsx from 'clsx';
import { fontSans, firaMono, ysabeauOffice } from '@/app/fonts';

import '@/styles/globals.css';

const bodyClsx = clsx(
  // fontSans.variable,
  'min-h-screen text-foreground font-wotfard text-[15px] bg-background scroll-smooth antialiased'
);

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' suppressHydrationWarning={true}>
      <body className={bodyClsx}>
        <Providers>{children}</Providers>
        <Analytics />
      </body>
    </html>
  );
}
