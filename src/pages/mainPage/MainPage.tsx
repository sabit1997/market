import { useQuery } from '@tanstack/react-query';
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
  const [currentPage, setCurrentPage] = useState(1);

  const fetchProductDataWithPage = async (page = 1) => {
    const res = await client.get(`/products/?page=${page}`);
    return res.data;
  };

  const {
    data: productData,
    isLoading,
    refetch,
    error,
  } = useQuery({
    queryKey: ['products', currentPage],
    queryFn: () => fetchProductDataWithPage(currentPage),
  });

  const calcPage = (total: number, num: number) => {
    return Math.ceil(total / num);
  };

  const totalPage = calcPage(productData?.count, 15);

  const onClickPageButton = (page: number) => {
    setCurrentPage(page);
  };

  useEffect(() => {
    refetch();
  }, [currentPage, refetch]);

  const pageList = Array.from({ length: totalPage }, (_, i) => (
    <S.PageWarpperItem
      key={i}
      onClick={() => onClickPageButton(i + 1)}
      color={currentPage === i + 1 ? '#21BF48' : '#000'}
    >
      {i + 1}
    </S.PageWarpperItem>
  ));

  const productList = productData?.results.map((x: ProductBoxData) => (
    <ProductList key={x.product_id} productData={x} />
  ));

  return (
    <PageWarpper>
      {isLoading && <Loading />}
      {(loginType === 'BUYER' || loginType === null) && (
        <TopNavBar productData={productData} />
      )}
      {loginType === 'SELLER' && <TopNavBar value="SELLER" />}
      <Carousel />

      {error ? (
        <div>Error! 다시 시도해보세요.</div>
      ) : (
        <>
          <S.ProductListSection>{productList}</S.ProductListSection>
          <S.PageLiWarpper>{pageList}</S.PageLiWarpper>
        </>
      )}
      <Footer />
    </PageWarpper>
  );
}
