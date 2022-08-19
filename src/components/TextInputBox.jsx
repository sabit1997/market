import styled from 'styled-components';

function TextInputBox() {
  return (
    <>
      <Txt for="pw_input">비밀번호</Txt>
      <PwInput
        type="password"
        placeholder="text"
        id="pw_input"
        name="pw_input"
      />
    </>
  );
}

const Txt = styled.label`
  font-size: 16px;
  font-weight: 400;
  line-height: 1.25;
  color: #767676;
  margin-bottom: 10px;
  display: block;
`;
const PwInput = styled.input`
  width: 480px;
  padding: 17px 0 17px 16px;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.25;
  border-radius: 5px;
  border: 1px solid #c4c4c4;
  &::placeholder {
    color: #000;
  }
`;

export default TextInputBox;
