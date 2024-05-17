import { useState, useCallback } from 'react';

interface UseInputsProps {
  [key: string]: string;
}

export default function useInputs(initalForm: UseInputsProps) {
  const [inputs, setInputs] = useState(initalForm);

  const onChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const { value, name } = e.target;
      setInputs({
        ...inputs,
        [name]: value,
      });
    },
    [inputs]
  );

  const handleInputs = useCallback((value: UseInputsProps) => {
    setInputs(value);
  }, []);

  return [inputs, onChange, handleInputs];
}
