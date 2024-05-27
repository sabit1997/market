import React from 'react';

import ProductBox from '../../components/contents/ProductBox';

import * as S from './SellerCenterPageStyle';

export default function SellerCenterTabTitle({
  setProductBoxData,
  productBoxData,
}) {
  const productBoxList = productBoxData?.map((_, i) => (
    <ProductBox
      i={i}
      setProductBoxData={setProductBoxData}
      productBoxData={productBoxData}
      key={productBoxData[i].product_id}
    />
  ));
  return (
    <S.ContentsSection>
      <S.SaleProducTitle>
        <S.ProductTitleTxt wd="49.93%">상품정보</S.ProductTitleTxt>
        <S.ProductTitleTxt wd="30.62%">판매가격</S.ProductTitleTxt>
        <S.ProductTitleTxt wd="5.55%" minWd="34px" mg="1.38%">
          수정
        </S.ProductTitleTxt>
        <S.ProductTitleTxt wd="5.55%" minWd="34px" mg="1.38%">
          삭제
        </S.ProductTitleTxt>
      </S.SaleProducTitle>
      {productBoxData.length !== 0 ? productBoxList : null}
    </S.ContentsSection>
  );
}
