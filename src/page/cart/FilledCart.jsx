import { TotalPriceSection } from '../../components/cart/CartStyle';
import CartProductList from '../../components/contents/CartProductList';
import PriceGroup from '../../components/etc/PriceGroup';
import LButton from '../../components/button/LButton';

export default function Cart() {
  return (
    <>
      <CartProductList marginB="80px" />
      <TotalPriceSection>
        <PriceGroup value="총 상품금액" />
        <PriceGroup value="상품 할인" />
        <PriceGroup value="배송비" />
        <PriceGroup value="결제 예정 금액" />
      </TotalPriceSection>
      <LButton value="주문하기" />
    </>
  );
}
