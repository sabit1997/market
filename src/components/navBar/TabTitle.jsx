import { useEffect } from 'react';
import { useState } from 'react';
import styled from 'styled-components';

function TabTitle(props) {
  const [allChecked, setAllChecked] = useState(true);

  // checked 상태에 따라 상단 체크 버튼 변화
  useEffect(() => {
    const valuesArr = Object.values(props.checked);
    const verification = (value) => value === true;
    if (valuesArr.every(verification)) {
      setAllChecked(true);
    } else {
      setAllChecked(false);
    }
    console.log(valuesArr.every(verification));
  }, [props.checked]);

  // 전체 선택, 전체 해제
  function handleSellectAllButton() {
    if (allChecked) {
      let value = {};
      for (let i = 0; i < Object.keys(props.checked).length; i++) {
        value[`product${i}`] = false;
      }
      console.log(value);
      props.setChecked(value);
    } else {
      let value = {};
      for (let i = 0; i < Object.keys(props.checked).length; i++) {
        value[`product${i}`] = true;
      }
      console.log(value);
      props.setChecked(value);
    }
  }

  console.log(props.checked);

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
          <AllCheckBtn
            type="button"
            allChecked={allChecked}
            onClick={handleSellectAllButton}
          />
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

const AllCheckBtn = styled.button`
  width: 20px;
  height: 20px;
  border: 2px solid #21bf48;
  border-radius: 50%;
  box-sizing: border-box;
  margin-left: 30px;
  margin-right: 314px;
  position: relative;
  &::after {
    content: '';
    display: ${(props) => (props.allChecked === false ? 'none;' : 'block')};
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background-color: #21bf48;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
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
