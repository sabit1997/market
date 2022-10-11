import axios from 'axios';
import { useEffect } from 'react';
import { createContext, useContext, useState } from 'react';
import client from '../client/client';

export const ProductDatacontext = createContext([]);

export function ProductDataProvider({ children }) {
  const [productData, setProductData] = useState([]);
  const [next, setNext] = useState('');

  const value = {
    productData,
    setProductData,
  };

  useEffect(() => {
    if (next === '') {
      client
        .get('/products/')
        .then((res) => {
          setProductData(res.data.results);
          console.log(res);
          setNext(res.data.next);
        })
        .catch((err) => {
          console.log(err);
        });
    } else if (next !== null) {
      axios
        .get(`${next}`)
        .then((res) => {
          console.log(res);
          const result = res.data.results;
          setProductData([...productData, ...result]);
          setNext(res.data.next);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [next, productData]);

  console.log(productData);
  console.log(next);

  // 다음페이지 값도 다 받아와야함.

  return (
    <ProductDatacontext.Provider value={value}>
      {children}
    </ProductDatacontext.Provider>
  );
}

export function useProductDataContext() {
  return useContext(ProductDatacontext);
}
