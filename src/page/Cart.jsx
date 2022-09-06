import styled from 'styled-components';
import TopNavBar from '../components/TopNavBar';
import TabTitle from '../components/TabTitle';
import CartProductList from '../components/CartProductList';
import PriceGroup from '../components/PriceGroup';
import LButton from '../components/button/LButton';

export default function Cart() {
  return (
    <>
      <TopNavBar />
      <CartWarpper>
        <PageTitle>장바구니</PageTitle>
        <TabTitle marginB="35px" />
        <CartProductList marginB="80px" />
        <TotalPriceSection>
          <PriceGroup value="총 상품금액" />
          <PriceGroup value="상품 할인" />
          <PriceGroup value="배송비" />
          <PriceGroup value="결제 예정 금액" />
        </TotalPriceSection>
        <LButton value="주문하기" />
      </CartWarpper>
    </>
  );
}

const CartWarpper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 54px;
`;

const PageTitle = styled.h2`
  font-size: 36px;
  font-weight: 700;
  line-height: 1.222222222222222;
  margin-bottom: 52px;
`;

const TotalPriceSection = styled.section`
  width: 100%;
  max-width: 1280px;
  height: 150px;
  background-color: #f2f2f2;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-radius: 10px;
  margin-bottom: 40px;
`;
