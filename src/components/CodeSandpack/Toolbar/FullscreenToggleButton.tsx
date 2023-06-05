import React from 'react';
import styled from 'styled-components';
import { animated, useSpring } from 'react-spring';
import { Minimize, Maximize } from 'react-feather';

import { SPRINGS } from '@site/src/utils/constants';

import usePrefersReducedMotion from '../hooks/usePrefersReducedMotion';

// import VisuallyHidden from '@components/VisuallyHidden';

import ActionButton from './ActionButton';

const FullscreenToggleButton = ({
  isFullscreened,
  handleToggleFullscreen,
}) => {
  const [isHovering, setIsHovering] = React.useState(false);

  const prefersReducedMotion = usePrefersReducedMotion();

  const springSettings = {
    config: SPRINGS.springy,
    immediate: prefersReducedMotion,
  };

  const position =
    (isFullscreened && isHovering) || (!isFullscreened && !isHovering)
      ? 'in'
      : 'out';

  const path1 = useSpring({
    opacity: isHovering ? 1 : 0.7,
    transform:
      position === 'out'
        ? 'translate(-1px, -1px)'
        : 'translate(0px,0px)',
    ...springSettings,
  });
  const path2 = useSpring({
    opacity: isHovering ? 1 : 0.7,
    transform:
      position === 'out'
        ? 'translate(1px, -1px)'
        : 'translate(0px,0px)',
    ...springSettings,
  });
  const path3 = useSpring({
    opacity: isHovering ? 1 : 0.7,
    transform:
      position === 'out'
        ? 'translate(1px, 1px)'
        : 'translate(0px,0px)',
    ...springSettings,
  });
  const path4 = useSpring({
    opacity: isHovering ? 1 : 0.7,
    transform:
      position === 'out'
        ? 'translate(-1px, 1px)'
        : 'translate(0px,0px)',
    ...springSettings,
  });

  return (
    <abbr title="Toggle fullscreen">
      <Wrapper
        onClick={handleToggleFullscreen}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
        as={animated.button}
        id={isFullscreened ? 'fs-wrapper' : undefined}
      >
        <Svg viewBox="0 0 16 16" fill="none">
          <animated.path d="M2 6 L 2 2 L 6 2" style={path1} />
          <animated.path d="M10 2 L 14 2 L 14 6" style={path2} />
          <animated.path d="M14 10 L 14 14 L 10 14" style={path3} />
          <animated.path d="M6 14 L 2 14 L 2 10" style={path4} />
        </Svg>
        {/* <VisuallyHidden>Toggle fullscreen</VisuallyHidden> */}
      </Wrapper>
    </abbr>
  );
};

const Wrapper = styled(ActionButton)`
  transform-origin: center center;
`;

const Svg = styled.svg`
  width: 16px;
  height: 16px;
  stroke: currentColor;
  stroke-width: 1.5px;
  stroke-linecap: round;
  stroke-linejoin: round;
  overflow: visible;
  will-change: transform;
  backface-visibility: hidden;
`;

export default FullscreenToggleButton;
