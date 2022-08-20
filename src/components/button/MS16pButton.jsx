import styled from 'styled-components';

export default function MS16pButton() {
  return (
    <>
      <Button>버튼</Button>
    </>
  );
}

const Button = styled.button`
  width: 166px;
  height: 55px;
  border-radius: 5px;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.251875;
  background-color: #21bf48;
  color: #fff;
`;
