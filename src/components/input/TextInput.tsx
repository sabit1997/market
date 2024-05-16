import React from 'react';
import styled from 'styled-components';

function TextInput({
  type,
  placeholder,
  marginB,
  name,
  value,
  onChange,
  textInput,
}) {
  return (
    <>
      <IdInput
        type={type}
        placeholder={placeholder}
        marginB={marginB}
        name={name}
        value={value}
        onChange={onChange}
        ref={textInput}
      />
    </>
  );
}

const IdInput = styled.input<{ marginB: string }>`
  width: 100%;
  max-width: 480px;
  padding: 20px 0;
  border-bottom: 1px solid #c4c4c4;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.25;
  @media ${(props) => props.theme.mobile} {
    width: 100%;
    font-size: 12px;
    padding: 15px 0;
  }
  margin-bottom: ${(props) => props.marginB};
  &::placeholder {
    color: #767676;
  }
`;

export default TextInput;
