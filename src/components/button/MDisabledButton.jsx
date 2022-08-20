import styled from 'styled-components';

export default function MDisabledButton() {
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
  background-color: #c4c4c4;
  color: #fff;
  border-radius: 5px;
`;
