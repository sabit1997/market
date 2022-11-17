import TopNavBar from '../../components/navBar/TopNavBar';
import ProductList from '../../components/contents/ProductList';
import { PageWarpper } from '../../components/common/Common';
import {
  ProductListSection,
  PageLiWarpper,
  PageWarpperItem,
} from '../../components/home/HomeStyle';
import Footer from '../../components/footer/Footer';
import Carousel from '../../components/carousel/Carousel';
import { useEffect, useState } from 'react';
import client from '../../client/client';
import axios from 'axios';

export default function BuyerHome() {
  // const { productData } = useProductDataContext();
  const loginType = localStorage.getItem('type');
  const [productData, setProductData] = useState([]);
  const [next, setNext] = useState('');
  const [page, setPage] = useState(0);

  // 상품 목록 페이지 가져오기
  useEffect(() => {
    if (next === '') {
      client
        .get('/products/')
        .then((res) => {
          console.log(res);
          setNext(res.data.next);
          setProductData([res.data.results]);
        })
        .catch((error) => console.log(error));
    } else if (next !== null) {
      axios
        .get(next)
        .then((res) => {
          console.log(res);
          const results = res.data.results;
          setProductData([...productData, results]);
          setNext(res.data.next);
        })
        .catch((error) => console.log(error));
    }
  }, [next, productData]);
  console.log(productData);

  // 페이지 나타내기
  const pageList = productData?.map((_, i) => (
    <PageWarpperItem
      key={i}
      onClick={handlePageClick}
      color={page === i ? '#21BF48' : '#000'}
    >
      {i + 1}
    </PageWarpperItem>
  ));

  const productList = productData[page]?.map((x) => (
    <ProductList key={x.product_id} productData={x} />
  ));

  console.log(productData[page]);

  // 페이지 클릭
  function handlePageClick(e) {
    setPage(e.target.textContent - 1);
  }

  return (
    <PageWarpper>
      {loginType === 'BUYER' || loginType === null ? (
        <TopNavBar />
      ) : loginType === 'SELLER' ? (
        <TopNavBar value="SELLER" />
      ) : null}
      <Carousel />
      <ProductListSection>{productList}</ProductListSection>
      <PageLiWarpper>{pageList}</PageLiWarpper>
      <Footer />
    </PageWarpper>
  );
}
