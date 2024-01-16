import { useNavigate } from 'react-router-dom';
import { useCallback, useEffect, useState } from 'react';
import instance from '../../client/instance';
import { CenterWarpper } from '../../components/common/Common';
import SellerTopNavBar from '../../components/navBar/SellerTopNavBar';
import {
  TopSection,
  RightWarpper,
  BoldTxt,
  NormalTxt,
  Main,
  SideBar,
} from './SellerCenterPageStyle';
import TabMenu from '../../components/button/TabMenu';
import MsIconButton from '../../components/button/MsIconButton';
import plusIcon from '../../assets/icon-plus.svg';
import SellerCenterTabTitle from './SellerCenterTabTitle';

export default function SellerCenterPage() {
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

  // 판매자 상품 목록
  useEffect(() => {
    instance
      .get('/seller/')
      .then((res) => {
        setProductBoxData(res.data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useCallback(() => {
    const findIndex = tabMenuTitle.findIndex((el) => el.no === 1);
    const copiedTabMenuTitle = [...tabMenuTitle];
    copiedTabMenuTitle[
      findIndex
    ].text = `판매중인 상품(${productBoxData.length})`;
    setTabMenuTitle(copiedTabMenuTitle);
  }, [productBoxData.length, tabMenuTitle]);

  const TabMenuList = tabMenuTitle.map((x, i) => (
    <TabMenu state={x.state} value={x.text} key={i} type="false" />
  ));

  return (
    <CenterWarpper>
      <SellerTopNavBar />
      <TopSection>
        <RightWarpper>
          <BoldTxt>판매자센터</BoldTxt>
          <NormalTxt>
            {productBoxData.length !== 0 ? productBoxData[0]?.store_name : null}
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
        <SellerCenterTabTitle
          setProductBoxData={setProductBoxData}
          productBoxData={productBoxData}
        />
      </Main>
    </CenterWarpper>
  );
}
