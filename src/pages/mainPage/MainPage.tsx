import { useEffect, useState } from 'react';
import React from 'react';

import client from '../../client/client';
import Carousel from '../../components/carousel/Carousel';
import { PageWarpper } from '../../components/common/Common';
import ProductList from '../../components/contents/ProductList';
import Loading from '../../components/etc/Loading';
import Footer from '../../components/footer/Footer';
import TopNavBar from '../../components/navBar/TopNavBar';
import { ProductBoxData } from '../../types/ProductTypes';

import * as S from './MainPageStyle';

export default function MainPage() {
  const loginType = localStorage.getItem('type');
  const [productData, setProductData] = useState<ProductBoxData[] | null>(null);
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

  const calcPage = (total: number, num: number) => {
    return Math.ceil(total / num);
  };

  const fetchProductDataWithPage = async (page: number) => {
    try {
      setLoading(true);
      const res = await client.get(`/products/?page=${page}`);
      setProductData(res.data.results);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const onClickPageButton = (page: number) => {
    if (page === 1) {
      fetchProductData();
    } else {
      fetchProductDataWithPage(page);
    }
    setCurrentPage(page - 1);
  };

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
