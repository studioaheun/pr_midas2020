import { useRef, useEffect, useCallback } from 'react';

const useScrollArrrow = () => {
  const element = useRef();

  const handleScroll = useCallback(([entry]) => {
    const { current } = element;

    if(entry.isIntersecting) {
      // 원하는 이벤트를 추가 할 것
      current.style.transitionProperty = 'all';
      current.style.transitionDuration = '3s';
      current.style.transitionTimingFunction = 'cubic-bezier(0, 0, 0.4, 2)';
      current.style.transitionDelay = '1s';
      current.style.opacity = 1;
      current.style.right = '3rem';
      current.style.bottom = '3rem';

    }
  }, []);

  useEffect(() => {
    let observer;
    const { current } = element;

    if (current) {
      observer = new IntersectionObserver(handleScroll, { threshold: 0.1, rootMargin: '-100px 0px 0px 0px' });
      observer.observe(element.current);

      return () => observer && observer.disconnect();
    };
  }, [handleScroll]);

  return {
    ref: element,
    style: {opacity:0, }
  };
}

export default useScrollArrrow;