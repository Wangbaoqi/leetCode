import React from 'react';
import styled from 'styled-components';
import { useSpring, animated } from 'react-spring';

import { SPRINGS } from '@site/src/utils/constants';
import { range } from '@site/src/utils';

const GRADIENTS = {
  primary: 'var(--color-primary)',
  warm:
    'linear-gradient(90deg, hsl(333deg, 100%, 55%), hsl(289deg, 100%, 45%), hsl(245deg, 100%, 60%))',
  cool:
    'linear-gradient(90deg, hsl(50deg, 95%, 60%), hsl(140deg, 100%, 60%), hsl(200deg, 100%, 60%))',
};

const ProgressBar = ({
  value,
  max,
  height = 8,
  colorTheme = 'warm',
  background = 'var(--color-gray-200)',
  includeNotches,
  animated = true,
  ...delegated
}) => {
  const barColor = GRADIENTS[colorTheme];

  const clipPathPercentage = (value / max) * 100 + '%';
  const style = useSpring({
    background: barColor,
    clipPath: `polygon(
      0% 0%,
      ${clipPathPercentage} 0%,
      ${clipPathPercentage} 100%,
      0% 100%
    )`,
    config: SPRINGS.molasses,
    immediate: !animated,
  });

  return (
    <OuterWrapper {...delegated}>
      <Wrapper
        role="progressbar"
        aria-valuenow={value}
        aria-valuemin={0}
        aria-valuemax={max}
        style={{ height, background }}
      >
        <Bar style={style} />
      </Wrapper>

      {includeNotches && (
        <>
          <Notches>
            {range(max + 1).map((i) => (
              <Notch key={i} />
            ))}
          </Notches>
        </>
      )}
    </OuterWrapper>
  );
};

const OuterWrapper = styled.div`
  position: relative;
  width: 100%;
`;

const Wrapper = styled.div`
  width: 100%;
  border-radius: 10000px;
  overflow: hidden;
`;

const Bar = styled(animated.div)`
  width: 100%;
  height: 100%;
  will-change: transform;
`;

const Notches = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  bottom: -4px;
  transform: translateY(100%);
  display: flex;
  justify-content: space-between;
`;

const Notch = styled.div`
  height: 5px;
  width: 1px;
  background-color: var(--color-gray-300);
  border-radius: 2px;

  &:first-of-type,
  &:last-of-type {
    opacity: 0;
  }
`;

export default ProgressBar;
