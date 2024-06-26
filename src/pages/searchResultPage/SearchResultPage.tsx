import React from 'react';
import { useLocation } from 'react-router-dom';

import { CenterWarpper } from '../../components/common/Common';
import ProductList from '../../components/contents/ProductList';
import TopNavBar from '../../components/navBar/TopNavBar';
import { ProductBoxData } from '../../types/ProductTypes';
import { ProductListSection } from '../mainPage/MainPageStyle';

import * as S from './SearchResultPageStyle';

export default function SearchResult() {
  const location = useLocation();
  const resultProducts = location.state.resultProducts;
  const searchInput = location.state.searchInput;
  const loginType = localStorage.getItem('type');
  return (
    <CenterWarpper>
      <TopNavBar value={loginType} />
      <S.Title>검색 결과</S.Title>
      <S.ResultMessage>
        <S.SearchKeyword>{searchInput}</S.SearchKeyword>에 대한 검색 결과는 총{' '}
        {resultProducts.length} 개 입니다.
      </S.ResultMessage>
      <ProductListSection>
        {resultProducts.map((product: ProductBoxData) => (
          <ProductList key={product.product_id} productData={product} />
        ))}
      </ProductListSection>
    </CenterWarpper>
  );
}
