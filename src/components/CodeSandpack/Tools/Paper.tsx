import styled from 'styled-components';

import { LIGHT_COLORS } from '@site/src/utils/constants';

const Paper = styled.div`
  --color-text: ${LIGHT_COLORS.text};
  --color-background: ${LIGHT_COLORS.background};
  --color-blurred-background: ${LIGHT_COLORS.blurredBackground};
  --color-primary: ${LIGHT_COLORS.primary};
  --color-secondary: ${LIGHT_COLORS.secondary};
  --color-tertiary: ${LIGHT_COLORS.tertiary};
  --color-decorative: ${LIGHT_COLORS.decorative};
  --color-muted: ${LIGHT_COLORS.muted};
  --color-info: ${LIGHT_COLORS.info};
  --color-success: ${LIGHT_COLORS.success};
  --color-success-background: ${LIGHT_COLORS.successBackground};
  --color-error: ${LIGHT_COLORS.error};
  --color-error-background: ${LIGHT_COLORS.errorBackground};
  --color-alert: ${LIGHT_COLORS.alert};
  --color-alert-background: ${LIGHT_COLORS.alertBackground};
  --color-subtle-background: ${LIGHT_COLORS.subtleBackground};
  --color-subtle-floating: ${LIGHT_COLORS.subtleFloating};
  --color-homepage-light: ${LIGHT_COLORS.homepageLight};
  --color-homepage-dark: ${LIGHT_COLORS.homepageDark};
  --color-homepage-bg: ${LIGHT_COLORS.homepageBg};
  --color-gray-100: ${LIGHT_COLORS.gray[100]};
  --color-gray-200: ${LIGHT_COLORS.gray[200]};
  --color-gray-300: ${LIGHT_COLORS.gray[300]};
  --color-gray-400: ${LIGHT_COLORS.gray[400]};
  --color-gray-500: ${LIGHT_COLORS.gray[500]};
  --color-gray-600: ${LIGHT_COLORS.gray[600]};
  --color-gray-700: ${LIGHT_COLORS.gray[700]};
  --color-gray-900: ${LIGHT_COLORS.gray[900]};
  --color-gray-1000: ${LIGHT_COLORS.gray[1000]};

  --syntax-bg: ${LIGHT_COLORS.syntax.bg};
  --syntax-highlight: ${LIGHT_COLORS.syntax.highlight};
  --syntax-txt: ${LIGHT_COLORS.syntax.txt};
  --syntax-comment: ${LIGHT_COLORS.syntax.comment};
  --syntax-prop: ${LIGHT_COLORS.syntax.prop};
  --syntax-bool: ${LIGHT_COLORS.syntax.bool};
  --syntax-val: ${LIGHT_COLORS.syntax.val};
  --syntax-str: ${LIGHT_COLORS.syntax.str};
  --syntax-name: ${LIGHT_COLORS.syntax.name};
  --syntax-del: ${LIGHT_COLORS.syntax.del};
  --syntax-regex: ${LIGHT_COLORS.syntax.regex};
  --syntax-fn: ${LIGHT_COLORS.syntax.fn};

  background: var(--color-background);
  color: var(--color-text);
  border-radius: 8px;
`;

export default Paper;
