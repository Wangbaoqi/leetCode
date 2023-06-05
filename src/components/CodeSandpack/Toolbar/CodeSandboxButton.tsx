import React from 'react';
import styled from 'styled-components';
import { ExternalLink } from 'react-feather';
import { UnstyledOpenInCodeSandboxButton } from '@codesandbox/sandpack-react';

import VisuallyHidden from '../Tools/VisuallyHidden';

import ActionButton from './ActionButton';

const CodeSandboxButton = () => {
  const [isHovering, setIsHovering] = React.useState(false);

  return (
    <abbr title="Open in CodeSandbox">
      <Wrapper
        as={UnstyledOpenInCodeSandboxButton}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
        style={{
          opacity: isHovering ? 1 : 0.7,
        }}
      >
        <ExternalLink
          size={16}
          style={{
            color: '#e3e3e3',
          }}
        />
        <VisuallyHidden>Open in CodeSandbox</VisuallyHidden>
      </Wrapper>
    </abbr>
  );
};

const Wrapper = styled(ActionButton)`
  transform-origin: center center;
  transition: opacity 250ms;
  display: inline-flex !important;
  width: 32px !important;
  height: 32px !important;
  background-color: transparent !important;
  border: 0 !important;
`;

export default CodeSandboxButton;
