import {
  Inter,
  Roboto_Mono,
  Fira_Mono,
  Ysabeau_Office
} from 'next/font/google';

export const fontSans = Inter({
  variable: '--font-sans',
  adjustFontFallback: true,
  display: 'optional',
  fallback: [
    'ui-sans-serif',
    'system-ui',
    '-apple-system',
    'BlinkMacSystemFont',
    '"Segoe UI"',
    'Roboto',
    '"Helvetica Neue"',
    'Arial',
    '"Noto Sans"',
    'sans-serif',
    '"Apple Color Emoji"',
    '"Segoe UI Emoji"',
    '"Segoe UI Symbol"',
    '"Noto Color Emoji"'
  ],
  preload: true,
  style: 'normal',
  subsets: ['latin'],
  weight: ['400', '500', '700']
});

export const firaMono = Fira_Mono({
  style: 'normal',
  weight: ['400', '500', '700'],
  subsets: ['latin']
});

export const ysabeauOffice = Ysabeau_Office({
  style: 'normal',
  display: 'auto',
  weight: ['400', '500', '700'],
  subsets: ['latin']
});
