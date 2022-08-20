import styled from 'styled-components';

export default function MButton() {
  return (
    <>
      <Button>버튼</Button>
    </>
  );
}

const Button = styled.button`
  width: 480px;
  height: 60px;
  font-size: 18px;
  font-weight: 700;
  line-height: 1.22;
  background-color: #21bf48;
  color: #fff;
  border-radius: 5px;
`;
