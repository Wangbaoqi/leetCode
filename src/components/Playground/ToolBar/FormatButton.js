import React from 'react';
import styled from 'styled-components';
import { animated, useSpring } from 'react-spring';
import { Zap } from 'react-feather';

import { SPRINGS } from '@constants';
import usePrefersReducedMotion from '@hooks/use-prefers-reduced-motion.hook';

import VisuallyHidden from '@components/VisuallyHidden';

import ActionButton from './ActionButton';

const FormatButton = ({ handleFormat }) => {
  const [isHovering, setIsHovering] = React.useState(false);

  const prefersReducedMotion = usePrefersReducedMotion();

  const springConfig = SPRINGS.springy;

  const style = useSpring({
    transform: isHovering ? 'scaleY(1.2)' : 'scaleY(1)',
    opacity: isHovering ? 1 : 0.7,
    config: springConfig,
    immediate: prefersReducedMotion,
  });

  return (
    <abbr title="Format code using Prettier">
      <Wrapper
        onClick={handleFormat}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
        as={animated.button}
        style={style}
      >
        <Zap size={16} />
        <VisuallyHidden>Format code using Prettier</VisuallyHidden>
      </Wrapper>
    </abbr>
  );
};

const Wrapper = styled(ActionButton)`
  transform-origin: center center;
`;

export default FormatButton;
