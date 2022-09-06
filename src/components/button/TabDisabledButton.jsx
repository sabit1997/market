import styled from 'styled-components';

export default function TabDisabledButton(props) {
  return (
    <>
      <Button>{props.value}</Button>
    </>
  );
}

const Button = styled.button`
  width: 320px;
  height: 60px;
  background-color: #fff;
  color: #767676;
  position: relative;
  font-size: 18px;
  font-weight: 700;
  line-height: 1.252222222222222;
  &:after {
    content: '';
    width: 100%;
    height: 6px;
    background-color: #e0e0e0;
    position: absolute;
    bottom: 0;
    left: 0;
  }
`;
