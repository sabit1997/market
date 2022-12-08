import {
  ContentsSection,
  SaleProducTitle,
  ProductTitleTxt,
} from './SellerCenterStyle';
import ProductBox from '../../components/contents/ProductBox';

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
    <ContentsSection>
      <SaleProducTitle>
        <ProductTitleTxt wd="49.93%">상품정보</ProductTitleTxt>
        <ProductTitleTxt wd="30.62%">판매가격</ProductTitleTxt>
        <ProductTitleTxt wd="5.55%" minWd="34px" mg="1.38%">
          수정
        </ProductTitleTxt>
        <ProductTitleTxt wd="5.55%" minWd="34px" mg="1.38%">
          삭제
        </ProductTitleTxt>
      </SaleProducTitle>
      {productBoxData !== [] ? productBoxList : null}
    </ContentsSection>
  );
}
