import { useState, useEffect } from 'react';
import useEventListener from './useEventListener';

const useMediaQuery = (mediaQuery) => {
  const [isMatch, setIsMatch] = useState(false);
  const [mediaQueryList, setMediaQueryList] = useState(null);

  useEffect(() => {
    const mediaList = window.matchMedia(mediaQuery);
    setMediaQueryList(mediaList);
    setIsMatch(mediaList.matches);
  }, [mediaQuery]);

  useEventListener(
    'change',
    (e) => {
      setIsMatch(e.matches);
    },
    mediaQueryList
  );

  return isMatch;
};

export default useMediaQuery;
