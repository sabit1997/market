import styled from 'styled-components';

function TabTitle() {
  return (
    <Warpper>
      <Label for="inp_radio" />
      <input type="radio" id="inp_radio" name="inp_radio" className="ir" />
      <Txt>상품정보</Txt>
      <Txt>수량</Txt>
      <Txt>상품금액</Txt>
    </Warpper>
  );
}

const Warpper = styled.section`
  display: flex;
  align-items: center;
  width: 100%;
  height: 60px;
  background-color: #f2f2f2;
  border-radius: 10px;
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
`;
export default TabTitle;
