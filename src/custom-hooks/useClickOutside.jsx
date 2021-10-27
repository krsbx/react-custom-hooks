import useEventListener from './useEventListener';

const useClickOutside = (elementRef, callbak) => {
  const handleClickOutside = (e) => {
    if (elementRef.current && !elementRef.current.contains(e.target))
      callbak(e);
  };

  useEventListener('mousedown', handleClickOutside, document);
  useEventListener('touchend', handleClickOutside, document);
};

export default useClickOutside;
