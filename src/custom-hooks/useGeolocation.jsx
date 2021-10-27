import { useEffect, useState } from 'react';

const useGeolocation = (options) => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState();
  const [data, setData] = useState({});

  const successHandler = (e) => {
    setIsLoading(false);
    setError(null);
    setData(e.coords);
  };

  const errorHandler = (e) => {
    setIsLoading(false);
    setError(e);
  };

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      successHandler,
      errorHandler,
      options
    );

    const id = navigator.geolocation.watchPosition(
      successHandler,
      errorHandler,
      options
    );

    return () => {
      navigator.geolocation.clearWatch(id);
    };
  }, [options]);

  return {
    isLoading,
    error,
    data,
  };
};

export default useGeolocation;
