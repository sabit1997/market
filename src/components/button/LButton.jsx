import styled from 'styled-components';

export default function LButton(props) {
  return (
    <>
      <Button>{props.value}</Button>
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
  background-color: #21bf48;
  border-radius: 5px;
`;
