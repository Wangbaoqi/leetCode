import styled from 'styled-components';

import { DARK_COLORS } from '@site/src/utils/constants';

const Space = styled.div`
  --color-text: ${DARK_COLORS.text};
  --color-background: ${DARK_COLORS.background};
  --color-blurred-background: ${DARK_COLORS.blurredBackground};
  --color-primary: ${DARK_COLORS.primary};
  --color-secondary: ${DARK_COLORS.secondary};
  --color-tertiary: ${DARK_COLORS.tertiary};
  --color-decorative: ${DARK_COLORS.decorative};
  --color-muted: ${DARK_COLORS.muted};
  --color-info: ${DARK_COLORS.info};
  --color-success: ${DARK_COLORS.success};
  --color-success-background: ${DARK_COLORS.successBackground};
  --color-error: ${DARK_COLORS.error};
  --color-error-background: ${DARK_COLORS.errorBackground};
  --color-alert: ${DARK_COLORS.alert};
  --color-alert-background: ${DARK_COLORS.alertBackground};
  --color-subtle-background: ${DARK_COLORS.subtleBackground};
  --color-subtle-floating: ${DARK_COLORS.subtleFloating};
  --color-homepage-light: ${DARK_COLORS.homepageLight};
  --color-homepage-dark: ${DARK_COLORS.homepageDark};
  --color-homepage-bg: ${DARK_COLORS.homepageBg};
  --color-gray-100: ${DARK_COLORS.gray[100]};
  --color-gray-200: ${DARK_COLORS.gray[200]};
  --color-gray-300: ${DARK_COLORS.gray[300]};
  --color-gray-400: ${DARK_COLORS.gray[400]};
  --color-gray-500: ${DARK_COLORS.gray[500]};
  --color-gray-600: ${DARK_COLORS.gray[600]};
  --color-gray-700: ${DARK_COLORS.gray[700]};
  --color-gray-900: ${DARK_COLORS.gray[900]};
  --color-gray-1000: ${DARK_COLORS.gray[1000]};

  --syntax-bg: ${DARK_COLORS.syntax.bg};
  --syntax-highlight: ${DARK_COLORS.syntax.highlight};
  --syntax-txt: ${DARK_COLORS.syntax.txt};
  --syntax-comment: ${DARK_COLORS.syntax.comment};
  --syntax-prop: ${DARK_COLORS.syntax.prop};
  --syntax-bool: ${DARK_COLORS.syntax.bool};
  --syntax-val: ${DARK_COLORS.syntax.val};
  --syntax-str: ${DARK_COLORS.syntax.str};
  --syntax-name: ${DARK_COLORS.syntax.name};
  --syntax-del: ${DARK_COLORS.syntax.del};
  --syntax-regex: ${DARK_COLORS.syntax.regex};
  --syntax-fn: ${DARK_COLORS.syntax.fn};

  background: var(--color-background);
  color: var(--color-text);
  border-radius: 8px;
  color-scheme: dark;
`;

export default Space;
