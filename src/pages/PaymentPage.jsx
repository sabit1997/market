import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import instance from '../client/instance';
import Payment from '../template/payment/Payment';
import useInputs from '../hooks/useInputs';

export default function PaymentPage() {
  const navigate = useNavigate();
  const paymentWay = [
    '신용/체크카드',
    '무통장 입금',
    '휴대폰 결제',
    '네이버페이',
    '카카오페이',
  ];

  const [checked, setChecked] = useState({});
  const [payMethod, setPayMethod] = useState('');
  const [agreeChecked, setAgreeChecked] = useState(false);

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

  const location = useLocation();
  const orderInfo = location.state.orderProduct;
  const quantity = location.state.quantity;
  const orderKind = location.state.orderKind;
  const productId = location.state.productId;

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
  function handlePaymentButton() {
    if (agreeChecked) {
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

  console.log(agreeChecked);

  return (
    <Payment
      orderInfo={orderInfo}
      quantity={quantity}
      totalPrice={totalPrice}
      receiver={receiver}
      onChange={onChange}
      phone_number1={phone_number1}
      phone_number2={phone_number2}
      phone_number3={phone_number3}
      zip_code={zip_code}
      address1={address1}
      address2={address2}
      handleInputs={handleInputs}
      inputs={inputs}
      address_message={address_message}
      checked={checked}
      setChecked={setChecked}
      paymentWay={paymentWay}
      orderPrice={orderPrice}
      totalShippingFee={totalShippingFee}
      handlePaymentButton={handlePaymentButton}
      setAgreeChecked={setAgreeChecked}
    />
  );
}
