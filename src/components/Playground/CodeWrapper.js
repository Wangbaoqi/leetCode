import * as React from 'react';
import styled from 'styled-components';

import { DARK_COLORS } from '@constants';

import { BaseWrapper as SidenoteWrapper } from '@components/Sidenote';
import InPortal from '@components/InPortal';
import SettingCheckbox from '@components/SettingCheckbox';

function CodeWrapper({
  stacked,
  className,
  children,
  isFullscreened,
}) {
  const inlineRef = React.useRef(null);

  const [
    isActuallyFullscreened,
    setIsActuallyFullscreened,
  ] = React.useState(isFullscreened);
  const [blockerSize, setBlockerSize] = React.useState(0);

  React.useEffect(() => {
    setIsActuallyFullscreened(isFullscreened);

    if (!inlineRef.current) {
      return;
    }

    if (isFullscreened) {
      const boundingBox = inlineRef.current.getBoundingClientRect();

      setBlockerSize(boundingBox.height);
    } else {
      setBlockerSize(0);
    }
  }, [isFullscreened]);

  if (isActuallyFullscreened) {
    return (
      <>
        <InlineOuterWrapper>
          <InlineWrapper style={{ height: blockerSize }} />
        </InlineOuterWrapper>
        <InPortal>
          <FullscreenWrapper>{children}</FullscreenWrapper>
        </InPortal>
      </>
    );
  }

  return (
    <InlineOuterWrapper stacked={stacked}>
      <InlineWrapper className={className} ref={inlineRef}>
        {children}
      </InlineWrapper>
      <Footer>
        <SettingCheckbox settingKey="enableTabInCodePlaygrounds">
          Enable “Tab” for indentation
        </SettingCheckbox>
      </Footer>
    </InlineOuterWrapper>
  );
}

const Wrapper = styled.div`
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

  background: var(--syntax-bg);
  border: none;
`;

const InlineOuterWrapper = styled.div`
  margin-bottom: ${(p) => (p.stacked ? '16px' : '48px')};

  @media ${(p) => p.theme.breakpoints?.mdAndSmaller} {
    margin-bottom: ${(p) => (p.stacked ? '16px' : '32px')};
  }
`;

export const InlineWrapper = styled(Wrapper)`
  position: relative;
  z-index: 1;
  width: calc(100% + 32px * 2);
  margin: 0 -32px;
  border-radius: 8px;

  ${SidenoteWrapper} & {
    width: calc(100% + 16px * 2);
    margin-left: -16px;
    margin-right: -16px;
  }

  @media ${(p) => p.theme.breakpoints?.mdAndSmaller} {
    width: calc(100% + 24px * 2);
    margin-left: -24px;
    margin-right: -24px;
    border-radius: 0;

    ${SidenoteWrapper} & {
      width: calc(100% + 16px * 2);
    }
  }
`;

const Footer = styled.footer`
  padding-top: 16px;
  display: flex;
  justify-content: flex-start;

  @media (orientation: portrait) {
    display: none;
  }
`;

export const FullscreenWrapper = styled(Wrapper)`
  position: fixed;
  z-index: 2;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  margin: 0;
  display: flex;
  flex-direction: column;
`;

export default CodeWrapper;
