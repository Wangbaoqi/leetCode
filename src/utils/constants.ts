export const LIGHT_COLORS = {
  text: 'hsl(222deg, 22%, 5%)',
  background: 'hsl(0deg, 0%, 100%)',
  blurredBackground: 'hsla(0deg, 0%, 100%, 0.85)',
  primary: 'hsl(245deg, 100%, 60%)',
  secondary: 'hsl(333deg, 100%, 45%)',
  tertiary: 'hsl(255deg, 85%, 30%)',
  decorative: 'hsl(200deg, 75%, 65%)',
  muted: 'hsl(210deg, 55%, 92%)',
  mutedBackground: 'hsla(210deg, 55%, 92%, 0.85)',
  error: 'hsl(340deg, 95%, 50%)',
  errorBackground: 'hsla(340deg, 95%, 43%, 0.1)',
  success: 'hsl(160deg, 100%, 40%)',
  successBackground: 'hsla(160deg, 100%, 40%, 0.1)',
  alert: 'hsl(37deg, 100%, 50%)',
  alertBackground: 'hsla(52deg, 100%, 50%, 0.25)',
  venn: ['hsl(190deg, 100%, 65%)', 'hsl(340deg, 100%, 65%)'],
  gray: {
    '100': 'hsl(225deg, 25%, 95%)',
    '200': 'hsl(225deg, 16%, 90%)',
    '300': 'hsl(225deg, 8%, 80%)',
    '400': 'hsl(225deg, 8%, 70%)',
    '500': 'hsl(225deg, 7%, 60%)',
    // Accessible:
    '600': 'hsl(225deg, 15%, 50%)',
    '700': 'hsl(225deg, 12%, 40%)',
    '900': 'hsl(225deg, 25%, 20%)',
    '1000': 'hsl(225deg, 15%, 15%)',
  },
};

LIGHT_COLORS.subtleBackground = LIGHT_COLORS.gray[100];
LIGHT_COLORS.subtleFloating = LIGHT_COLORS.background;
LIGHT_COLORS.homepageLight = 'hsl(204deg, 67%, 85%)';
LIGHT_COLORS.homepageDark = 'hsl(202deg, 71%, 90%)';
LIGHT_COLORS.homepageBg = LIGHT_COLORS.homepageLight;
LIGHT_COLORS.info = LIGHT_COLORS.primary;

LIGHT_COLORS.syntax = {
  bg: 'hsl(225deg, 25%, 97%)',
  highlight: 'hsl(225deg, 25%, 93%)',
  txt: '#2A2A2A',
  comment: '#467790',
  prop: '#da0079',
  bool: '#bf00b8',
  val: '#78909C',
  str: '#651fff',
  name: '#AA00FF',
  del: 'rgb(255, 85, 85)',
  regex: '#3600d6',
  fn: '#3D5AFE',
};

export const DARK_COLORS = {
  text: 'hsl(0deg, 0%, 100%)',
  background: 'hsl(210deg, 30%, 8%)',
  blurredBackground: 'hsla(210deg, 30%, 8%, 0.85)',
  primary: 'hsl(230deg, 100%, 69%)',
  secondary: 'hsl(333deg, 100%, 52%)',
  tertiary: 'hsl(53deg, 100%, 50%)',
  decorative: 'hsl(200deg, 50%, 60%)',
  muted: 'hsl(210deg, 38%, 15%)',
  mutedBackground: 'hsla(210deg, 38%, 15%, 0.85)',
  error: 'hsl(340deg, 95%, 60%)',
  errorBackground: 'hsla(340deg, 95%, 43%, 0.1)',
  success: 'hsl(160deg, 100%, 40%)',
  successBackground: 'hsla(160deg, 100%, 40%, 0.1)',
  alert: 'hsl(30deg, 100%, 50%)',
  // alertBackground: 'hsla(38deg, 100%, 50%, 0.1)',
  alertBackground: 'hsl(40deg 13% 13%)',
  venn: ['hsl(250deg, 100%, 50%)', 'hsl(175deg, 100%, 50%)'],
  gray: {
    '100': 'hsl(210deg, 15%, 20%)',
    '200': 'hsl(210deg, 15%, 25%)',
    '300': 'hsl(210deg, 10%, 40%)',
    '400': 'hsl(210deg, 9%, 45%)',
    '500': 'hsl(210deg, 8%, 50%)',
    // Accessible:
    '600': 'hsl(210deg, 12%, 55%)',
    '700': 'hsl(210deg, 14%, 66%)',
    '900': 'hsl(210deg, 25%, 88%)',
    '1000': 'hsl(210deg, 25%, 96%)',
  },
};

DARK_COLORS.subtleBackground = DARK_COLORS.background;
DARK_COLORS.subtleFloating = 'hsl(210deg, 22%, 15%)';
DARK_COLORS.homepageLight = 'hsla(200deg, 100%, 85%, 0)';
DARK_COLORS.homepageDark = 'hsla(200deg, 100%, 85%, 0.1)';
DARK_COLORS.homepageBg = DARK_COLORS.background;
DARK_COLORS.info = DARK_COLORS.primary;

