import styled from 'styled-components';

export const PageWarpper = styled.section``;

export const PageTitle = styled.h2`
  font-size: 36px;
  font-weight: 700;
  line-height: 1.222222222222222;
  margin: 54px 0 52px;
`;

export const TotalOrderPriceWarpper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 96px;
`;

export const TotalOrderPrice = styled.p`
  font-size: 18px;
  font-weight: 500;
  line-height: 1.252222222222222;
  margin-top: 5px;
  margin-right: 10px;
`;

export const TotalOrderPriceNum = styled.span`
  font-size: 24px;
  font-weight: 700;
  line-height: 1.252083333333333;
  color: #eb5757;
  &::after {
    content: '원';
  }
`;

export const ShippingInfoTxt = styled.h3`
  font-size: 24px;
  font-weight: 500;
  line-height: 1.252083333333333;
  margin-bottom: 18px;
`;

export const InfoTItle = styled.p`
  font-size: 18px;
  font-weight: 500;
  line-height: 1.252222222222222;
  margin-bottom: 8px;
  position: relative;
  &::after {
    content: '';
    width: 100%;
    height: 2px;
    background-color: #c4c4c4;
    position: absolute;
    left: 0;
    bottom: -8px;
  }
`;

export const InfoInputWarpper = styled.ul``;

export const BottomWarpper = styled.section`
  display: flex;
  justify-content: space-between;
`;

export const PaymentWay = styled.ul`
  display: flex;
  width: 760px;
  padding: 18px 0 18px 12px;
  border-top: 2px solid #c4c4c4;
  border-bottom: 2px solid #c4c4c4;
`;

export const FinalPaymentInfo = styled.div`
  width: 480px;
  border: 2px solid #21bf48;
  border-radius: 10px;
  padding: 34px 24px;
  position: relative;
  &::after {
    content: '';
    width: 100%;
    height: 182px;
    background-color: #f2f2f2;
    position: absolute;
    z-index: -1;
    bottom: 0;
    left: 0;
  }
`;

export const PriceCount = styled.ul``;

export const PriceCountItem = styled.li`
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px;
  position: relative;
  &:nth-child(3) {
    margin-bottom: 49px;
    &::after {
      content: '';
      display: block;
      width: 100%;
      height: 1px;
      background-color: #c4c4c4;
      position: absolute;
      left: 0;
      bottom: -18px;
    }
  }
  &:last-child {
    margin-bottom: 59px;
  }
`;

export const PriceItemTxt = styled.p`
  font-size: 16px;
  font-weight: 400;
  line-height: 1.251875;
  &::before {
    content: '- ';
  }
`;
