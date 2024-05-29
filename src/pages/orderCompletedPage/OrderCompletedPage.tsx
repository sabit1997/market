import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import shoppingBag from '../../assets/shopping_bag.png';
import LButton from '../../components/button/LButton';
import { PageWarpper } from '../../components/common/Common';
import ProductInfo from '../../components/contents/ProductInfo';
import { PaymentTabTitle } from '../../components/navBar/TabTitle';

import * as S from './OrderCompletedPageStyle';

export default function OrderCompletedPage() {
  const location = useLocation();
  const orderInfo = location.state.orderInfo;
  const quantity = location.state.quantity;
  const orderNum = location.state.orderNum;

  const navigate = useNavigate();

  const date = new Date();

  return (
    <PageWarpper>
      <S.TitleTxt>주문이 완료되었습니다.</S.TitleTxt>
      <S.Img src={shoppingBag} />
      <S.Txt>
        {date.toLocaleDateString('ko-kr')} 주문하신 상품의 주문번호는{' '}
        <S.RedTxt>{orderNum}</S.RedTxt> 입니다.
      </S.Txt>
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
