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
  }, [props.checked]);

  // 전체 선택, 전체 해제
  function handleSellectAllButton() {
    if (allChecked) {
      let value = {};
      for (let i = 0; i < Object.keys(props.checked).length; i++) {
        value[`product${i}`] = false;
      }
      props.setChecked(value);
    } else {
      let value = {};
      for (let i = 0; i < Object.keys(props.checked).length; i++) {
        value[`product${i}`] = true;
      }
      props.setChecked(value);
    }
  }

  return (
    <Warpper marginB={props.marginB} category={props.category}>
      <AllCheckBtn
        type="button"
        allChecked={allChecked}
        onClick={handleSellectAllButton}
      />
      <Txt wd="47.73%">상품정보</Txt>
      <Txt wd="19.37%">수량</Txt>
      <Txt wd="25.70%">상품금액</Txt>
    </Warpper>
  );
}

export function PaymentTabTitle(props) {
  return (
    <Warpper marginB={props.marginB}>
      <Txt wd="46.01%">상품정보</Txt>
      <Txt wd="18.12%">할인</Txt>
      <Txt wd="17.81%">배송비</Txt>
      <Txt wd="18.04%">주문금액</Txt>
    </Warpper>
  );
}
