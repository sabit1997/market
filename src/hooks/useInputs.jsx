import { useState } from 'react';

export default function useInputs(initalForm) {
  const [inputs, setInputs] = useState(initalForm);

  function onChange(e) {
    const { value, name } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  }

  function handleInputs(value) {
    setInputs(value);
  }
  return [inputs, onChange, handleInputs];
}
