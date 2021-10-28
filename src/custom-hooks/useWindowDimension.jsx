import { useState } from 'react';
import useEventListener from './useEventListener';

const getWindowDimension = () => {
  const { innerWidth: width, innerHeight: height } = window;

  return {
    width,
    height,
  };
};

const useWindowDimension = () => {
  const [value, setValue] = useState(getWindowDimension);

  useEventListener('resize', () => {
    setValue(getWindowDimension);
  });

  return value;
};

export default useWindowDimension;
