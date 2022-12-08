import instance from '../client/instance';
import { useEffect } from 'react';
import { useState } from 'react';
import { useProductDataContext } from '../context/ProductDataContext';
import { Cart } from '../template/cart/Cart';
import axios from 'axios';

export default function CartPage() {
  const [cartData, setCartData] = useState([]);
  const [checked, setChecked] = useState({});
  const { productData } = useProductDataContext();
  const [next, setNext] = useState('');
  const [loading, setLoading] = useState(false);

  // 데이터 불러오고 수정
  useEffect(() => {
    if (next === '') {
      setLoading(true);
      instance
        .get('/cart/')
        .then((res) => {
          console.log(res);
          setCartData(res.data.results);
          setNext(res.data.next);
          setLoading(false);
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
          setLoading(false);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [cartData, next]);

  return (
    <Cart
      checked={checked}
      setChecked={setChecked}
      productData={productData}
      loading={loading}
      cartData={cartData}
      setCartData={setCartData}
    />
  );
}
