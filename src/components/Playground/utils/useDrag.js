import React, {
  useState,
  useEffect,
  useCallback,
  RefObject,
} from 'react';
import { throttle } from '../../../utils';

/**
 * NOTE: This implementation is hacky AF. It generates hard numbers,
 * but then uses them as percentages.
 */

interface IProps {
  rulerRef: RefObject<HTMLDivElement | null>;
  containerRef: RefObject<HTMLDivElement | null>;
  dividerRef: RefObject<HTMLDivElement | null>;
  dividerWidth: number;
  defaultRatio: number;
}

function useDrag({
  rulerRef,
  containerRef,
  dividerRef,
  dividerWidth,
  defaultRatio,
}: IProps) {
  const [width, setWidth] = useState(782 * defaultRatio);
  const [containerRect, setContainerRect] = useState<DOMRect | null>(
    null
  );

  useEffect(() => {
    const containerEl = rulerRef.current;

    const update = () => {
      if (containerEl) {
        const fullWidth = containerEl.clientWidth;
        const containerRect = containerEl.getBoundingClientRect();

        setContainerRect(containerRect);
        setWidth(fullWidth * defaultRatio - dividerWidth);
      }
    };

    update();

    const handleResize = throttle(update, 100);

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const keepDragging = useCallback(
    (event: MouseEvent) => {
      const { clientX } = event;
      if (containerRect) {
        setWidth(clientX - containerRect.left);
      }
    },
    [containerRect]
  );

  const stopDrag = useCallback(() => {
    document.removeEventListener('mousemove', keepDragging);
    document.removeEventListener('mouseup', stopDrag);
    containerRef.current.style.pointerEvents = '';
  }, [keepDragging]);

  const startDrag = useCallback(() => {
    document.addEventListener('mousemove', keepDragging);
    document.addEventListener('mouseup', stopDrag);
    containerRef.current.style.pointerEvents = 'none';
  }, [keepDragging, stopDrag]);

  useEffect(() => {
    const dividerEl = dividerRef.current;

    function reset() {
      if (containerRect) {
        setWidth(containerRect.width * defaultRatio - dividerWidth);
      }
    }

    function handleKeypress(ev) {
      if (ev.key === 'ArrowLeft') {
        setWidth((width) => width - 20);
      } else if (ev.key === 'ArrowRight') {
        setWidth((width) => width + 20);
      }
    }

    if (dividerEl) {
      dividerEl.addEventListener('mousedown', startDrag);
      dividerEl.addEventListener('dblclick', reset);
      dividerEl.addEventListener('keydown', handleKeypress);
    }

    return () => {
      if (dividerEl) {
        dividerEl.removeEventListener('mousedown', startDrag);
        dividerEl.removeEventListener('dblclick', reset);
        dividerEl.removeEventListener('keydown', handleKeypress);
      }
    };
  }, [startDrag]);

  const maxWidth = containerRect
    ? containerRect.width - dividerWidth
    : 782;

  // Don't allow the user to stretch the playground wider than
  // the container.

  const leftWidth = Math.min(width, maxWidth);
  const rightWidth = maxWidth - leftWidth;

  return {
    leftWidth,
    rightWidth,
  };
}

export default useDrag;
