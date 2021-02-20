import * as React from 'react';
import {useLayoutEffect, useState} from 'react';

export function useWindowSize() {
  const [size, setSize] = useState([0, 0]);
  const timeoutRef = React.useRef(null);
  useLayoutEffect(() => {
    function updateSize() {
      if(timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      timeoutRef.current = setTimeout(() => {
        setSize([window.innerWidth, window.innerHeight]);
      }, 200);
    }
    window.addEventListener('resize', updateSize);
    updateSize();
    return () => {
      clearTimeout(timeoutRef.current);
      window.removeEventListener('resize', updateSize);
    };
  }, []);
  return size;
}
