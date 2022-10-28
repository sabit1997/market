import styled from 'styled-components';
import plus from '../../assets/icon-plus-line.svg';
import minus from '../../assets/icon-minus-line.svg';

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
  position: relative;
  &::after {
    content: '';
    width: ${(props) =>
      props.value === '상품 할인'
        ? '34px'
        : props.value === '총 상품금액'
        ? '34px'
        : '0'};
    height: 34px;
    border-radius: 50%;
    background-color: #fff;
    background-image: ${(props) =>
      props.value === '총 상품금액'
        ? `url(${minus})`
        : props.value === '상품 할인'
        ? `url(${plus})`
        : null};
    background-repeat: no-repeat;
    background-size: 18.89px;
    background-position: center;
    position: absolute;
    right: -104px;
    top: 50%;
    transform: translateY(-50%);
  }
`;

const TotalTxt = styled.p`
  font-size: 16px;
  font-weight: ${(props) => (props.value === '결제 예정 금액' ? '700' : '400')};
  line-height: 1.251875;
  margin-bottom: ${(props) =>
    props.value === '결제 예정 금액' ? '5px' : '12px'};
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
  }
`;
