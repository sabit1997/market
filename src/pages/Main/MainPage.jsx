import { useEffect, useState } from 'react';
import client from '../../client/client';
import TopNavBar from '../../components/navBar/TopNavBar';
import ProductList from '../../components/contents/ProductList';
import { PageWarpper } from '../../components/common/Common';
import * as S from './MainStyle';
import Footer from '../../components/footer/Footer';
import Carousel from '../../components/carousel/Carousel';
import Loading from '../../components/etc/Loading';

export default function MainPage() {
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

  const pageList = Array.from({ length: totalPage }, (_, i) => (
    <S.PageWarpperItem
      key={i}
      onClick={() => onClickPageButton(i + 1)}
      color={currentPage === i ? '#21BF48' : '#000'}
    >
      {i + 1}
    </S.PageWarpperItem>
  ));

  const productList = productData?.map((x) => (
    <ProductList key={x.product_id} productData={x} />
  ));

  return (
    <PageWarpper>
      {loading && <Loading />}
      {(loginType === 'BUYER' || loginType === null) && (
        <TopNavBar productData={productData} />
      )}
      {loginType === 'SELLER' && <TopNavBar value="SELLER" />}
      <Carousel />
      <S.ProductListSection>{productList}</S.ProductListSection>
      <S.PageLiWarpper>{pageList}</S.PageLiWarpper>
      <Footer />
    </PageWarpper>
  );
}
