import { useRef, useEffect, useCallback } from 'react';

const useScrollFadeInLoop = (direction = 'up', duration = 1, delay = 3000) => {
  const element = useRef();

  const handleDirection = (name) => {
    switch (name) {
      case 'up':
        return 'translate3d(0, 5%, 0)';
      case 'down':
        return 'translate3d(0, -5%, 0)';
      case 'left':
        return 'translate3d(35%, 0, 0)';
      case 'right':
        return 'translate3d(-35%, 0, 0)';
      default:
        return;
    }
  };

  const onScroll = useCallback(
    ([entry]) => {
      const { current } = element;
      if (entry.isIntersecting) {
        current.style.transitionProperty = 'all';
        current.style.transitionDuration = `${duration}s`;
        current.style.transitionTimingFunction = 'cubic-bezier(0, 0, 0.4, 1)';
        current.style.transitionDelay = `${delay}s`;
        current.style.opacity = 1;
        current.style.transform = 'translate3d(0, 0, 0)';
      }
      else {
        current.style.opacity = 0;
        current.style.transitionProperty = 'all';
        current.style.transitionDuration = `0s`;
        current.style.transitionDelay = `0s`;
        current.style.transform = 'translate3d(0, 0, 0)';

      }
    },
    [delay, duration],
  );

  useEffect(() => {
    let observer;

    if (element.current) {
      observer = new IntersectionObserver(onScroll, { threshold: 0.2 });
      observer.observe(element.current);
    }

    return () => observer && observer.disconnect();
  }, [onScroll]);

  return {
    ref: element,
    style: { opacity: 0, transform: handleDirection(direction) },
  };
};

export default useScrollFadeInLoop;