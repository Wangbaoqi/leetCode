import React from 'react';
import styled, { keyframes } from 'styled-components';
import { AlertCircle, AlertOctagon } from 'react-feather';
import { SandpackCodeViewer } from '@codesandbox/sandpack-react';

import { stringify } from './helpers';

const getDataForConsoleMethod = (method) => {
  switch (method) {
    case 'warn': {
      return {
        Icon: AlertCircle,
        color: 'hsl(50deg 100% 85%)',
      };
    }
    case 'error': {
      return {
        Icon: AlertOctagon,
        color: 'hsl(350deg 80% 82%)',
      };
    }
    default: {
      return {
        Icon: null,
        color: 'white',
      };
    }
  }
};

function Log({ data, method }) {
  const { Icon, color } = getDataForConsoleMethod(method);

  return (
    <Wrapper style={{ '--color': color }}>
      {Icon && (
        <IconWrapper>
          <Icon size={16} />
        </IconWrapper>
      )}
      <ItemsWrapper>
        {data.map((msg, index) => {
          let key;
          try {
            key = `${index}|${msg}`;
          } catch (err) {
            // Weirdly, certain things like `new URL()` will
            // create objects that crash when we try and
            // interpolate them into a string.
            key = index;
          }

          if (typeof msg === 'string') {
            return <Item key={key}>{msg}</Item>;
          }

          let children;
          if (msg != null && typeof msg['@t'] === 'string') {
            // I have no idea what this first case is, but it was
            // in the Sandpack PR, and I assume it's here for a good
            // reason.
            children = msg['@t'];
          } else {
            children = stringify(msg);
          }

          return (
            <Item key={key}>
              <SandpackCodeViewer
                showTabs={false}
                initMode="user-visible"
                code={children}
              />
            </Item>
          );
        })}
      </ItemsWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.li`
  display: flex;
  gap: 8px;
  align-items: flex-start;
  font-family: var(--font-family-mono);
  white-space: pre-wrap;
  color: var(--color);

  &:not(:last-of-type) {
    padding-bottom: 16px;
    border-bottom: 1px dashed var(--color-gray-200);
    margin-bottom: 16px;
  }
`;

const IconWrapper = styled.div`
  min-width: 16px;
  /* Optical alignment */
  transform: translateY(5px);
`;

const ItemsWrapper = styled.div`
  flex: 1;
`;

const enterAnimation = keyframes`
  from {
    opacity: 0;
  }
`;

const Item = styled.span`
  display: block;
  animation: ${enterAnimation} 300ms;

  /*
    We render a code viewer when logging objects and things.
    Remove some built-in padding & stuff
  */
  .sp-cm {
    padding: 0;
  }
  .cm-content,
  .cm-line {
    padding-left: 0px !important;
  }
  /*
    Sometimes, when logging VERY LARGE things (like React itself),
    it renders in .sp-pre-placeholder. No idea why.

    This is a proble, since I'm hiding .sp-pre-placeholder in
    SandboxUnit! It was causing a flicker when flipping between
    tabs.

    I don't have that issue here, so I'll revert that style.
  */
  && .sp-pre-placeholder {
    opacity: 1;
    margin-left: 0 !important;
    background: transparent !important;
  }

  &:not(:last-of-type) {
    margin-bottom: 8px;
  }
`;

export default Log;

