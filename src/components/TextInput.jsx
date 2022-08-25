import styled from 'styled-components';

function TextInput(props) {
  return (
    <>
      <IdInput
        type={props.type}
        placeholder={props.placeholder}
        marginB={props.marginB}
      />
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
  margin-bottom: ${(props) => props.marginB};
  &::placeholder {
    color: #767676;
  }
`;

export default TextInput;
