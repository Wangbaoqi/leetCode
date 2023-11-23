import type { Metadata } from 'next';
import { Providers } from './providers';

import clsx from 'clsx';
import { fontSans, firaMono, ysabeauOffice } from '@/app/fonts';

import '@/styles/globals.css';

const bodyClsx = clsx(
  // fontSans.variable,
  'min-h-screen text-foreground font-wotfard bg-background scroll-smooth antialiased'
);

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={bodyClsx}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
