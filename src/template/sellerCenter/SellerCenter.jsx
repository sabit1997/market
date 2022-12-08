import { CenterWarpper } from '../../components/common/Common';
import SellerTopNavBar from '../../components/navBar/SellerTopNavBar';
import {
  TopSection,
  RightWarpper,
  BoldTxt,
  NormalTxt,
  Main,
  SideBar,
} from './SellerCenterStyle';
import TabMenu from '../../components/button/TabMenu';
import MsIconButton from '../../components/button/MsIconButton';
import plusIcon from '../../assets/icon-plus.svg';
import SellerCenterTabTitle from './SellerCenterTabTitle';

export default function SellerCenter({
  tabMenuTitle,
  setProductBoxData,
  productBoxData,
  navigate,
}) {
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
            {productBoxData !== [] ? productBoxData[0]?.store_name : null}
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
