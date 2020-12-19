import { useRef, useEffect, useCallback } from 'react';

const useScrollBgLoop = () => {
  const element = useRef();

  const handleScroll = useCallback(([entry]) => {
    const { current } = element;

    if(entry.isIntersecting) {
      // 원하는 이벤트를 추가 할 것
      current.style.transitionProperty = 'all';
      current.style.transitionDuration = '1.6s';
      current.style.transitionTimingFunction = 'cubic-bezier(0, 0, 0.4, 1.5)';
      current.style.transitionDelay = '2s';
      current.style.opacity = 1;
      current.style.backgroundColor = 'white';
    }
    else {
      current.style.backgroundColor = 'black';
      current.style.transitionDuration = '0.5s';    
      current.style.transitionDelay = '0.2s';

    }
  }, []);

  useEffect(() => {
    let observer;
    const { current } = element;

    if (current) {
      observer = new IntersectionObserver(handleScroll, { threshold: 0.5,});
      observer.observe(element.current);

      return () => observer && observer.disconnect();
    };
  }, [handleScroll]);

  return {
    ref: element,
  };
}

export default useScrollBgLoop;