import { useEffect, useState } from 'react';
import client from '../client/client';
import Home from '../template/home/Home';

export default function HomePage() {
  const loginType = localStorage.getItem('type');
  const [productData, setProductData] = useState([]);
  const [totalPage, setTotalPage] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);
  const [loading, setLoading] = useState(false);

  const fetchProductData = async () => {
    try {
      setLoading(true);
      const res = await client.get('/products/');
      setProductData(res.data.results);
      setTotalPage(calcPage(res.data.count, 15));
    } catch (error) {
      console.error('상품 데이터를 가져오는 중 에러 발생:', error);
    } finally {
      setLoading(false);
    }
  };

  const calcPage = (total, num) => {
    return Math.ceil(total / num);
  };

  const fetchProductDataWithPage = async (page) => {
    try {
      setLoading(true);
      const res = await client.get(`/products/?page=${page}`);
      setProductData(res.data.results);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const onClickPageButton = (page) => {
    if (page === 1) {
      fetchProductData();
    } else {
      fetchProductDataWithPage(page);
    }
    setCurrentPage(page - 1);
  };

  // 상품 목록 페이지 가져오기
  useEffect(() => {
    fetchProductData();
  }, []);

  return (
    <Home
      productData={productData}
      onClickPageButton={onClickPageButton}
      totalPage={totalPage}
      currentPage={currentPage}
      loading={loading}
      loginType={loginType}
    />
  );
}
