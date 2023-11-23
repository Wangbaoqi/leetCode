import { nextui, NextUIPluginConfig } from '@nextui-org/react';
import type { Config } from 'tailwindcss';
import defaultTheme from 'tailwindcss/defaultTheme';
const nextUIConf: NextUIPluginConfig = {
  prefix: 'nant',
  // defaultTheme: 'dark', // has problem
  // defaultExtendTheme: 'dark',
  layout: {
    spacingUnit: 4, // in px
    disabledOpacity: 0.5, // this value is applied as opacity-[value] when the component is disabled
    dividerWeight: '1px', // h-divider the default height applied to the divider component
    fontSize: {
      tiny: '0.75rem', // text-tiny
      small: '0.875rem', // text-small
      medium: '1rem', // text-medium
      large: '1.125rem' // text-large
    },
    lineHeight: {
      tiny: '1rem', // text-tiny
      small: '1.25rem', // text-small
      medium: '1.5rem', // text-medium
      large: '1.75rem' // text-large
    },
    radius: {
      small: '8px', // rounded-small
      medium: '12px', // rounded-medium
      large: '14px' // rounded-large
    },
    borderWidth: {
      small: '1px', // border-small
      medium: '2px', // border-medium (default)
      large: '3px' // border-large
    }
  },
  themes: {
    light: {
      layout: {},
      colors: {}
    },
    dark: {
      layout: {},
      colors: {}
    }
  }
};

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
      },
      fontFamily: {
        sans: ['var(--font-sans)', ...defaultTheme.fontFamily.sans],
        serif: defaultTheme.fontFamily.serif,
        mono: defaultTheme.fontFamily.mono,
        wotfard: ['wotfard', 'Wotfard-fallback', 'sans-serif']
      }
    }
  },
  darkMode: 'class',
  plugins: [nextui(nextUIConf)]
};
export default config;
