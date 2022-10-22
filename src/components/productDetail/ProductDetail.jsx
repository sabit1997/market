import styled from 'styled-components';

export const ProductWarpper = styled.section`
  width: 1920px;
  display: flex;
  justify-content: center;
  margin-top: 80px;
  margin-bottom: 140px;
`;

export const ProductImg = styled.img`
  width: 600px;
  height: 600px;
  margin-right: 50px;
`;

export const ProductInfo = styled.section``;

export const Seller = styled.p`
  font-size: 18px;
  font-weight: 400;
  line-height: 1.252222222222222;
  color: #767676;
  margin-bottom: 16px;
`;

export const ProductName = styled.p`
  font-size: 36px;
  font-weight: 400;
  line-height: 1.251944444444444;
  margin-bottom: 20px;
`;

export const Shipping = styled.span`
  font-size: 16px;
  font-weight: 400;
  line-height: 1.251875;
  color: #767676;
  position: relative;
  &::after {
    content: '';
    width: 630px;
    height: 2px;
    background-color: #c4c4c4;
    position: absolute;
    bottom: -20px;
    left: 0;
  }
`;

export const PriceWarpper = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin-bottom: 30px;
  position: relative;
  &::before {
    content: '';
    width: 630px;
    height: 2px;
    background-color: #c4c4c4;
    position: absolute;
    left: 0;
    top: 30px;
  }
`;

export const TotalPriceTxt = styled.p`
  font-size: 18px;
  font-weight: 500;
  line-height: 1.252222222222222;
  margin-top: 78px;
`;

export const RightWarpper = styled.div`
  display: flex;
  align-items: baseline;
`;

export const TotalQuantity = styled.p`
  font-size: 18px;
  font-weight: 400;
  line-height: 1.252222222222222;
  margin-right: 28px;
  position: relative;
  &::after {
    content: '|';
    font-size: 18px;
    font-weight: 400;
    line-height: 1.252222222222222;
    color: #c4c4c4;
    position: absolute;
    right: -14px;
  }
`;

export const TotalQuantityNum = styled.span`
  font-size: 18px;
  font-weight: 400;
  line-height: 1.252222222222222;
  color: #21bf48;
`;

export const ButtonWarpper = styled.div`
  width: 1920px;
  display: flex;
  justify-content: center;
  padding-bottom: 359px;
`;
