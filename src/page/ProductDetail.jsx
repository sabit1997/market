import TopNavBar from '../components/TopNavBar';
import styled from 'styled-components';
import Amount from '../components/Amount';
import LPrice from '../components/LPrice';
import MButton from '../components/button/MButton';
import MDarkButton from '../components/button/MDarkButton';
import TabActiveButton from '../components/button/TabActiveButton';
import TabDisabledButton from '../components/button/TabDisabledButton';

export default function ProductDetail() {
  return (
    <>
      <TopNavBar />
      <ProductWarpper>
        <ProductImg src="" />
        <ProductInfo>
          <Seller>백엔드글로벌</Seller>
          <ProductName>딥러닝 개발자 무릎 담요</ProductName>
          <LPrice cl="#000" value="17,500" marginB="138px"></LPrice>
          <Shipping>택배배송 / 무료배송</Shipping>
          <Amount marginT="52px" />
          <PriceWarpper>
            <TotalPriceTxt>총 상품 금액</TotalPriceTxt>
            <RightWarpper>
              <TotalQuantity>
                총 수량 <TotalQuantityNum>1</TotalQuantityNum>개
              </TotalQuantity>
              <LPrice cl="#21BF48" value="17,500"></LPrice>
            </RightWarpper>
          </PriceWarpper>
          <MButton wd="416px" value="바로 구매" marginR="14px" />
          <MDarkButton wd="200px" value="장바구니" />
        </ProductInfo>
      </ProductWarpper>
      <ButtonWarpper>
        <TabActiveButton value="버튼" />
        <TabDisabledButton value="리뷰" />
        <TabDisabledButton value="Q&A" />
        <TabDisabledButton value="반품/교환정보" />
      </ButtonWarpper>
    </>
  );
}

const ProductWarpper = styled.section`
  display: flex;
  justify-content: center;
  margin-top: 80px;
  margin-bottom: 140px;
`;

const ProductImg = styled.img`
  width: 600px;
  height: 600px;
  margin-right: 50px;
`;

const ProductInfo = styled.section``;

const Seller = styled.p`
  font-size: 18px;
  font-weight: 400;
  line-height: 1.252222222222222;
  color: #767676;
  margin-bottom: 16px;
`;

const ProductName = styled.p`
  font-size: 36px;
  font-weight: 400;
  line-height: 1.251944444444444;
  margin-bottom: 20px;
`;

const Shipping = styled.span`
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

const PriceWarpper = styled.section`
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

const TotalPriceTxt = styled.p`
  font-size: 18px;
  font-weight: 500;
  line-height: 1.252222222222222;
  margin-top: 78px;
`;

const RightWarpper = styled.div`
  display: flex;
  align-items: baseline;
`;

const TotalQuantity = styled.p`
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

const TotalQuantityNum = styled.span`
  font-size: 18px;
  font-weight: 400;
  line-height: 1.252222222222222;
  color: #21bf48;
`;

const ButtonWarpper = styled.div`
  display: flex;
  justify-content: center;
`;
