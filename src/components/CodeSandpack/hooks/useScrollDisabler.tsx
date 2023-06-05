import React from 'react';

export default function useScrollDisabler(disabled) {
  React.useEffect(() => {
    if (!disabled) {
      return;
    }

    const oldOverflow = document.body.style.overflow;
    const oldPosition = document.body.style.position;
    const oldWidth = document.body.style.width;
    const oldHeight = document.body.style.height;
    const oldTop = document.body.style.top;

    const oldScrollY = window.scrollY;
    const oldScrollBehavior =
      document.documentElement.style.scrollBehavior;

    document.body.style.overflow = 'hidden';
    document.body.style.position = 'fixed';
    document.body.style.width = '100%';
    document.body.style.height = `calc(100% + ${oldScrollY}px)`;
    document.body.style.top = `-${oldScrollY}px`;

    return () => {
      document.body.style.overflow = oldOverflow;
      document.body.style.position = oldPosition;
      document.body.style.width = oldWidth;
      document.body.style.height = oldHeight;
      document.body.style.top = oldTop;

      document.documentElement.style.scrollBehavior = 'auto';

      window.scrollTo({
        top: oldScrollY,
        left: 0,
        // Frustratingly, "behavior: auto" doesn't seem to work,
        // and so I have to do all this other work, changing the
        // behavior on the <html> tag and resetting it after 100ms.
        behavior: 'auto',
      });

      window.setTimeout(() => {
        document.documentElement.style.scrollBehavior = oldScrollBehavior;
      }, 100);
    };
  }, [disabled]);
}
