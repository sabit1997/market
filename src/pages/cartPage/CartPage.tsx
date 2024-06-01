import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import client from '../../client/client';
import instance from '../../client/instance';
import { CenterWarpper } from '../../components/common/Common';
import Loading from '../../components/etc/Loading';
import { CartTabTitle } from '../../components/navBar/TabTitle';
import TopNavBar from '../../components/navBar/TopNavBar';
import { CheckedItems } from '../../types/cartTypes';

import * as S from './CartPageStyle';
import EmptyCart from './EmptyCart';
import FilledCart from './FilledCart';

export default function CartPage() {
  const [cartData, setCartData] = useState([]);
  const [checked, setChecked] = useState<CheckedItems>({});
  const [next, setNext] = useState('');
  const [loading, setLoading] = useState(false);
  const [cartItem, setCartItem] = useState([]);
  const [quantity, setQuantity] = useState<number[]>([]);
  const navigate = useNavigate();

  // product_id가 같은 제품의 상세 정보 가져오기
  function getCartDetail(ids: number[]) {
    const result = Promise.all(
      ids.map(async (id) => {
        const res = await client.get(`/products/${id}`);
        return res.data;
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
          console.error(error);
        }
      } else if (next !== null) {
        try {
          const res = await axios.get(next);
          setCartData((prev) => [prev, res.data.results]);
          setNext(res.data.next);
        } catch (error) {
          console.error(error);
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
      state: {
        orderProduct: orderProduct,
        quantity: quantity,
        orderKind: 'cart_order',
        productId: null,
      },
    });
  }

  return (
    <CenterWarpper>
      {loading ? <Loading /> : null}
      <TopNavBar />
      <S.CartWarpper>
        <S.PageTitle>장바구니</S.PageTitle>
        <CartTabTitle checked={checked} setChecked={setChecked} />
        {cartItem.length === 0 ? (
          <EmptyCart />
        ) : (
          <FilledCart
            cartData={cartData}
            checked={checked}
            setChecked={setChecked}
            setCartData={setCartData}
            handleOrderBtn={handleOrderBtn}
            quantity={quantity}
            setQuantity={setQuantity}
            cartItem={cartItem}
            // setCartItem={setCartItem}
          />
        )}
      </S.CartWarpper>
    </CenterWarpper>
  );
}
