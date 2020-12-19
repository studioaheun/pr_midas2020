import { useRef, useEffect, useCallback } from 'react';

const useScrollBtn = () => {
  const element = useRef();

  const handleScroll = useCallback(([entry]) => {
    const { current } = element;

    if(entry.isIntersecting) {
      // 원하는 이벤트를 추가 할 것
      current.style.transitionProperty = 'all';
      current.style.transitionDuration = '1.4s';
      current.style.transitionTimingFunction = 'cubic-bezier(0, 0, 0.4, 1.5)';
      current.style.transitionDelay = '1s';
      current.style.opacity = 1;
      current.style.right = '3rem';
      current.style.bottom = '3rem';
      current.style.position = 'fixed';
    }
    else {
      current.style.opacity = 0;

    }
  }, []);

  useEffect(() => {
    let observer;
    const { current } = element;

    if (current) {
      observer = new IntersectionObserver(handleScroll, { threshold: 0, });
      observer.observe(element.current);

      return () => observer && observer.disconnect();
    };
  }, [handleScroll]);

  return {
    ref: element,
  };
}

export default useScrollBtn;