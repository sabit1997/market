import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import instance from '../../client/instance';
import {
  PageWarpper,
  PageTitle,
  TotalOrderPriceWarpper,
  TotalOrderPrice,
  TotalOrderPriceNum,
  ShippingInfoTxt,
  InfoTItle,
  InfoInputWarpper,
  BottomWarpper,
  PaymentWay,
  FinalPaymentInfo,
  PriceCount,
  PriceCountItem,
  PriceItemTxt,
} from './PaymentPageStyle';
import {
  NameInput,
  PhoneNumInput,
  EmailInput,
  ReceiverInput,
  AddressInput,
  AddressMessageInput,
} from '../../components/input/PaymentInputs';
import PaymentWayItem from './PaymentWayItem';
import { CenterWarpper } from '../../components/common/Common';
import TopNavBar from '../../components/navBar/TopNavBar';
import { PaymentTabTitle } from '../../components/navBar/TabTitle';
import ProductInfo from '../../components/contents/ProductInfo';
import SPrice from '../../components/etc/SPrice';
import CheckText from '../../components/etc/CheckText';
import LButton from '../../components/button/LButton';
import LDisabledButton from '../../components/button/LDisabledButton';
import useInputs from '../../hooks/useInputs';
import { useForm } from 'react-hook-form';

export default function PaymentPage() {
  const {
    register,
    formState: { errors, isValid },
  } = useForm({ mode: 'onChange' });
  const navigate = useNavigate();
  const [paymentWay] = useState([
    '신용/체크카드',
    '무통장 입금',
    '휴대폰 결제',
    '네이버페이',
    '카카오페이',
  ]);
  const [checked, setChecked] = useState({});
  const [payMethod, setPayMethod] = useState(null);
  const [agreeChecked, setAgreeChecked] = useState(false);
  const location = useLocation();
  const orderInfo = location.state.orderProduct;
  const quantity = location.state.quantity;
  const orderKind = location.state.orderKind;
  const productId = location.state.productId;
  console.log(orderInfo);
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
  console.log(payMethod);

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

  const totalPrice = orderInfo
    .map((x, i) => x.shipping_fee + x.price * quantity[i])
    .reduce((pre, curr) => pre + curr, 0);

  const orderPrice = orderInfo
    .map((x, i) => x.price * quantity[i])
    .reduce((pre, curr) => pre + curr, 0);
  const totalShippingFee = orderInfo
    .map((x) => x.shipping_fee)
    .reduce((pre, curr) => pre + curr, 0);

  // 결제
  function handlePaymentButton(e) {
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
          .catch((error) => console.log(error));
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
          .catch((error) => console.log(error));
      }
    }
  }

  return (
    <CenterWarpper>
      <TopNavBar />
      <PageWarpper onSubmit={handlePaymentButton}>
        <PageTitle>주문/결제하기</PageTitle>
        <PaymentTabTitle marginB="16px" />
        {orderInfo.map((_, i) => (
          <ProductInfo
            orderInfo={orderInfo}
            quantity={quantity}
            i={i}
            key={orderInfo[i].product_id}
          />
        ))}
        <TotalOrderPriceWarpper>
          <TotalOrderPrice>총 주문금액</TotalOrderPrice>
          <TotalOrderPriceNum>{totalPrice.toLocaleString()}</TotalOrderPriceNum>
        </TotalOrderPriceWarpper>
        <ShippingInfoTxt>배송정보</ShippingInfoTxt>
        <InfoTItle>주문자 정보</InfoTItle>
        <InfoInputWarpper>
          <NameInput />
          <PhoneNumInput />
          <EmailInput />
        </InfoInputWarpper>
        <InfoTItle>배송지 정보</InfoTItle>
        <InfoInputWarpper>
          <ReceiverInput
            value={receiver}
            register={register}
            onChange={onChange}
          />
          <PhoneNumInput
            value1={phone_number1}
            value2={phone_number2}
            value3={phone_number3}
            register={register}
            onChange={onChange}
            activation="true"
          />
          <AddressInput
            value1={zip_code}
            value2={address1}
            value3={address2}
            register={register}
            onChange={onChange}
            handleInputs={handleInputs}
            inputs={inputs}
          />
          <AddressMessageInput
            value={address_message}
            register={register}
            onChange={onChange}
          />
        </InfoInputWarpper>
        <BottomWarpper>
          <section>
            <ShippingInfoTxt>결제수단</ShippingInfoTxt>
            <PaymentWay>
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
            </PaymentWay>
          </section>
          <section>
            <ShippingInfoTxt>최종결제 정보</ShippingInfoTxt>
            <FinalPaymentInfo>
              <PriceCount>
                <PriceCountItem>
                  <PriceItemTxt>상품금액</PriceItemTxt>
                  <SPrice value={orderPrice.toLocaleString()} />
                </PriceCountItem>
                <PriceCountItem>
                  <PriceItemTxt>할인금액</PriceItemTxt>
                  <SPrice value="0" />
                </PriceCountItem>
                <PriceCountItem>
                  <PriceItemTxt>배송비</PriceItemTxt>
                  <SPrice value={totalShippingFee.toLocaleString()} />
                </PriceCountItem>
                <PriceCountItem>
                  <PriceItemTxt>결제금액</PriceItemTxt>
                  <TotalOrderPriceNum>
                    {(orderPrice + totalShippingFee).toLocaleString()}
                  </TotalOrderPriceNum>
                </PriceCountItem>
              </PriceCount>
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
            </FinalPaymentInfo>
          </section>
        </BottomWarpper>
      </PageWarpper>
    </CenterWarpper>
  );
}
