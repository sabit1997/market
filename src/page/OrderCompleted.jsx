import styled from 'styled-components';
import ProductInfo from '../components/contents/ProductInfo';
import { PageWarpper } from '../components/common/Common';
import { PaymentTabTitle } from '../components/navBar/TabTitle';
import shoppingBag from '../assets/shopping_bag.png';
import LButton from '../components/button/LButton';
import { useLocation, useNavigate } from 'react-router-dom';

export default function OrderCompleted() {
  const location = useLocation();
  const orderInfo = location.state.orderInfo;
  const quantity = location.state.quantity;
  const orderNum = location.state.orderNum;
  const navigate = useNavigate();

  const date = new Date();

  return (
    <PageWarpper>
      <TitleTxt>주문이 완료되었습니다.</TitleTxt>
      <Img src={shoppingBag} />
      <Txt>
        {date.toLocaleDateString('ko-kr')} 주문하신 상품의 주문번호는{' '}
        <RedTxt>{orderNum}</RedTxt> 입니다.
      </Txt>
      <PaymentTabTitle />
      {orderInfo.map((_, i) => (
        <ProductInfo
          orderInfo={orderInfo}
          quantity={quantity}
          i={i}
          key={orderInfo[i].product_id}
        />
      ))}
      <LButton
        value="홈 화면 가기"
        margin="40px 0 0 0"
        onClick={() => {
          navigate('/');
        }}
      />
    </PageWarpper>
  );
}

const TitleTxt = styled.h1`
  font-size: 36px;
  font-weight: 700;
  line-height: 1.222222222222222;
  margin-top: 144px;
  margin-bottom: 52px;
`;

const Img = styled.img`
  width: 120px;
  margin-bottom: 50px;
`;

const Txt = styled.p`
  font-size: 24px;
  font-weight: 500;
  line-height: 1.252083333333333;
  margin-bottom: 50px;
`;

const RedTxt = styled.span`
  font-size: 24px;
  font-weight: 500;
  line-height: 1.252083333333333;
  color: red;
`;
