import React from 'react';
import styled from 'styled-components';
import { animated, useSpring } from 'react-spring';
import { SkipBack } from 'react-feather';

import { SPRINGS } from '@constants';
import usePrefersReducedMotion from '@hooks/use-prefers-reduced-motion.hook';
import useInterval from '@hooks/use-interval.hook';
import { normalize, roundToNearest } from '@utils';

import VisuallyHidden from '@components/VisuallyHidden';
import Tooltip from '@components/Tooltip';
import ProgressBar from '@components/ProgressBar';

import ActionButton from './ActionButton';

const resetAfter = 1000;

const ResetButton = ({ handleReset }) => {
  const [showTooltip, setShowTooltip] = React.useState(false);
  const [isHovering, setIsHovering] = React.useState(false);
  const [isRunning, setIsRunning] = React.useState(false);
  const [progress, setProgress] = React.useState(false);
  const [opacity, setOpacity] = React.useState(0.7);

  const mouseDownAt = React.useRef(null);

  React.useEffect(() => {
    if (!isRunning) {
      setProgress(null);
      setOpacity(0.7);
    }
  }, [isRunning]);

  function handleMouseDown() {
    mouseDownAt.current = Date.now();
    setIsRunning(true);
    setShowTooltip(false);
  }

  function handleMouseUp() {
    setIsRunning(false);

    const delta = Date.now() - mouseDownAt.current;
    if (delta < 400) {
      setShowTooltip(true);
    }
  }

  useInterval(
    () => {
      const delta = Date.now() - mouseDownAt.current;

      if (delta > resetAfter) {
        handleReset();
        setIsRunning(false);
        return;
      }

      const progress = normalize(delta, 0, resetAfter, 0, 100);

      setProgress(progress);
      setOpacity(normalize(delta, 0, resetAfter, 0.7, 1));
    },
    isRunning ? 20 : null
  );

  const prefersReducedMotion = usePrefersReducedMotion();

  const style = useSpring({
    transform: isHovering ? 'scale(1.2)' : 'scale(1)',
    opacity,
    config: SPRINGS.springy,
    immediate: prefersReducedMotion,
  });

  return (
    <abbr title="Reset code">
      <Tooltip
        placement="top"
        content="Click and hold to reset code to the initial version"
        when={showTooltip}
        followCursor={false}
      >
        <Wrapper>
          <ActionButton
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onMouseEnter={() => {
              setIsHovering(true);
            }}
            onMouseLeave={() => {
              setShowTooltip(false);
              setIsHovering(false);
            }}
            onKeyDown={(ev) => {
              if (ev.key === 'Enter') {
                handleReset();
              }
            }}
            as={animated.button}
            style={style}
          >
            <SkipBack size={16} />
            <VisuallyHidden>Reset code</VisuallyHidden>
          </ActionButton>
          <ProgressWrapper>
            <MiniProgressBar
              value={progress}
              // It appears to end prematurely if it tracks
              // progress exactly. Leave it full for the final
              // 10%.
              max={100 * 0.9}
              animated={false}
              height={4}
              colorTheme="primary"
              background="transparent"
              style={{ opacity: progress > 0 ? 1 : 0 }}
            />
          </ProgressWrapper>
        </Wrapper>
      </Tooltip>
    </abbr>
  );
};

const Wrapper = styled.div`
  position: relative;
`;

const ProgressWrapper = styled.div`
  position: absolute;
  top: -6px;
  left: 10%;
  width: 80%;
`;

const MiniProgressBar = styled(ProgressBar)`
  transition: opacity 500ms;
`;

export default ResetButton;
