import styled from 'styled-components';
import TopNavBar from '../components/TopNavBar';
import TabTitle from '../components/TabTitle';
import ProductInfo from '../components/ProductInfo';
import SPrice from '../components/SPrice';
import MS16pButton from '../components/button/MS16pButton';
import CheckText from '../components/CheckText';
import LButton from '../components/button/LButton';

export default function Payment() {
  return (
    <>
      <TopNavBar />
      <PageWarpper>
        <PageTitle>주문/결제하기</PageTitle>
        <TabTitle category="payment" marginB="16px" />
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
    </>
  );
}

const PageWarpper = styled.section`
  width: 1280px;
  margin: 0 auto;
`;

const PageTitle = styled.h2`
  font-size: 36px;
  font-weight: 700;
  line-height: 1.222222222222222;
  margin: 54px 0 52px;
`;

const TotalOrderPriceWarpper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 96px;
`;

const TotalOrderPrice = styled.p`
  font-size: 18px;
  font-weight: 500;
  line-height: 1.252222222222222;
  margin-top: 5px;
  margin-right: 10px;
`;

const TotalOrderPriceNum = styled.span`
  font-size: 24px;
  font-weight: 700;
  line-height: 1.252083333333333;
  color: #eb5757;
  &::after {
    content: '원';
  }
`;

const ShippingInfoTxt = styled.h3`
  font-size: 24px;
  font-weight: 500;
  line-height: 1.252083333333333;
  margin-bottom: 18px;
`;

const InfoTItle = styled.p`
  font-size: 18px;
  font-weight: 500;
  line-height: 1.252222222222222;
  margin-bottom: 8px;
  position: relative;
  &::after {
    content: '';
    width: 100%;
    height: 2px;
    background-color: #c4c4c4;
    position: absolute;
    left: 0;
    bottom: -8px;
  }
`;

const InfoInputWarpper = styled.ul``;

const InfoInputItem = styled.li`
  display: flex;
  align-items: center;
  width: 100%;
  height: 56px;
  border-bottom: 1px solid #c4c4c4;
  margin-bottom: ${(props) => props.marginB};
`;

const InfoInputItemCol = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 152px;
  border-bottom: 1px solid #c4c4c4;
  margin-bottom: ${(props) => props.marginB};
`;

const Label = styled.label`
  width: 170px;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.251875;
  position: relative;
`;

const RowWarpper = styled.div`
  display: flex;
  margin-top: 8px;
  margin-bottom: 8px;
`;

const NormalInput = styled.input`
  width: ${(props) => props.wd};
  height: 40px;
  border: 1px solid #c4c4c4;
  margin: ${(props) => props.margin};
`;

// const PhoneNumberInputWarpper = styled.div`
//   display: flex;
// `;

const PhoneNumberInput = styled.input`
  width: 100px;
  height: 40px;
  border: 1px solid #c4c4c4;
  &:nth-child(2) {
    width: 80px;
  }
`;

const Dash = styled.span`
  font-size: 16px;
  font-weight: 400;
  line-height: 1.251875;
  margin: 0 10px;
`;

const BottomWarpper = styled.section`
  display: flex;
  justify-content: space-between;
`;

const PaymentWay = styled.ul`
  display: flex;
  width: 760px;
  padding: 18px 0 18px 12px;
  border-top: 2px solid #c4c4c4;
  border-bottom: 2px solid #c4c4c4;
`;

const PaymentWayItem = styled.li`
  display: flex;
  align-items: center;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.251875;
  margin-right: 20px;
  &::before {
    content: '';
    display: block;
    width: 20px;
    height: 20px;
    background-color: #fff;
    border: 2px solid #c4c4c4;
    border-radius: 50%;
    margin-right: 10px;
  }
  &:last-child {
    margin-right: 0;
  }
`;

const FinalPaymentInfo = styled.div`
  width: 480px;
  border: 2px solid #21bf48;
  border-radius: 10px;
  padding: 34px 24px;
  position: relative;
  &::after {
    content: '';
    width: 100%;
    height: 182px;
    background-color: #f2f2f2;
    position: absolute;
    z-index: -1;
    bottom: 0;
    left: 0;
  }
`;

const PriceCount = styled.ul``;

const PriceCountItem = styled.li`
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px;
  position: relative;
  &:nth-child(3) {
    margin-bottom: 49px;
    &::after {
      content: '';
      display: block;
      width: 100%;
      height: 1px;
      background-color: #c4c4c4;
      position: absolute;
      left: 0;
      bottom: -18px;
    }
  }
  &:last-child {
    margin-bottom: 59px;
  }
`;

const PriceItemTxt = styled.p`
  font-size: 16px;
  font-weight: 400;
  line-height: 1.251875;
  &::before {
    content: '- ';
  }
`;
