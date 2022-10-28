import { useEffect, useState } from 'react';
import { TotalPriceSection } from '../../components/cart/CartStyle';
import CartProductList from '../../components/contents/CartProductList';
import PriceGroup from '../../components/etc/PriceGroup';
import LButton from '../../components/button/LButton';

export default function Cart({ cartData, productData, checked, setChecked }) {
  const [cartItem, setCartItem] = useState('');
  const [totalPrice, setTotalPrice] = useState('');
  const [totalShippingFee, setTotalShippingFee] = useState('');
  const [quantity, setQuantity] = useState(0);

  useEffect(() => {
    // product_id 값이 같은 값 반환하기
    const compare = cartData.map((_, i) =>
      productData.filter((x) => x.product_id === cartData[i].product_id)
    );
    // 배열 합치기
    const merged = [].concat.apply([], compare);
    console.log(merged);
    if (compare !== undefined) {
      setCartItem(merged);
    }
  }, [cartData, productData]);
  // console.log(cartData);

  // 상품 체크 버튼
  function handleCheckBtn() {
    if (checked) {
      setChecked(false);
    } else {
      setChecked(true);
    }
  }

  // 장바구니 목록 불러오기
  const cartList = cartData.map((_, i) => (
    <CartProductList
      cartItem={cartItem}
      cartData={cartData}
      i={i}
      key={cartData[i].cart_item_id}
      checked={checked}
      setChecked={setChecked}
      quantity={quantity}
      setQuantity={setQuantity}
      onClick={handleCheckBtn}
    />
  ));

  // 가격, 배송비, 콤마
  useEffect(() => {
    if (cartItem !== '') {
      const productPrice = cartItem.map(
        (x, i) =>
          x.price *
          quantity /*여기 수량을 자식한테서 받아와야 함 아니면 새로 데이터 받아오거나*/
      );
      // console.log(productPrice);

      const totalPrice = productPrice.reduce((pre, curr) => pre + curr, 0);

      const totalShippingFee = cartItem
        .map((x) => x.shipping_fee)
        .reduce((pre, curr) => pre + curr, 0);
      setTotalPrice(totalPrice);
      setTotalShippingFee(totalShippingFee);
    }
  }, [cartData, cartItem, quantity]);

  return (
    <>
      {cartList}
      <TotalPriceSection>
        <PriceGroup value="총 상품금액" price={totalPrice?.toLocaleString()} />
        <PriceGroup value="상품 할인" price="0" />
        <PriceGroup value="배송비" price={totalShippingFee?.toLocaleString()} />
        <PriceGroup
          value="결제 예정 금액"
          price={(totalPrice + totalShippingFee)?.toLocaleString()}
        />
      </TotalPriceSection>
      <LButton value="주문하기" />
    </>
  );
}
