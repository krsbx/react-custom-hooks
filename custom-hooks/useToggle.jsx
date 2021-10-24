import { useState } from 'react';

const useToggle = (defaultValue) => {
  const [value, setValue] = useState(defaultValue);

  const updateValue = (newValue) => {
    setValue((current) =>
      typeof newValue === 'boolean' ? newValue : !current
    );
  };

  return [value, updateValue];
};

export default useToggle;
