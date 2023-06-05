import React from 'react';
import styled from 'styled-components';
import { Slash } from 'react-feather';

import VisuallyHidden from '../Tools/VisuallyHidden';

import CodeEditorContext from '../CodeEditorContext';
import ActionButton from './ActionButton';

const ClearConsoleButton = () => {
  const [rotation, setRotation] = React.useState(0);
  const [isHovering, setIsHovering] = React.useState(false);
  const { clearLogs } = React.useContext(CodeEditorContext);

  return (
    <abbr title="Refresh pane">
      <Wrapper
        onClick={() => {
          clearLogs();
          setRotation((r) => r + 180);
        }}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
        style={{
          transform: `rotate(${rotation}deg)`,
          opacity: isHovering ? 1 : 0.7,
        }}
      >
        <Slash size={16} />
        <VisuallyHidden>Clear Console</VisuallyHidden>
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

export default ClearConsoleButton;
