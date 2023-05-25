import React from 'react';
import styled from 'styled-components';
import { RefreshCw } from 'react-feather';

import { SPRINGS } from '@constants';

import VisuallyHidden from '@components/VisuallyHidden';

import ActionButton from './ActionButton';

const RefreshButton = ({ handleRefresh }) => {
  const [rotation, setRotation] = React.useState(0);
  const [isHovering, setIsHovering] = React.useState(false);

  return (
    <abbr title="Refresh pane">
      <Wrapper
        onClick={() => {
          handleRefresh();
          setRotation((r) => r + 180);
        }}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
        style={{
          transform: `rotate(${rotation}deg)`,
          opacity: isHovering ? 1 : 0.7,
        }}
      >
        <RefreshCw size={16} />
        <VisuallyHidden>Refresh results pane</VisuallyHidden>
      </Wrapper>
    </abbr>
  );
};

const Wrapper = styled(ActionButton)`
  transform-origin: center center;
  transition: opacity 250ms;

  @media (prefers-reduced-motion: no-preference) {
    transition: transform 800ms cubic-bezier(0.17, 0.67, 0.36, 1.04),
      opacity 250ms;
  }
`;

export default RefreshButton;
