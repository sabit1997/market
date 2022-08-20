import styled from 'styled-components';

export default function SWhiteButton() {
  return (
    <>
      <Button>버튼</Button>
    </>
  );
}

const Button = styled.button`
  width: 80px;
  height: 40px;
  border: 1px solid c4c4c4;
  border-radius: 5px;
  background-color: #fff;
  color: #767676;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.251875;
  &:hover {
    border: 1px solid #767676;
    color: #000;
  }
`;
