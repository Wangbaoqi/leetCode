import React from 'react';
import useScrollDisabler from './useScrollDisabler';


export default function useFullscreenuseFullscreen(startFullscreened) {
  const [isFullscreened, setIsFullscreened] = React.useState(
    startFullscreened
  );

  useScrollDisabler(isFullscreened);

  React.useEffect(() => {
    if (!isFullscreened) {
      return;
    }

    function handleKeydown(ev) {
      if (ev.key === 'Escape') {
        setIsFullscreened(false);
      }
    }

    window.addEventListener('keydown', handleKeydown);

    window.requestAnimationFrame(() => {
      // HACK — Probably shouldn't use an ID here.
      // Though it's safe since only 1 frame can be fullscreened
      // at once.
      const fullscreenElem = document.querySelector(`#fs-wrapper`);

      // @ts-ignore
      fullscreenElem?.focus();
    });

    return () => {
      window.removeEventListener('keydown', handleKeydown);
    };
  }, [isFullscreened]);

  // When fullscreening the code editor, we want to hide/show
  // the mobile/tablet menu button

  return [isFullscreened, () => setIsFullscreened((f) => !f)];
}
