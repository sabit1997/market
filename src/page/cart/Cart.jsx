import instance from '../../client/instance';
import { CartWarpper, PageTitle } from '../../components/cart/CartStyle';
import TopNavBar from '../../components/navBar/TopNavBar';
import { CartTabTitle } from '../../components/navBar/TabTitle';
import EmptyCart from './EmptyCart';
import FilledCart from './FilledCart';
import { useEffect } from 'react';
import { useState } from 'react';
import { useProductDataContext } from '../../context/ProductDataContext';
import axios from 'axios';

export default function Cart() {
  const [cartData, setCartData] = useState([]);
  const [checked, setChecked] = useState({});
  const { productData } = useProductDataContext();
  const [next, setNext] = useState('');

  // 데이터 불러오고 수정
  useEffect(() => {
    if (next === '') {
      instance
        .get('/cart/')
        .then((res) => {
          console.log(res);
          setCartData(res.data.results);
          setNext(res.data.next);
        })
        .catch((error) => {
          console.log(error);
        });
    } else if (next !== null) {
      axios
        .get(next)
        .then((res) => {
          console.log(res);
          setCartData(...cartData, res.data.results);
          setNext(res.data.next);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [cartData, next]);

  return (
    <>
      <TopNavBar />
      <CartWarpper>
        <PageTitle>장바구니</PageTitle>
        <CartTabTitle checked={checked} setChecked={setChecked} />
        {cartData.length === 0 ? (
          <EmptyCart />
        ) : (
          <FilledCart
            cartData={cartData}
            productData={productData}
            checked={checked}
            setChecked={setChecked}
            setCartData={setCartData}
          />
        )}
      </CartWarpper>
    </>
  );
}
