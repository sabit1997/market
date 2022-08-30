import styled from 'styled-components';

export default function SButton(props) {
  return (
    <>
      <Button>{props.value}</Button>
    </>
  );
}

const Button = styled.button`
  width: 80px;
  height: 40px;
  border-radius: 5px;
  background-color: #21bf48;
  color: #fff;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.251875;
`;
