import { useEffect } from 'react';
import { useState } from 'react';
import React from 'react';

import { Warpper, AllCheckBtn, Txt } from './TabTItleStyle';

interface CartTabTitleProps {
  checked: { [key: string]: boolean };
  setChecked: React.Dispatch<React.SetStateAction<{ [key: string]: boolean }>>;
  marginB?: string;
}

export function CartTabTitle(props: CartTabTitleProps) {
  const [allChecked, setAllChecked] = useState(true);

  useEffect(() => {
    const valuesArr = Object.values(props.checked);
    const verification = (value: boolean) => value === true;
    if (valuesArr.every(verification)) {
      setAllChecked(true);
    } else {
      setAllChecked(false);
    }
  }, [props.checked]);

  function handleSellectAllButton() {
    if (allChecked) {
      const value: { [key: string]: boolean } = {};
      for (let i = 0; i < Object.keys(props.checked).length; i++) {
        value[`product${i}`] = false;
      }
      props.setChecked(value);
    } else {
      const value: { [key: string]: boolean } = {};
      for (let i = 0; i < Object.keys(props.checked).length; i++) {
        value[`product${i}`] = true;
      }
      props.setChecked(value);
    }
  }

  return (
    <Warpper marginB={props.marginB}>
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

export function PaymentTabTitle(props: { marginB?: string }) {
  return (
    <Warpper marginB={props.marginB}>
      <Txt wd="46.01%">상품정보</Txt>
      <Txt wd="18.12%">할인</Txt>
      <Txt wd="17.81%">배송비</Txt>
      <Txt wd="18.04%">주문금액</Txt>
    </Warpper>
  );
}
