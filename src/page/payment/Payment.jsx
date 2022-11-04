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
} from '../../components/payment/Payment';
import {
  NameInput,
  PhoneNumInput,
  EmailInput,
  ReceiverInput,
  AddressInput,
  AddressMessageInput,
} from '../../components/input/PaymentInputs';
import PaymentWayItem from '../../components/payment/PaymentWayItem';
import { CenterWarpper } from '../../components/common/Common';
import TopNavBar from '../../components/navBar/TopNavBar';
import { PaymentTabTitle } from '../../components/navBar/TabTitle';
import ProductInfo from '../../components/contents/ProductInfo';
import SPrice from '../../components/etc/SPrice';
import CheckText from '../../components/etc/CheckText';
import LButton from '../../components/button/LButton';
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';

export default function Payment() {
  const paymentWay = [
    '신용/체크카드',
    '무통장 입금',
    '휴대폰 결제',
    '네이버페이',
    '카카오페이',
  ];

  const [checked, setChecked] = useState({});

  const [payMethod, setPayMethod] = useState('');

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

  const [inputs, setInputs] = useState({
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

  function onChange(e) {
    const { value, name } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  }

  console.log(inputs);

  const location = useLocation();
  const orderInfo = location.state.orderProduct;
  const quantity = location.state.quantity;
  console.log(orderInfo);
  console.log(quantity);

  const totalPrice = orderInfo
    .map((x, i) => x.shipping_fee + x.price * quantity[i])
    .reduce((pre, curr) => pre + curr, 0)
    .toLocaleString();

  return (
    <CenterWarpper>
      <TopNavBar />
      <PageWarpper>
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
          <TotalOrderPriceNum>{totalPrice}</TotalOrderPriceNum>
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
          <ReceiverInput name="receiver" value={receiver} onChange={onChange} />
          <PhoneNumInput
            name1="phone_number1"
            value1={phone_number1}
            name2="phone_number2"
            value2={phone_number2}
            name3="phone_number3"
            value3={phone_number3}
            onChange={onChange}
          />
          <AddressInput
            name1="zip_code"
            value1={zip_code}
            name2="address1"
            value2={address1}
            name3="address2"
            value3={address2}
            onChange={onChange}
          />
          <AddressMessageInput
            name="address_message"
            value={address_message}
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
                  <SPrice />
                </PriceCountItem>
                <PriceCountItem>
                  <PriceItemTxt>할인금액</PriceItemTxt>
                  <SPrice />
                </PriceCountItem>
                <PriceCountItem>
                  <PriceItemTxt>배송비</PriceItemTxt>
                  <SPrice />
                </PriceCountItem>
                <PriceCountItem>
                  <PriceItemTxt>결제금액</PriceItemTxt>
                  <TotalOrderPriceNum>46,500</TotalOrderPriceNum>
                </PriceCountItem>
              </PriceCount>
              <CheckText marginB="30px" />
              <LButton value="결제하기" margin="0 138px 0 122px" />
            </FinalPaymentInfo>
          </section>
        </BottomWarpper>
      </PageWarpper>
    </CenterWarpper>
  );
}
