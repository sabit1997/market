import styled from 'styled-components';

export default function LDisabledButton() {
  return (
    <>
      <Button>버튼</Button>
    </>
  );
}

const Button = styled.button`
  width: 220px;
  padding: 19px 0;
  font-size: 24px;
  font-weight: 700;
  line-height: 1.25;
  color: #fff;
  background-color: #c4c4c4;
  border-radius: 5px;
`;
