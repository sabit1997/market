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
} from './PaymentStyle';
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

export default function Payment({
  orderInfo,
  quantity,
  totalPrice,
  receiver,
  onChange,
  phone_number1,
  phone_number2,
  phone_number3,
  zip_code,
  address1,
  address2,
  setInputs,
  inputs,
  address_message,
  checked,
  setChecked,
  paymentWay,
  orderPrice,
  totalShippingFee,
  handlePaymentButton,
  setAgreeChecked,
}) {
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
            setInputs={setInputs}
            inputs={inputs}
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
              <LButton
                value="결제하기"
                mobileWd="120px"
                mobileHg="30px"
                margin="0 0 0 25.41%"
                onClick={handlePaymentButton}
              />
            </FinalPaymentInfo>
          </section>
        </BottomWarpper>
      </PageWarpper>
    </CenterWarpper>
  );
}
