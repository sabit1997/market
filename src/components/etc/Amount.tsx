import { useState } from 'react';
import React from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';

import minusIcon from '../../assets/icon-minus-line.svg';
import plusIcon from '../../assets/icon-plus-line.svg';
// TODO: 타입 리펙토링
interface AmountProps {
  product_id?: string;
  setAmountQuantity: React.Dispatch<React.SetStateAction<number>>;
  amountQuantity?: number;
  setChangeQuantity: React.Dispatch<React.SetStateAction<number>>;
  changeQuantity: number;
  stock: number;
  margin?: string;
  onClick?: any;
  value: number;
  loginType?: 'SELLER' | 'BUYER';
  justSelf?: string;
}

export default function Amount({
  product_id,
  setAmountQuantity,
  amountQuantity,
  setChangeQuantity,
  changeQuantity,
  stock,
  margin,
  onClick,
  value,
  loginType,
  justSelf,
}: AmountProps) {
  const [overValue, setOverValue] = useState(false);
  const location = useLocation();

  function handleMinusButton() {
    switch (location.pathname) {
      case `/detail/${product_id}`:
        if (loginType !== 'SELLER') {
          if (amountQuantity >= 2) {
            setAmountQuantity(amountQuantity - 1);
          }
          if (stock + 1 > amountQuantity) {
            setOverValue(false);
          }
        }
        break;
      case '/cart':
        if (changeQuantity >= 2) {
          setChangeQuantity(changeQuantity - 1);
        }
        if (stock + 1 > changeQuantity) {
          setOverValue(false);
        }
        break;
    }
  }

  function handlePlusButton() {
    switch (location.pathname) {
      case `/detail/${product_id}`:
        if (loginType !== 'SELLER') {
          if (stock - 1 === amountQuantity) {
            setOverValue(true);
          }
          if (!overValue) {
            setAmountQuantity(amountQuantity + 1);
          }
        }
        break;
      case '/cart':
        if (stock - 1 === changeQuantity) {
          setOverValue(true);
        }
        if (!overValue) {
          setChangeQuantity(changeQuantity + 1);
        }
        break;
    }
  }

  return (
    <Quantity margin={margin} justSelf={justSelf} onClick={onClick}>
      <QuantityBtn onClick={handleMinusButton} />
      <QuantityNum>{value}</QuantityNum>
      <QuantityBtn onClick={handlePlusButton} overValue={overValue} />
    </Quantity>
  );
}

const Quantity = styled.div<{ margin: string; justSelf: string }>`
  max-width: 150px;
  width: 80%;
  height: 50px;
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: ${(props) => props.margin};
  border: 1px solid #c4c4c4c4;
  overflow: hidden;
  justify-self: ${(props) => props.justSelf};
  @media screen and (max-width: 390px) {
    max-width: 85px;
    height: 30px;
    margin: ${(props) => (props.margin === '52px 0 0' ? '20px 0 0' : null)};
  }
`;

interface QuantityBtnProps {
  readonly overValue?: boolean;
}

const QuantityBtn = styled.button`
  width: 33.33%;
  height: 100%;
  background-color: #fff;
  background-image: url(${minusIcon});
  background-repeat: no-repeat;
  background-size: 20px;
  background-position: center;
  border-right: 1px solid #c4c4c4c4;
  @media screen and (max-width: 390px) {
    background-size: 12px;
  }
  cursor: pointer;
  &:last-child {
    background-image: url(${plusIcon});
    border-right: none;
    border-left: 1px solid #c4c4c4c4;
    background-color: ${(props: QuantityBtnProps) =>
      props.overValue === true ? '#E0E0E0' : '#fff'};
  }
`;

const QuantityNum = styled.p`
  font-size: 18px;
  font-weight: 400;
  line-height: 1.25;
  @media screen and (max-width: 390px) {
    font-size: 14px;
  }
`;
