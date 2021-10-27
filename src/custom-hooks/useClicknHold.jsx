import { useEffect } from 'react';
import useTimeout from './useTimeout';
import useEventListener from './useEventListener';

const useClicknHold = (elementRef, callback, delay = 0.25) => {
  const { clear, reset } = useTimeout(callback, delay);

  useEffect(clear, []);

  useEventListener('mousedown', reset, elementRef.current);
  useEventListener('touchstart', reset, elementRef.current);

  useEventListener('mouseup', clear, elementRef.current);
  useEventListener('mouseleave', clear, elementRef.current);
  useEventListener('touchend', clear, elementRef.current);
};

export default useClicknHold;
