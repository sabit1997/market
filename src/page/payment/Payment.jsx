import {
  PageWarpper,
  PageTitle,
  TotalOrderPriceWarpper,
  TotalOrderPrice,
  TotalOrderPriceNum,
  ShippingInfoTxt,
  InfoTItle,
  InfoInputWarpper,
  InfoInputItem,
  Label,
  NormalInput,
  PhoneNumberInput,
  Dash,
  InfoInputItemCol,
  RowWarpper,
  BottomWarpper,
  PaymentWay,
  FinalPaymentInfo,
  PaymentWayItem,
  PriceCount,
  PriceCountItem,
  PriceItemTxt,
} from '../../components/payment/Payment';
import { CenterWarpper } from '../../components/common/Common';
import TopNavBar from '../../components/navBar/TopNavBar';
import { PaymentTabTitle } from '../../components/navBar/TabTitle';
import ProductInfo from '../../components/contents/ProductInfo';
import SPrice from '../../components/etc/SPrice';
import MS16pButton from '../../components/button/MS16pButton';
import CheckText from '../../components/etc/CheckText';
import LButton from '../../components/button/LButton';

export default function Payment() {
  return (
    <CenterWarpper>
      <TopNavBar />
      <PageWarpper>
        <PageTitle>주문/결제하기</PageTitle>
        <PaymentTabTitle marginB="16px" />
        <ProductInfo />
        <TotalOrderPriceWarpper>
          <TotalOrderPrice>총 주문금액</TotalOrderPrice>
          <TotalOrderPriceNum>46,500</TotalOrderPriceNum>
        </TotalOrderPriceWarpper>
        <ShippingInfoTxt>배송정보</ShippingInfoTxt>
        <InfoTItle>주문자 정보</InfoTItle>
        <InfoInputWarpper>
          <InfoInputItem>
            <Label>이름</Label>
            <NormalInput wd="334px" />
          </InfoInputItem>
          <InfoInputItem>
            <Label>휴대폰</Label>
            <PhoneNumberInput />
            <Dash>-</Dash>
            <PhoneNumberInput />
            <Dash>-</Dash>
            <PhoneNumberInput />
          </InfoInputItem>
          <InfoInputItem marginB="40px">
            <Label>이메일</Label>
            <NormalInput wd="334px" />
          </InfoInputItem>
        </InfoInputWarpper>
        <InfoTItle>배송지 정보</InfoTItle>
        <InfoInputWarpper>
          <InfoInputItem>
            <Label>수령인</Label>
            <NormalInput wd="334px" />
          </InfoInputItem>
          <InfoInputItem>
            <Label>휴대폰</Label>
            <PhoneNumberInput />
            <Dash>-</Dash>
            <PhoneNumberInput />
            <Dash>-</Dash>
            <PhoneNumberInput />
          </InfoInputItem>
          <InfoInputItemCol>
            <RowWarpper>
              <Label>배송주소</Label>
              <NormalInput wd="170px" margin="0 10px 0 0" />
              <MS16pButton value="우편번호 조회" wd="154px" hg="40px" />
            </RowWarpper>
            <NormalInput wd="800px" margin="0 0 8px 170px" />
            <NormalInput wd="800px" margin="0 0 8px 170px" />
          </InfoInputItemCol>
          <InfoInputItem marginB="70px">
            <Label>배송 메시지</Label>
            <NormalInput wd="800px" />
          </InfoInputItem>
        </InfoInputWarpper>
        <BottomWarpper>
          <section>
            <ShippingInfoTxt>결제수단</ShippingInfoTxt>
            <PaymentWay>
              <PaymentWayItem>신용/체크카드</PaymentWayItem>
              <PaymentWayItem>무통장 입금</PaymentWayItem>
              <PaymentWayItem>휴대폰 결제</PaymentWayItem>
              <PaymentWayItem>네이버페이</PaymentWayItem>
              <PaymentWayItem>카카오페이</PaymentWayItem>
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
