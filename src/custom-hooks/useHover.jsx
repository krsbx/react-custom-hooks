import { useState } from 'react';
import useEventListener from './useEventListener';

const useHover = (elementRef) => {
  const [onHover, setOnHover] = useState(false);

  useEventListener(
    'mouseover',
    () => {
      setOnHover(true);
    },
    elementRef.current
  );

  useEventListener(
    'mouseout',
    () => {
      setOnHover(false);
    },
    elementRef.current
  );

  return onHover;
};

export default useHover;
