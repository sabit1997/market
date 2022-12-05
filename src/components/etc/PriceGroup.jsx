import styled from 'styled-components';

export default function PriceGroup({ value, price }) {
  return (
    <Warpper value={value}>
      <TotalTxt value={value}>{value}</TotalTxt>
      <TotalPrice value={value}>{price}</TotalPrice>
    </Warpper>
  );
}

const Warpper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

const TotalTxt = styled.p`
  font-size: 16px;
  font-weight: ${(props) => (props.value === '결제 예정 금액' ? '700' : '400')};
  line-height: 1.251875;
  margin-bottom: ${(props) =>
    props.value === '결제 예정 금액' ? '5px' : '12px'};
  @media ${(props) => props.theme.mobile} {
    font-size: 12px;
  }
`;

const TotalPrice = styled.p`
  font-size: ${(props) => (props.value === '결제 예정 금액' ? '36px' : '24px')};
  font-weight: 700;
  line-height: ${(props) =>
    props.value === '결제 예정 금액'
      ? '1.251944444444444'
      : '1.252083333333333'};
  color: ${(props) => (props.value === '결제 예정 금액' ? '#EB5757' : '#000')};
  &::after {
    content: '원';
    font-size: ${(props) =>
      props.value === '결제 예정 금액' ? '18px' : '16px'};
    font-weight: 400;
    line-height: ${(props) =>
      props.value === '결제 예정 금액' ? '1.252222222222222' : '1.251875'};
    margin-left: 2px;
    @media ${(props) => props.theme.mobile} {
      font-size: 14px;
    }
  }
  @media ${(props) => props.theme.mobile} {
    font-size: 14px;
  }
`;
