import TopNavBar from '../../components/TopNavBar';
import {
  ProductWarpper,
  ProductImg,
  ProductInfo,
  Seller,
  ProductName,
  Shipping,
  PriceWarpper,
  TotalPriceTxt,
  RightWarpper,
  TotalQuantity,
  TotalQuantityNum,
  ButtonWarpper,
} from '../../components/productDetail/ProductDetail';
import Amount from '../../components/Amount';
import LPrice from '../../components/LPrice';
import MButton from '../../components/button/MButton';
import MDarkButton from '../../components/button/MDarkButton';
import TabActiveButton from '../../components/button/TabActiveButton';
import TabDisabledButton from '../../components/button/TabDisabledButton';

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
