import styled from 'styled-components';

export default function MWhiteButton() {
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
  background-color: #fff;
  color: #767676;
  border: 1px solid #c4c4c4;
  border-radius: 5px;
`;
