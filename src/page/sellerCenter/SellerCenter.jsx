import SellerTopNavBar from '../../components/navBar/SellerTopNavBar';
import {
  TopSection,
  RightWarpper,
  BoldTxt,
  NormalTxt,
  Main,
  SideBar,
  ContentsSection,
  SaleProducTitle,
  ProductTitleTxt,
} from './SellerCenterStyle';
import TabMenuOff from '../../components/button/TabMenuOff';
import MsIconButton from '../../components/button/MsIconButton';
import ProductBox from '../../components/contents/ProductBox';
import plusIcon from '../../assets/icon-plus.svg';

export default function SellerCenter() {
  return (
    <>
      <SellerTopNavBar />
      <TopSection>
        <RightWarpper>
          <BoldTxt>판매자센터</BoldTxt>
          <NormalTxt>백엔드글로벌</NormalTxt>
        </RightWarpper>
        <MsIconButton img={plusIcon} value="상품 업로드" wd="168px" />
      </TopSection>
      <Main>
        <SideBar>
          <TabMenuOff type="false" value="판매중인 상품(3)" />
          <TabMenuOff value="주문/배송" />
          <TabMenuOff value="문의/리뷰" />
          <TabMenuOff type="false" value="통계" />
          <TabMenuOff type="false" value="스토어 설정" />
        </SideBar>
        <ContentsSection>
          <SaleProducTitle>
            <ProductTitleTxt marginR="473px">상품정보</ProductTitleTxt>
            <ProductTitleTxt marginR="240px">판매가격</ProductTitleTxt>
            <ProductTitleTxt marginR="106px">수정</ProductTitleTxt>
            <ProductTitleTxt>삭제</ProductTitleTxt>
          </SaleProducTitle>
          <ProductBox />
        </ContentsSection>
      </Main>
    </>
  );
}
