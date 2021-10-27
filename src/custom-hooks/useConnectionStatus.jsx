import { useState } from 'react';
import useEventListener from './useEventListener';

const useConnectionStatus = () => {
  const currentStatus = () => navigator.onLine;

  const [isOnline, setIsOnline] = useState(currentStatus);

  useEventListener('online', () => setIsOnline(currentStatus));
  useEventListener('offline', () => setIsOnline(currentStatus));

  return isOnline;
};

export default useConnectionStatus;
