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
import TabMenu from '../../components/button/TabMenu';
import MsIconButton from '../../components/button/MsIconButton';
import ProductBox from '../../components/contents/ProductBox';
import plusIcon from '../../assets/icon-plus.svg';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import instance from '../../client/instance';

export default function SellerCenter() {
  const navigate = useNavigate();
  const [tabMenuTitle, setTabMenuTitle] = useState([
    {
      no: 1,
      text: '판매중인 상품',
      state: true,
    },
    {
      no: 2,
      text: '주문/배송',
      state: false,
    },
    {
      no: 3,
      text: '문의/리뷰',
      state: false,
    },
    {
      no: 4,
      text: '통계',
      state: false,
    },
    {
      no: 5,
      text: '스토어설정',
      state: false,
    },
  ]);

  const [productBoxData, setProductBoxData] = useState([]);

  const TabMenuList = tabMenuTitle.map((x, i) => (
    <TabMenu state={x.state} value={x.text} key={i} type="false" />
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
  }, [productBoxData.length]);

  useEffect(() => {
    const findIndex = tabMenuTitle.findIndex((el) => el.no === 1);
    const copiedTabMenuTitle = [...tabMenuTitle];
    copiedTabMenuTitle[
      findIndex
    ].text = `판매중인 상품(${productBoxData.length})`;
    setTabMenuTitle(copiedTabMenuTitle);
  }, [productBoxData.length]);

  console.log(productBoxData);

  // ProductBoxMap
  const productBoxList = productBoxData?.map((_, i) => (
    <ProductBox
      i={i}
      setProductBoxData={setProductBoxData}
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
          <NormalTxt>
            {productBoxData !== [] ? productBoxData[0].store_name : null}
          </NormalTxt>
        </RightWarpper>
        <MsIconButton
          src={plusIcon}
          value="상품 업로드"
          wd="168px"
          onClick={() => {
            navigate('/productedit', { state: { productBoxData: null } });
          }}
        />
      </TopSection>
      <Main>
        <SideBar>{TabMenuList}</SideBar>
        <ContentsSection>
          <SaleProducTitle>
            <ProductTitleTxt marginR="473px">상품정보</ProductTitleTxt>
            <ProductTitleTxt marginR="240px">판매가격</ProductTitleTxt>
            <ProductTitleTxt marginR="106px">수정</ProductTitleTxt>
            <ProductTitleTxt>삭제</ProductTitleTxt>
          </SaleProducTitle>
          {productBoxData !== [] ? productBoxList : null}
        </ContentsSection>
      </Main>
    </>
  );
}
