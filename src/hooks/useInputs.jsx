import { useState, useCallback } from 'react';

export default function useInputs(initalForm) {
  const [inputs, setInputs] = useState(initalForm);

  const onChange = useCallback(
    (e) => {
      const { value, name } = e.target;
      setInputs({
        ...inputs,
        [name]: value,
      });
    },
    [inputs]
  );

  const handleInputs = useCallback((value) => {
    setInputs(value);
  }, []);

  return [inputs, onChange, handleInputs];
}
