import React from 'react';
import Tippy from '@tippyjs/react';
import styled, { keyframes } from 'styled-components';

const Tooltip = ({
  content,
  children,
  type = 'default',
  placement = 'bottom',
  when = true,
  ...delegated
}) => {
  const shouldRenderTooltip = !!when;

  if (!shouldRenderTooltip) {
    return children;
  }

  const Component = type === 'default' ? AnimatedTippy : StaticTippy;

  return (
    <Component
      content={content}
      hideOnClick={false}
      placement={placement}
      {...delegated}
    >
      {children}
    </Component>
  );
};

const enterKeyframesBottom = keyframes`
  from {
    transform: translateY(-10px);
  }
  to {
    transform: translateY(0px);
  }
`;

const enterKeyframesTop = keyframes`
  from {
    transform: translateY(20px);
  }
  to {
    transform: translateY(10px);
  }
`;

const StyledTippy = styled(Tippy)`
  --background: var(--color-gray-900);
  --text: var(--color-background);

  padding: 8px 8px 12px 8px;
  font-size: 18px !important;
  text-align: center;
  background-color: var(--background);
  color: var(--text);

  & > .tippy-arrow {
    color: var(--background);
  }
`;

const AnimatedTippy = styled(StyledTippy)`
  animation: ${(p) =>
      p.placement === 'bottom'
        ? enterKeyframesBottom
        : enterKeyframesTop}
    600ms both cubic-bezier(0.1, 0.85, 0.5, 1);
`;

const StaticTippy = styled(StyledTippy)`
  transform: translateY(-10px);
`;

export default Tooltip;
