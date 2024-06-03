import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useLocation, useNavigate } from 'react-router-dom';

import instance from '../../client/instance';
import LButton from '../../components/button/LButton';
import LDisabledButton from '../../components/button/LDisabledButton';
import { CenterWarpper } from '../../components/common/Common';
import ProductInfo from '../../components/contents/ProductInfo';
import CheckText from '../../components/etc/CheckText';
import SPrice from '../../components/etc/SPrice';
import * as I from '../../components/input/PaymentInputs';
import { PaymentTabTitle } from '../../components/navBar/TabTitle';
import TopNavBar from '../../components/navBar/TopNavBar';
import useInputs from '../../hooks/useInputs';
import { OrderInfo } from '../../types/cartTypes';

import * as S from './PaymentPageStyle';
import PaymentWayItem from './PaymentWayItem';

export default function PaymentPage() {
  const {
    register,
    formState: { isValid },
  } = useForm({ mode: 'onChange' });
  const navigate = useNavigate();
  const [paymentWay]: [string[], Dispatch<SetStateAction<string[]>>] = useState(
    ['신용/체크카드', '무통장 입금', '휴대폰 결제', '네이버페이', '카카오페이']
  );
  const [agreeChecked, setAgreeChecked] = useState(false);
  const [checked, setChecked] = useState<{ [key: string]: boolean }>({});
  const [payMethod, setPayMethod] = useState<string | null>(null);
  const location = useLocation();
  const orderInfo: OrderInfo[] = location.state.orderProduct;
  const quantity = location.state.quantity;
  const orderKind = location.state.orderKind;
  const productId = location.state.productId;

  useEffect(() => {
    const method = paymentWay.filter((_, i) => checked[`pay${i}`] === true);
    switch (method[0]) {
      case '신용/체크카드':
        setPayMethod('CARD');
        break;
      case '무통장 입금':
        setPayMethod('DEPOSIT');
        break;
      case '휴대폰 결제':
        setPayMethod('PHONE_PAYMENT');
        break;
      case '네이버페이':
        setPayMethod('NAVERPAY');
        break;
      case '카카오페이':
        setPayMethod('KAKAOPAY ');
        break;
      default:
        break;
    }
  }, [checked, paymentWay]);

  const [inputs, onChange, handleInputs] = useInputs({
    receiver: '',
    phone_number1: '',
    phone_number2: '',
    phone_number3: '',
    zip_code: '',
    address1: '',
    address2: '',
    address_message: '',
  });

  const {
    receiver,
    phone_number1,
    phone_number2,
    phone_number3,
    zip_code,
    address1,
    address2,
    address_message,
  } = inputs;

  const totalPrice: number = orderInfo
    .map((x, i) => x.shipping_fee + x.price * quantity[i])
    .reduce((pre, curr) => pre + curr, 0);

  const orderPrice: number = orderInfo
    .map((x, i) => x.price * quantity[i])
    .reduce((pre, curr) => pre + curr, 0);
  const totalShippingFee = orderInfo
    .map((x) => x.shipping_fee)
    .reduce((pre, curr) => pre + curr, 0);

  function handlePaymentButton(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (agreeChecked && isValid && payMethod !== null) {
      if (orderKind === 'cart_order') {
        instance
          .post('/order/', {
            total_price: totalPrice,
            order_kind: orderKind,
            receiver: receiver,
            receiver_phone_number:
              phone_number1 + phone_number2 + phone_number3,
            address: address1 + address2,
            address_message: address_message,
            payment_method: payMethod,
          })
          .then((res) => {
            navigate('/ordercompleted', {
              state: {
                orderInfo: orderInfo,
                quantity: quantity,
                orderNum: res.data.order_number,
              },
            });
          })
          .catch((error) => console.error(error));
      } else if (orderKind === 'cart_one_order' || 'direct_order') {
        instance
          .post('/order/', {
            product_id: productId,
            quantity: quantity[0],
            total_price: totalPrice,
            order_kind: orderKind,
            receiver: receiver,
            receiver_phone_number:
              phone_number1 + phone_number2 + phone_number3,
            address: address1 + address2,
            address_message: address_message,
            payment_method: payMethod,
          })
          .then((res) => {
            navigate('/ordercompleted', {
              state: {
                orderInfo: orderInfo,
                quantity: quantity,
                orderNum: res.data.order_number,
              },
            });
          })
          .catch((error) => console.error(error));
      }
    }
  }

  return (
    <CenterWarpper>
      <TopNavBar />
      <S.PageWarpper onSubmit={handlePaymentButton}>
        <S.PageTitle>주문/결제하기</S.PageTitle>
        <PaymentTabTitle marginB="16px" />
        {orderInfo.map((_, i) => (
          <ProductInfo
            orderInfo={orderInfo}
            quantity={quantity}
            i={i}
            key={orderInfo[i].product_id}
          />
        ))}
        <S.TotalOrderPriceWarpper>
          <S.TotalOrderPrice>총 주문금액</S.TotalOrderPrice>
          <S.TotalOrderPriceNum>
            {totalPrice.toLocaleString()}
          </S.TotalOrderPriceNum>
        </S.TotalOrderPriceWarpper>
        <S.ShippingInfoTxt>배송정보</S.ShippingInfoTxt>
        <S.InfoTItle>주문자 정보</S.InfoTItle>
        <S.InfoInputWarpper>
          <I.NameInput />
          <I.PhoneNumInput />
          <I.EmailInput />
        </S.InfoInputWarpper>
        <S.InfoTItle>배송지 정보</S.InfoTItle>
        <S.InfoInputWarpper>
          <I.ReceiverInput
            value={receiver}
            register={register}
            onChange={onChange}
          />
          <I.PhoneNumInput
            value1={phone_number1}
            value2={phone_number2}
            value3={phone_number3}
            register={register}
            onChange={onChange}
            activation="true"
          />
          <I.AddressInput
            value1={zip_code}
            value2={address1}
            value3={address2}
            register={register}
            onChange={onChange}
            handleInputs={handleInputs}
            inputs={inputs}
          />
          <I.AddressMessageInput
            value={address_message}
            register={register}
            onChange={onChange}
          />
        </S.InfoInputWarpper>
        <S.BottomWarpper>
          <section>
            <S.ShippingInfoTxt>결제수단</S.ShippingInfoTxt>
            <S.PaymentWay>
              {paymentWay.map((x, i) => (
                <PaymentWayItem
                  value={x}
                  key={i}
                  i={i}
                  checked={checked}
                  setChecked={setChecked}
                  paymentWay={paymentWay}
                />
              ))}
            </S.PaymentWay>
          </section>
          <section>
            <S.ShippingInfoTxt>최종결제 정보</S.ShippingInfoTxt>
            <S.FinalPaymentInfo>
              <S.PriceCount>
                <S.PriceCountItem>
                  <S.PriceItemTxt>상품금액</S.PriceItemTxt>
                  <SPrice value={orderPrice.toLocaleString()} />
                </S.PriceCountItem>
                <S.PriceCountItem>
                  <S.PriceItemTxt>할인금액</S.PriceItemTxt>
                  <SPrice value="0" />
                </S.PriceCountItem>
                <S.PriceCountItem>
                  <S.PriceItemTxt>배송비</S.PriceItemTxt>
                  <SPrice value={totalShippingFee.toLocaleString()} />
                </S.PriceCountItem>
                <S.PriceCountItem>
                  <S.PriceItemTxt>결제금액</S.PriceItemTxt>
                  <S.TotalOrderPriceNum>
                    {(orderPrice + totalShippingFee).toLocaleString()}
                  </S.TotalOrderPriceNum>
                </S.PriceCountItem>
              </S.PriceCount>
              <CheckText marginB="30px" setChecked={setAgreeChecked} />
              {isValid && agreeChecked && payMethod !== null ? (
                <LButton
                  value="결제하기"
                  mobileWd="120px"
                  mobileHg="30px"
                  margin="0 0 0 25.41%"
                />
              ) : (
                <LDisabledButton
                  value="결제하기"
                  mobileWd="120px"
                  mobileHg="30px"
                  margin="0 0 0 25.41%"
                />
              )}
            </S.FinalPaymentInfo>
          </section>
        </S.BottomWarpper>
      </S.PageWarpper>
    </CenterWarpper>
  );
}
