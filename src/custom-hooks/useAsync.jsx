import { useCallback, useRef, useEffect, useState } from 'react';

const useAsync = (callback) => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState();
  const [value, setValue] = useState();

  const callbackRef = useRef(callback);

  const callbackMemoization = useCallback(() => {
    setIsLoading(true);
    setError(undefined);
    setValue(undefined);
    if (callbackRef) {
      callbackRef
        .current()
        .then(setValue)
        .catch(setError)
        .finally(() => setIsLoading(false));
    } else {
      setIsLoading(false);
    }
  }, [callbackRef]);

  useEffect(() => {
    callbackMemoization();
  }, [callbackMemoization]);

  useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  return { isLoading, value, error };
};

export default useAsync;