DARK_COLORS.syntax = {
  bg: 'hsl(210deg, 30%, 12%)',
  highlight: 'hsl(210deg, 30%, 18%)',
  txt: '#FFF',
  comment: '#6c8998',
  prop: '#FF39A8',
  bool: '#FFD600',
  val: '#718e9c',
  str: 'rgb(155, 109, 255)',
  name: '#C653FF',
  del: '#FF5555',
  regex: '#ffd700',
  fn: 'rgb(0, 190, 255)',
};

export const BREAKPOINT_SIZES = {
  xs: 320,
  sm: 563,
  md: 768,
  lg: 1024,
  xl: 1440,
};

export const BREAKPOINTS = {
  xs: `(max-width: ${BREAKPOINT_SIZES.xs}px)`,
  sm: `(min-width: ${BREAKPOINT_SIZES.xs}px and max-width: ${BREAKPOINT_SIZES.sm}px)`,
  md: `(min-width: ${BREAKPOINT_SIZES.sm}px and max-width: ${BREAKPOINT_SIZES.md}px)`,
  lg: `(min-width: ${BREAKPOINT_SIZES.md}px and max-width: ${BREAKPOINT_SIZES.lg}px)`,
  xl: `(min-width: ${BREAKPOINT_SIZES.lg}px and max-width: ${BREAKPOINT_SIZES.xl}px)`,
  xsAndSmaller: `(max-width: ${BREAKPOINT_SIZES.xs}px)`,
  smAndSmaller: `(max-width: ${BREAKPOINT_SIZES.sm}px)`,
  mdAndSmaller: `(max-width: ${BREAKPOINT_SIZES.md}px)`,
  lgAndSmaller: `(max-width: ${BREAKPOINT_SIZES.lg}px)`,
  xlAndSmaller: `(max-width: ${BREAKPOINT_SIZES.xl}px)`,
  xsAndLarger: `(min-width: ${BREAKPOINT_SIZES.xs + 1}px)`,
  smAndLarger: `(min-width: ${BREAKPOINT_SIZES.sm + 1}px)`,
  mdAndLarger: `(min-width: ${BREAKPOINT_SIZES.md + 1}px)`,
  lgAndLarger: `(min-width: ${BREAKPOINT_SIZES.lg + 1}px)`,
  xlAndLarger: `(min-width: ${BREAKPOINT_SIZES.xl + 1}px)`,
  mobile: `(max-width: ${BREAKPOINT_SIZES.md}px)`,
  desktop: `(min-width: ${BREAKPOINT_SIZES.md + 1}px)`,
};

export const SPRINGS = {
  default: {
    // This is literally the default for React Spring.
    // Kept here for reference, not because I should use it.
    tension: 170,
    friction: 26,
  },
  light: {
    tension: 170,
    friction: 18,
  },
  springy: {
    tension: 300,
    friction: 10,
  },
  lush: {
    tension: 170,
    friction: 50,
  },
  molasses: {
    tension: 170,
    friction: 75,
  },
};

export const READING_WIDTH = 850;
export const EXTRA_WIDE_WIDTH = 1024;

const mobileRegex = /Android|webOS|iPhone|iPad|iPod|BlackBerry/i;

const userAgent =
  typeof window !== 'undefined' ? window.navigator.userAgent : 'node';

export const IS_MOBILE_USER_AGENT = mobileRegex.test(userAgent);

export const UNIT = 8;

export const Z_INDICES = {
  hero: 1,
  mainContent: 10,
  header: 100,
};

// This key is used in localStorage to remember theme preferences
export const PREFERS_DARK_KEY = 'prefers-dark';

export const PREFERS_DARK_CSS_PROP = `--${PREFERS_DARK_KEY}`;
export const COLOR_SWAP_TRANSITION_DURATION = 350;

export const THEME = {
  unit: UNIT,
  breakpoints: BREAKPOINTS,
};

export const HEADER_HEIGHT = 60;

export const TIGHT_SPRING = {
  tension: 450,
  friction: 25,
};

export const MAX_NUM_OF_LIKES = 16;
export const CONVERTKIT_TAGS_BY_ID = {
  spring: '1800658',
  'primary-newsletter': '1800626',
  careers: '1350186',
  technical: '1350187',
  'joy-of-react-updates': '2988052',
};

export const THUMB_FOCUS_GRADIENT = `
  radial-gradient(
    hsl(48deg 100% 75% / 1),
    hsl(48deg 100% 75% / 0) 40%
  ),
  conic-gradient(
    from 90deg at 50% 50%,
    hsl(45deg 100% 55%),
    hsl(52deg 100% 75%),
    hsl(45deg 100% 55%),
    hsl(52deg 100% 75%),
    hsl(45deg 100% 55%),
    hsl(52deg 100% 95%),
    hsl(45deg 100% 55%)
  )
`;
