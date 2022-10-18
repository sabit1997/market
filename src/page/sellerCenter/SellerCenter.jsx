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
import TabMenuOn from '../../components/button/TabMenuOn';
import TabMenuOff from '../../components/button/TabMenuOff';
import MsIconButton from '../../components/button/MsIconButton';
import ProductBox from '../../components/contents/ProductBox';
import plusIcon from '../../assets/icon-plus.svg';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import instance from '../../client/instance';

export default function SellerCenter() {
  const navigate = useNavigate();
  const tabMenuTitle = [
    '판매중인 상품(3)',
    '주문/배송',
    '문의/리뷰',
    '통계',
    '스토어설정',
  ];
  const [productBoxData, setProductBoxData] = useState([]);

  // const [tabMenuState, setTabMenuState] = useState(false);

  function handleTabMenu(e) {
    console.log(e.currentTarget);
  }

  const TabMenuList = tabMenuTitle.map((x, i) => (
    <TabMenuOff x={x} key={i} onClick={handleTabMenu} />
  ));

  // 판매자 상품 목록
  useEffect(() => {
    instance
      .get('/seller/')
      .then((res) => {
        console.log(res);
        setProductBoxData(res.data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  // ProductBoxMap
  const productBoxList = productBoxData.map((_, i) => (
    <ProductBox
      i={i}
      productBoxData={productBoxData}
      key={productBoxData[i].product_id}
    />
  ));

  return (
    <>
      <SellerTopNavBar />
      <TopSection>
        <RightWarpper>
          <BoldTxt>판매자센터</BoldTxt>
          <NormalTxt>백엔드글로벌</NormalTxt>
        </RightWarpper>
        <MsIconButton
          src={plusIcon}
          value="상품 업로드"
          wd="168px"
          onClick={() => {
            navigate('/productedit');
          }}
        />
      </TopSection>
      <Main>
        <SideBar>
          {/* <TabMenuOff type="false" value="판매중인 상품(3)" />
          <TabMenuOff value="주문/배송" />
          <TabMenuOff value="문의/리뷰" />
          <TabMenuOff type="false" value="통계" />
          <TabMenuOff type="false" value="스토어 설정" /> */}
          {TabMenuList}
        </SideBar>
        <ContentsSection>
          <SaleProducTitle>
            <ProductTitleTxt marginR="473px">상품정보</ProductTitleTxt>
            <ProductTitleTxt marginR="240px">판매가격</ProductTitleTxt>
            <ProductTitleTxt marginR="106px">수정</ProductTitleTxt>
            <ProductTitleTxt>삭제</ProductTitleTxt>
          </SaleProducTitle>
          {productBoxList}
        </ContentsSection>
      </Main>
    </>
  );
}
