import { useEffect, useState } from 'react';
import { TotalPriceSection, Icon } from './CartStyle';
import CartProductList from '../../components/contents/CartProductList';
import PriceGroup from '../../components/etc/PriceGroup';
import LButton from '../../components/button/LButton';

export default function FilledCart({
  cartData,
  checked,
  setChecked,
  setCartData,
  handleOrderBtn,
  quantity,
  setQuantity,
  cartItem,
  setCartItem,
}) {
  const [totalPrice, setTotalPrice] = useState('');
  const [totalShippingFee, setTotalShippingFee] = useState('');

  // 장바구니 목록 불러오기
  const cartList = cartData.map((_, i) => (
    <CartProductList
      cartItem={cartItem}
      setCartItem={setCartItem}
      cartData={cartData}
      i={i}
      key={cartData[i].cart_item_id}
      checked={checked}
      setChecked={setChecked}
      quantity={quantity}
      setQuantity={setQuantity}
      setCartData={setCartData}
      cartDataQuantity={cartData[i].quantity}
    />
  ));

  // 가격, 배송비, 콤마
  useEffect(() => {
    if (cartItem !== '') {
      const productPrice = cartItem
        .map((x, i) => x.price * quantity[i])
        .filter((_, i) => checked[`product${i}`] === true);

      const totalPrice = productPrice.reduce((pre, curr) => pre + curr, 0);

      const totalShippingFee = cartItem
        .map((x) => x.shipping_fee)
        .filter((_, i) => checked[`product${i}`] === true)
        .reduce((pre, curr) => pre + curr, 0);

      setTotalPrice(totalPrice);
      setTotalShippingFee(totalShippingFee);
    }
  }, [cartData, cartItem, quantity, checked]);

  return (
    <>
      {cartList}
      <TotalPriceSection>
        <PriceGroup value="총 상품금액" price={totalPrice?.toLocaleString()} />
        <Icon />
        <PriceGroup value="상품 할인" price="0" />
        <Icon />
        <PriceGroup value="배송비" price={totalShippingFee?.toLocaleString()} />
        <PriceGroup
          value="결제 예정 금액"
          price={(totalPrice + totalShippingFee)?.toLocaleString()}
        />
      </TotalPriceSection>
      <LButton
        value="주문하기"
        onClick={handleOrderBtn}
        mobileWd="100%"
        mobileHg="40px"
      />
    </>
  );
}
