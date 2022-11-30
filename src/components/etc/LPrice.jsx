import styled from 'styled-components';

export default function LPrice(props) {
  return (
    <Price marginB={props.marginB} cl={props.cl}>
      {props.value}
    </Price>
  );
}

const Price = styled.p`
  font-size: 36px;
  font-weight: 700;
  line-height: 1.251944444444444;
  color: ${(props) => props.cl};
  margin-bottom: ${(props) => props.marginB};
  @media screen and (max-width: 390px) {
    font-size: 14px;
    margin-bottom: 25px;
  }
  &::after {
    content: '원';
    font-size: 18px;
    font-weight: 400;
    line-height: 1.252222222222222;
    margin-left: 2px;
    @media screen and (max-width: 390px) {
      font-size: 10px;
    }
  }
`;
