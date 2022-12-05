import styled from 'styled-components';

export default function SPrice(props) {
  return <PriceTxt>{props.value}</PriceTxt>;
}

const PriceTxt = styled.p`
  font-size: 18px;
  font-weight: 700;
  line-height: 1.252222222222222;
  &::after {
    content: '원';
    font-size: 14px;
    font-weight: 400;
    line-height: 1.252142857142857;
    margin-left: 4px;
  }
  @media ${(props) => props.theme.mobile} {
    font-size: 14px;
  }
`;
