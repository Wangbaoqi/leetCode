import React from 'react';
import styled from 'styled-components';

import FullscreenToggleButton from './FullscreenToggleButton';
import ResetButton from './ResetButton';
import FormatButton from './FormatButton';

function Toolbar({
  title,
  isFullscreened,
  handleToggleFullscreen,
  handleReset,
  handleFormat,
}) {
  return (
    <Wrapper>
      <Title>{title || 'Code Playground'}</Title>
      <Actions>
        <FormatButton handleFormat={handleFormat} />
        <ResetButton handleReset={handleReset} />
        {/*
          Disable fullscreen button because `scroll-behaviour: smooth`
          triggers when it closes, and it's wildly disorienting
        */}
        {/* <FullscreenToggleButton
          isFullscreened={isFullscreened}
          handleToggleFullscreen={handleToggleFullscreen}
        /> */}
      </Actions>
    </Wrapper>
  );
}

const Wrapper = styled.header`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 32px;
  line-height: 32px;
  padding: 0 16px;
  background: var(--color-gray-100);
  border-radius: 8px 8px 0 0;
`;

const Title = styled.h3`
  font-size: 14px;
  font-weight: var(--font-weight-medium);
  color: var(--color-gray-700);
`;

const Actions = styled.div`
  display: flex;
  gap: 8px;
  /* Optical alignment */
  margin-right: -10px;
  color: white;
`;

export default Toolbar;
