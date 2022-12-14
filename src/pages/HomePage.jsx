import { useEffect, useState } from 'react';
import client from '../client/client';
import axios from 'axios';
import Home from '../template/home/Home';

export default function HomePage() {
  const loginType = localStorage.getItem('type');
  const [productData, setProductData] = useState([]);
  const [next, setNext] = useState('');
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(false);

  // 상품 목록 페이지 가져오기
  useEffect(() => {
    if (next === '') {
      setLoading(true);
      client
        .get('/products/')
        .then((res) => {
          setNext(res.data.next);
          setProductData([res.data.results]);
          setLoading(false);
        })
        .catch((error) => console.log(error));
    } else if (next !== null) {
      axios
        .get(next)
        .then((res) => {
          const results = res.data.results;
          setProductData([...productData, results]);
          setNext(res.data.next);
          setLoading(false);
        })
        .catch((error) => console.log(error));
    } else {
      setLoading(false);
    }
  }, [next, productData]);

  // 페이지 클릭
  function handlePageClick(e) {
    setPage(e.target.textContent - 1);
  }

  return (
    <Home
      productData={productData}
      handlePageClick={handlePageClick}
      page={page}
      loading={loading}
      loginType={loginType}
    />
  );
}
