import instance from '../client/instance';
import { useEffect } from 'react';
import { useState } from 'react';
import { Cart } from '../template/cart/Cart';
import axios from 'axios';

export default function CartPage() {
  const [cartData, setCartData] = useState([]);
  const [checked, setChecked] = useState({});
  const [next, setNext] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (next === '') {
      setLoading(true);
      instance
        .get('/cart/')
        .then((res) => {
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
      loading={loading}
      cartData={cartData}
      setCartData={setCartData}
    />
  );
}
