import styled from 'styled-components';

export const ProductWarpper = styled.section`
  width: fit-content;
  max-width: 1920px;
  display: flex;
  justify-content: center;
  margin-top: 80px;
  margin-bottom: 140px;
  @media ${(props) => props.theme.tablet} {
    flex-direction: column;
    align-items: center;
  }
  @media ${(props) => props.theme.mobile} {
    flex-direction: column;
    align-items: center;
    margin-top: 40px;
    margin-bottom: 80px;
  }
`;

export const ProductImg = styled.img`
  width: 600px;
  height: 600px;
  margin-right: 50px;
  @media ${(props) => props.theme.tablet} {
    width: 400px;
    height: 400px;
    margin-right: 0;
  }
  @media ${(props) => props.theme.mobile} {
    width: 280px;
    height: 280px;
    margin-right: 0;
    margin-bottom: 10px;
  }
`;

export const ProductInfo = styled.section`
  width: fit-content;
  max-width: 630px;
  @media ${(props) => props.theme.tablet} {
    width: 400px;
  }
  @media ${(props) => props.theme.mobile} {
    width: 280px;
  }
`;

export const Seller = styled.p`
  font-size: 18px;
  font-weight: 400;
  line-height: 1.252222222222222;
  color: #767676;
  margin-bottom: 16px;
  @media ${(props) => props.theme.mobile} {
    font-size: 10px;
    margin-bottom: 10px;
  }
`;

export const ProductName = styled.p`
  font-size: 36px;
  font-weight: 400;
  line-height: 1.251944444444444;
  margin-bottom: 20px;
  @media ${(props) => props.theme.mobile} {
    font-size: 14px;
    margin-bottom: 10px;
  }
`;

export const Shipping = styled.span`
  display: block;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.251875;
  color: #767676;
  position: relative;
  @media ${(props) => props.theme.mobile} {
    font-size: 10px;
  }
  &::after {
    content: '';
    width: 100%;
    height: 2px;
    background-color: #c4c4c4;
    position: absolute;
    bottom: -20px;
    left: 0;
    @media ${(props) => props.theme.mobile} {
      width: 100%;
      bottom: -10px;
    }
  }
`;

export const PriceWarpper = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin-bottom: 30px;
  position: relative;
  @media ${(props) => props.theme.mobile} {
    width: 100%;
    margin-bottom: 10px;
  }
  &::before {
    content: '';
    width: 100%;
    height: 2px;
    background-color: #c4c4c4;
    position: absolute;
    left: 0;
    top: 30px;
    @media ${(props) => props.theme.mobile} {
      top: 15px;
    }
  }
`;

export const TotalPriceTxt = styled.p`
  font-size: 18px;
  font-weight: 500;
  line-height: 1.252222222222222;
  margin-top: 78px;
  @media ${(props) => props.theme.mobile} {
    font-size: 12px;
    margin-top: 30px;
  }
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
  @media ${(props) => props.theme.mobile} {
    font-size: 14px;
  }
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
  @media ${(props) => props.theme.mobile} {
    font-size: 12px;
  }
`;

export const ButtonWarpper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;
