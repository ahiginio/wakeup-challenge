import React from 'react';

export default function useDebounce(value: string, delay = 500) {
  const [debouncedValue, setDebouncedValue] = React.useState(value);
  React.useEffect(() => {
    const timeoutId = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);
    return () => clearTimeout(timeoutId);
  }, [value, delay]);
  return debouncedValue;
}
