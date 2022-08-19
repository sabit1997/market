import styled from 'styled-components';

function TextInput() {
  return (
    <>
      <IdInput type="text" placeholder="아이디" />
    </>
  );
}

const IdInput = styled.input`
  width: 480px;
  padding: 20px 0;
  border-bottom: 1px solid #c4c4c4;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.25;
  &::placeholder {
    color: #767676;
  }
`;

export default TextInput;
