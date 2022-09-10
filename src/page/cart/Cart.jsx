import {
  CartWarpper,
  PageTitle,
  TotalPriceSection,
} from '../../components/cart/CartStyle';
import TopNavBar from '../../components/navBar/TopNavBar';
import TabTitle from '../../components/navBar/TabTitle';
import CartProductList from '../../components/contents/CartProductList';
import PriceGroup from '../../components/etc/PriceGroup';
import LButton from '../../components/button/LButton';

export default function Cart() {
  return (
    <>
      <TopNavBar />
      <CartWarpper>
        <PageTitle>장바구니</PageTitle>
        <TabTitle marginB="35px" />
        <CartProductList marginB="80px" />
        <TotalPriceSection>
          <PriceGroup value="총 상품금액" />
          <PriceGroup value="상품 할인" />
          <PriceGroup value="배송비" />
          <PriceGroup value="결제 예정 금액" />
        </TotalPriceSection>
        <LButton value="주문하기" />
      </CartWarpper>
    </>
  );
}
