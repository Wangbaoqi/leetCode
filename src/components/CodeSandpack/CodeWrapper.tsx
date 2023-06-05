import * as React from 'react';
import styled from 'styled-components';
import { SandpackThemeProvider } from '@codesandbox/sandpack-react';

import Space from './Tools/Space';
import Paper from './Tools/Paper';

import { COLORS } from './constants';
import theme from './theme';

function CodeWrapper({
  id,
  stacked,
  className,
  children,
  isFullscreened,
}) {
  return (
    <>
      <InlineOuterWrapper
        data-id={id}
        stacked={stacked}
        data-can-be-annotated={false}
      >
        <Wrapper
          className={className}
          data-is-fullscreened={isFullscreened}
        >
          <SandpackThemeProvider theme={theme}>
            {children}
          </SandpackThemeProvider>
        </Wrapper>
      </InlineOuterWrapper>
    </>
  );
}

export const InlineOuterWrapper = styled.div`
  margin-bottom: ${(p) => (p.stacked ? '16px' : '48px')};

  @media ${(p) => p.theme.breakpoints?.mdAndSmaller} {
    margin-bottom: ${(p) => (p.stacked ? '16px' : '32px')};
  }
`;

const Wrapper = styled(Space)`
  background: ${COLORS.syntax.dark.bg};
  border: none;

  &[data-is-fullscreened='false'] {
    --inset-by: 16px;

    position: relative;
    z-index: 1;
    width: calc(100% + var(--inset-by) * 2);
    margin: 0 calc(var(--inset-by) * -1);
    // border-radius: 12px;
    border: 2px solid var(--color-gray-100);

    ${Paper} & {
      border: none;
    }

    // @media ${(p) => p.theme.breakpoints?.mdAndSmaller} {
    //   border-radius: 0;
    //   border: none;
    //   border-bottom: 2px solid var(--color-gray-100);
    // }
  }

  &[data-is-fullscreened='true'] {
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

    & .sp-wrapper {
      /* Grow to fill the full height */
      flex: 1;

      /*
        Don't expand beyond the window height.
        Because the right children have “overflow: auto”,  this
        is all that's needed.
      */
      height: 100%;
    }
  }
`;

export const FullscreenWrapper = styled(Wrapper)``;

export const InlineWrapper = styled(Wrapper)``;

export default CodeWrapper;
