import styled from 'styled-components';

export default function MPrice() {
  return <PriceTxt>29,000</PriceTxt>;
}

const PriceTxt = styled.p`
  font-size: 24px;
  font-weight: 700;
  line-height: 1.252083333333333;
  &::after {
    content: '원';
    font-size: 16px;
    font-weight: 400;
    line-height: 1.251875;
    margin-left: 2px;
  }
`;
