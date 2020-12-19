import { useRef, useEffect, useCallback } from 'react';

const useScrollCount = (end, start = 0, duration = 2000, delay = 0) => {
  const element = useRef();

  const stepTime = Math.abs(Math.floor(duration / (end - start)));

  const onScroll = useCallback(
    ([entry]) => {
      const { current } = element;

      if (entry.isIntersecting) {
        let currentNumber = start;
        const counter = setInterval(() => {
          currentNumber += 1;

          current.innerHTML = currentNumber;
          if (currentNumber === end) {
            clearInterval(counter);
          }
        }, stepTime);
      }
    },[],);

  useEffect(() => {
    let observer;
    const { current } = element;

    if (current) {
      observer = new IntersectionObserver(onScroll, { threshold: 0 ,rootMargin:'200px 0px 200px 0px'});
      observer.observe(element.current);
    }

    return () => observer && observer.disconnect();
  }, [onScroll]);

  return {
    ref: element,
  };
};

export default useScrollCount;