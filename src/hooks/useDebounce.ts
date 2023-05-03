import { useEffect, useState } from 'react';

const useDebounce = (value: string, delayTime: number): string => {
  const [debouncedValue, setDebouncedValue] = useState<string>(value);
  useEffect(() => {
    const timerId = setTimeout(() => {
      setDebouncedValue(value);
    }, delayTime);

    return () => {
      clearTimeout(timerId);
    };
  }, [value, delayTime]);
  return debouncedValue;
};

export default useDebounce;
