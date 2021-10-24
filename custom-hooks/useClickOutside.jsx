import useEventListener from './useEventListener';

const useClickOutside = (elementRef, callbak) => {
  useEventListener(
    'mousedown',
    (e) => {
      if (elementRef.current && !elementRef.current.contains(e.target))
        callbak(e);
    },
    document
  );
};

export default useClickOutside;
