import React, { FC, ReactNode, useRef, useContext } from 'react';
import styled, { ThemeContext } from 'styled-components';

import UnstyledButton from '@components/UnstyledButton';
import useDrag from './utils/useDrag';
import { BREAKPOINT } from './Playground.constants';

const DIVIDER_WIDTH = 16;

function SplitPane({
  className = '',
  splitRatio,
  isFullscreened,
  leftTitle,
  leftChild,
  rightTitle,
  rightChild,
}) {
  const rulerRef = useRef(null);
  const containerRef = useRef(null);
  const dividerRef = useRef(null);

  let { leftWidth, rightWidth, reset } = useDrag({
    defaultRatio: splitRatio,
    rulerRef: rulerRef,
    containerRef,
    dividerRef,
    dividerWidth: DIVIDER_WIDTH,
  });

  return (
    <>
      <div ref={rulerRef} />
      <Wrapper style={{ flex: isFullscreened ? 1 : undefined }}>
        <Container className={className} ref={containerRef}>
          <FirstPane style={{ flex: leftWidth }}>
            {leftChild}
          </FirstPane>
          <Divider ref={dividerRef} />
          <SecondPane style={{ flex: rightWidth }}>
            {rightChild}
          </SecondPane>
        </Container>
      </Wrapper>
    </>
  );
}

const Wrapper = styled.div`
  max-width: 100%;
  overflow: hidden;

  @media ${(p) => p.theme.breakpoints?.mdAndSmaller} {
    border-radius: 0;
    border-left: none;
    border-right: none;
  }
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  height: 100%;

  @media (min-width: ${BREAKPOINT}px) {
    flex-direction: row;
  }
`;

const FirstPane = styled.div`
  @media (min-width: ${BREAKPOINT}px) {
    margin-right: -8px;
  }
`;
const SecondPane = styled.div`
  @media (min-width: ${BREAKPOINT}px) {
    margin-left: -8px;
  }
`;

const Divider = styled(UnstyledButton)`
  position: relative;
  z-index: 2;
  cursor: default;
  padding: 16px 0 0;
  pointer-events: auto;

  &:before,
  &:after {
    content: '';
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
  }

  &:before {
    width: 100%;
    height: 1px;
    background-color: var(--color-gray-100);
  }

  @media (min-width: ${BREAKPOINT}px) {
    width: ${DIVIDER_WIDTH}px;
    cursor: col-resize;
    padding: 0;

    &:before,
    &:after {
      content: '';
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      margin: auto;
    }

    &:before {
      width: 1px;
      height: auto;
    }

    &:after {
      width: 11px;
      background-color: hsl(210deg 15% 20% / 0.5);
      opacity: 0;
      transition: opacity 500ms;
    }

    &:hover:after {
      opacity: 1;
      transition: opacity 250ms;
    }
  }
`;

export default SplitPane;
