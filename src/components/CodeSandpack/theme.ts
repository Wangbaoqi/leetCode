const theme = {
  colors: {
    hover: '#FFFFFF',
    clickable: 'hsl(207deg 23% 52%)',
    surface2: 'hsl(227deg 11% 34%)',
    activeBackground: 'hsl(210deg 15% 50% / 0.165)',
    surface1: 'hsl(210deg 15% 6%)',
    inputBackground: 'hsl(207deg 75% 15%)',
    accent: 'hsl(50deg 100% 50%)',
    errorSurface: 'hsl(3deg 100% 90%)',
    error: 'hsl(3deg 69% 30%)',
  },
  syntax: {
    plain: 'hsl(0deg 0% 100%)',
    comment: {
      color: 'hsl(200deg 18% 51%)',
    },
    keyword: 'hsl(266deg 80% 75%)',
    tag: 'hsl(326deg 100% 61%)',
    punctuation: 'var(--color-gray-800)',
    definition: 'hsl(205deg 100% 65%)',
    property: {
      // TODO: Flip this back if I can specify it exclusively
      // for JS language
      // color: 'hsl(205deg 100% 65%)',
      color: 'hsl(326deg 100% 61%)',
    },
    static: 'hsl(0deg 0% 100%)',
    string: 'hsl(50deg 100% 50%)',
    // string: 'hsl(84deg 62% 63%)',
  },
  font: {
    body: 'var(--font-family)',
    mono: 'var(--font-family-mono)',
    size: '0.875rem',
    lineHeight: '1.4',
  },
};

export default theme;
