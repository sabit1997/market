import { useEffect } from 'react';
import { useState } from 'react';
import { Warpper, AllCheckBtn, Txt } from './TabTItleStyle';

export function CartTabTitle(props) {
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
      <AllCheckBtn
        type="button"
        allChecked={allChecked}
        onClick={handleSellectAllButton}
      />
      <Txt marginR="379px">상품정보</Txt>
      <Txt marginR="238px">수량</Txt>
      <Txt>상품금액</Txt>
    </Warpper>
  );
}

export function PaymentTabTitle(props) {
  return (
    <Warpper marginB={props.marginB}>
      <Txt marginR="360px" marginL="261px">
        상품정보
      </Txt>
      <Txt marginR="188px">할인</Txt>
      <Txt marginR="171px">배송비</Txt>
      <Txt>주문금액</Txt>
    </Warpper>
  );
}
