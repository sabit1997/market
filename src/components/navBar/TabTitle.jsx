import styled from 'styled-components';

function TabTitle(props) {
  return (
    <Warpper marginB={props.marginB} category={props.category}>
      {props.category === 'payment' ? (
        <>
          <Txt marginR="360px" marginL="261px">
            상품정보
          </Txt>
          <Txt marginR="188px">할인</Txt>
          <Txt marginR="171px">배송비</Txt>
          <Txt>주문금액</Txt>
        </>
      ) : (
        <>
          <Label for="inp_radio" />
          <input type="radio" id="inp_radio" name="inp_radio" className="ir" />
          <Txt marginR="379px">상품정보</Txt>
          <Txt marginR="238px">수량</Txt>
          <Txt>상품금액</Txt>
        </>
      )}
    </Warpper>
  );
}

const Warpper = styled.section`
  display: flex;
  align-items: center;
  width: 1280px;
  height: 60px;
  background-color: #f2f2f2;
  border-radius: 10px;
  margin-bottom: ${(props) => props.marginB};
`;

const Label = styled.label`
  width: 20px;
  height: 20px;
  border: 2px solid #21bf48;
  border-radius: 50%;
  box-sizing: border-box;
  margin-left: 30px;
  margin-right: 314px;
`;

const Txt = styled.p`
  font-size: 18px;
  font-weight: 400;
  line-height: 1.25;
  margin-left: ${(props) => props.marginL};
  margin-right: ${(props) => props.marginR};
  word-break: keep-all;
`;
export default TabTitle;
