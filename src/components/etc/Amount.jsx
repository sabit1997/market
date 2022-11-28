import { useState } from 'react';
import styled from 'styled-components';
import minusIcon from '../../assets/icon-minus-line.svg';
import plusIcon from '../../assets/icon-plus-line.svg';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';

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
}) {
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
      default:
        console.log('default');
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
      default:
        console.log('break');
    }
  }

  return (
    <Quantity margin={margin} onClick={onClick}>
      <QuantityBtn onClick={handleMinusButton} />
      <QuantityNum>{value}</QuantityNum>
      <QuantityBtn onClick={handlePlusButton} overValue={overValue} />
    </Quantity>
  );
}

const Quantity = styled.div`
  width: 150px;
  height: 50px;
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: ${(props) => props.margin};
  border: 1px solid #c4c4c4c4;
  overflow: hidden;
`;

const QuantityBtn = styled.button`
  width: 47px;
  height: 48px;
  background-color: #fff;
  background-image: url(${minusIcon});
  background-repeat: no-repeat;
  background-size: 20px;
  background-position: center;
  border-right: 1px solid #c4c4c4c4;
  cursor: pointer;
  &:last-child {
    background-image: url(${plusIcon});
    border-right: none;
    border-left: 1px solid #c4c4c4c4;
    background-color: ${(props) =>
      props.overValue === true ? '#E0E0E0' : '#fff'};
  }
`;

const QuantityNum = styled.p`
  font-size: 18px;
  font-weight: 400;
  line-height: 1.25;
`;
