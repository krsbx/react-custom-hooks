import { useEffect, useRef } from 'react';

const useEventListener = (types, callback, element = window) => {
  const callbackRef = useRef(callback);

  useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  useEffect(() => {
    const handler = (e) => callbackRef.current(e);

    if (!element) return;

    element.addEventListener(types, handler);

    return () => {
      element.removeEventListener(types, handler);
    };
  }, [types, element]);
};

export default useEventListener;
