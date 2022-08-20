import styled from 'styled-components';

export default function TabActiveButton() {
  return (
    <>
      <Button>버튼</Button>
    </>
  );
}

const Button = styled.button`
  width: 320px;
  height: 60px;
  background-color: #fff;
  color: #21bf48;
  position: relative;
  font-size: 18px;
  font-weight: 700;
  line-height: 1.252222222222222;
  &:after {
    content: '';
    width: 100%;
    height: 6px;
    background-color: #21bf48;
    position: absolute;
    bottom: 0;
    left: 0;
  }
`;
