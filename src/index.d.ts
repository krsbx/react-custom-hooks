interface geoLocationInterface {
  maximumAge: number;
  timeout: number;
  enableHighAccuracy: boolean;
}

interface useAsyncInterface {
  isLoading: boolean;
  value: any;
  error: any;
}

interface useTimeoutInterface {
  reset: () => void;
  clear: () => void;
}

interface useWindowDimensionInterface {
  width: number;
  height: number;
}

declare function useAsync(callback: () => void): useAsyncInterface;
declare function useClicknHold(
  elementRef: any,
  callback: () => void,
  delay?: number
): void;
declare function useClickOutside(elementRef: any, callback: () => void): void;
declare function useConnectionStatus(): boolean;
declare function useDebounce(
  callback: () => void,
  delay: number,
  dependencies: any[]
): void;
declare function useDragnDrop(elementRef: any, callback: () => void): boolean;
declare function useEventListener(
  type: string,
  callback: (e: any) => void,
  elementRef?: any
): void;
declare function useGeolocation(options: geoLocationInterface): void;
declare function useHover(elementRef: any): boolean;
declare function useMediaQuery(mediaQuery: string): boolean;
declare function useScript(url: string, element?: any): useAsyncInterface;
declare function useLocalStorage(
  key: string
): [any, (newValue?: any) => void, () => void];
declare function useSessionStorage(
  key: string
): [any, (newValue?: any) => void, () => void];
declare function useTimeout(
  callback: () => void,
  delay: number
): useTimeoutInterface;
declare function useToggle(
  defaultValue: boolean
): [boolean, (newValue?: boolean) => void];
declare function useWindowDimension(): useWindowDimensionInterface;

export {
  useAsync,
  useClicknHold,
  useClickOutside,
  useConnectionStatus,
  useDebounce,
  useDragnDrop,
  useEventListener,
  useGeolocation,
  useHover,
  useMediaQuery,
  useLocalStorage,
  useScript,
  useSessionStorage,
  useTimeout,
  useToggle,
  useWindowDimension,
};
