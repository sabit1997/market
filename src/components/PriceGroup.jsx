import styled from 'styled-components';

export default function PriceGroup(props) {
  return (
    <Warpper>
      <TotalTxt>{props.value}</TotalTxt>
      <TotalPrice>46,500</TotalPrice>
    </Warpper>
  );
}

const Warpper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

const TotalTxt = styled.p`
  font-size: 16px;
  font-weight: 400;
  line-height: 1.251875;
  margin-bottom: 12px;
`;

const TotalPrice = styled.p`
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
