import instance from '../client/instance';
import { useEffect } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Cart } from '../template/cart/Cart';
import axios from 'axios';
import client from '../client/client';

export default function CartPage() {
  const [cartData, setCartData] = useState([]);
  const [checked, setChecked] = useState({});
  const [next, setNext] = useState('');
  const [loading, setLoading] = useState(false);
  const [cartItem, setCartItem] = useState([]);
  const [quantity, setQuantity] = useState([]);
  const navigate = useNavigate();

  // product_id가 같은 제품의 상세 정보 가져오기
  function getCartDetail(ids) {
    const result = Promise.all(
      ids.map((id) => {
        return client.get(`/products/${id}`).then((res) => res.data);
      })
    );
    return result;
  }

  useEffect(() => {
    // 장바구니 정보 가져오기
    async function getData() {
      if (next === '') {
        setLoading(true);
        try {
          const res = await instance.get('/cart/');
          setNext(() => res.data.next);
          setCartData(() => res.data.results);
        } catch (error) {
          console.log(error);
        }
      } else if (next !== null) {
        try {
          const res = await axios.get(next);
          setCartData((prev) => prev, res.data.results);
          setNext(res.data.next);
        } catch (error) {
          console.log(error);
        }
      }
      return cartData;
    }

    async function getCart() {
      const data = await getData();
      await Promise.all(data.map((el) => el.quantity)).then((quantity) =>
        setQuantity(quantity)
      );
      const cartProductId = await Promise.all(
        data.map((cart) => cart.product_id)
      );
      const cartDetail = await getCartDetail(cartProductId).then((detail) => {
        setCartItem(detail);
        setLoading(false);
      });
      return cartDetail;
    }
    getCart();
  }, [cartData, next]);

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
    <Cart
      checked={checked}
      setChecked={setChecked}
      loading={loading}
      cartData={cartData}
      setCartData={setCartData}
      handleOrderBtn={handleOrderBtn}
      quantity={quantity}
      setQuantity={setQuantity}
      cartItem={cartItem}
      setCartItem={setCartItem}
    />
  );
}
