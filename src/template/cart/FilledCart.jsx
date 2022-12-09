import { useEffect, useState } from 'react';
import { TotalPriceSection, Icon } from './CartStyle';
import CartProductList from '../../components/contents/CartProductList';
import PriceGroup from '../../components/etc/PriceGroup';
import LButton from '../../components/button/LButton';
import { useNavigate } from 'react-router-dom';
import client from '../../client/client';

export default function FilledCart({
  cartData,
  checked,
  setChecked,
  setCartData,
}) {
  const [cartItem, setCartItem] = useState('');
  const [totalPrice, setTotalPrice] = useState('');
  const [totalShippingFee, setTotalShippingFee] = useState('');
  const [quantity, setQuantity] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    setQuantity(cartData.map((el) => el.quantity));
  }, [cartData]);

  function getCartDetail(ids) {
    const result = Promise.all(
      ids.map((id) => {
        return client.get(`/products/${id}`).then((res) => res.data);
      })
    );
    return result;
  }

  useEffect(() => {
    const cartProductId = cartData.map((cart) => cart.product_id);
    getCartDetail(cartProductId).then((detail) => setCartItem(detail));
  }, [cartData]);

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

  function handleOrderBtn() {
    const orderProduct = cartItem.filter(
      (_, i) => checked[`product${i}`] === true
    );
    const quantity = cartData
      .filter((_, i) => checked[`product${i}`] === true)
      .map((x) => x.quantity);
    navigate('/payment', {
      state: { orderProduct: orderProduct, quantity: quantity },
    });
  }

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
