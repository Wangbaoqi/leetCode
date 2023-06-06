export const COLORS = {
  text: 'hsl(210deg 10% 90%)',
  background: 'hsl(210deg 15% 6%)',
  blurredBackground: 'hsla(210deg 15% 6% / 0.75)',
  primary: 'hsl(333deg 100% 50%)',
  secondary: 'hsl(185deg 100% 55%)',
  tertiary: 'hsl(53deg 100% 50%)',
  decorative: 'hsl(200deg 50% 60%)',
  muted: 'hsl(210deg 38% 15%)',
  info: 'hsl(245deg 100% 60%)',
  error: 'hsl(340deg 95% 60%)',
  errorBackground: 'hsla(340deg 95% 43% / 0.1)',
  success: 'hsl(160deg 100% 40%)',
  successBackground: 'hsla(160deg 100% 40% / 0.1)',
  alert: 'hsl(30deg 100% 50%)',
  alertBackground: 'hsla(38deg 100% 50% / 0.1)',
  syntax: {},
  gray: {
    50: 'hsl(210deg 19% 10%)',
    100: 'hsl(210deg 15% 20%)',
    200: 'hsl(210deg 15% 25%)',
    300: 'hsl(210deg 10% 40%)',
    400: 'hsl(210deg 9% 45%)',
    500: 'hsl(210deg 8% 50%)',
    // Accessible:
    600: 'hsl(210deg 12% 55%)',
    700: 'hsl(210deg 14% 66%)',
    800: 'hsl(210deg 20% 77%)',
    900: 'hsl(210deg 25% 88%)',
    1000: 'hsl(210deg 25% 96%)',
  },
};

COLORS.syntax = {
  light: {
    bg: 'hsl(225deg, 15%, 92%)',
    highlight: 'hsl(225deg, 25%, 93%)',
    txt: '#2A2A2A',
    comment: 'hsl(225deg, 15%, 42%)',
    prop: '#da0079',
    bool: '#bf00b8',
    val: 'hsl(200deg, 15%, 40%)',
    str: '#651fff',
    name: '#AA00FF',
    del: 'rgb(255, 85, 85)',
    regex: '#3600d6',
    fn: '#3D5AFE',
  },
  dark: {
    bg: 'hsl(210deg 15% 6%)',
    highlight: 'hsl(210deg 30% 18%)',
    txt: 'hsl(0deg 0% 100%)',
    comment: 'hsl(200deg 18% 51%)',
    prop: 'hsl(326deg 100% 61%)',
    bool: 'hsl(50deg 100% 50%)',
    val: 'hsl(210deg, 12%, 65%)',
    str: 'hsl(259deg 100% 71%)',
    name: 'hsl(280deg 100% 66%)',
    del: 'hsl(0deg 100% 67%)',
    regex: 'hsl(50deg 100% 50%)',
    fn: 'hsl(195deg 100% 50%)',
  },
};


export const SPLIT_BREAKPOINT = 960;