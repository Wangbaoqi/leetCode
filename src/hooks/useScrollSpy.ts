import { useState, useEffect, useRef } from 'react';

export function useScrollSpy(
  selectors: string[],
  options?: IntersectionObserverInit
) {
  const [activeId, setActiveId] = useState<string | null>('');
  const observer = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const elements = selectors.map((selector) =>
      document.querySelector(selector)
    );

    console.log(elements, 'elements');

    if (observer.current) observer.current.disconnect();

    observer.current = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry?.isIntersecting) {
          setActiveId(entry.target.id);
        }
      });
    }, options);

    elements.forEach((element) => {
      if (element) observer.current?.observe(element);
    });

    return () => observer.current?.disconnect();
  }, [selectors, options]);

  return activeId;
}
