import instance from '../../client/instance';
import { CartWarpper, PageTitle } from '../../components/cart/CartStyle';
import TopNavBar from '../../components/navBar/TopNavBar';
import { CartTabTitle } from '../../components/navBar/TabTitle';
import EmptyCart from './EmptyCart';
import FilledCart from './FilledCart';
import { useEffect } from 'react';
import { useState } from 'react';
import { useProductDataContext } from '../../context/ProductDataContext';

export default function Cart() {
  const [cartData, setCartData] = useState([]);
  const [type, setType] = useState(false);
  const [checked, setChecked] = useState({});
  const { productData } = useProductDataContext();

  // 데이터 불러오고 수정
  useEffect(() => {
    instance
      .get('/cart/')
      .then((res) => {
        console.log(res);
        setCartData(res.data.results);
        if (cartData.length === 0) {
          setType(false);
        } else {
          setType(true);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, [cartData.length]);

  return (
    <>
      <TopNavBar />
      <CartWarpper>
        <PageTitle>장바구니</PageTitle>
        <CartTabTitle checked={checked} setChecked={setChecked} />
        {type === false ? (
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
