import { useState } from 'react';
import styled from 'styled-components';
import minusIcon from '../../assets/icon-minus-line.svg';
import plusIcon from '../../assets/icon-plus-line.svg';
import { useLocation } from 'react-router-dom';

export default function Amount(props, { setAmountQuantity }) {
  const [quantity, setQuantity] = useState(1);
  const [overValue, setOverValue] = useState(false);
  const location = useLocation();

  function handleMinusButton() {
    switch (location.pathname) {
      case `/detail/${props.product_id}`:
        if (quantity >= 2) {
          setQuantity(quantity - 1);
          props.setAmountQuantity(quantity - 1);
        }
        if (props.stock + 1 > quantity) {
          setOverValue(false);
        }
        break;
      case '/cart':
        if (props.value >= 2) {
          setQuantity(props.value - 1);
          props.setAmountQuantity(props.value - 1);
        }
        if (props.stock + 1 > props.value) {
          setOverValue(false);
        }
        break;
      default:
        console.log('default');
    }
  }
  function handlePlusButton() {
    switch (location.pathname) {
      case `/detail/${props.product_id}`:
        if (props.stock - 1 === quantity) {
          setOverValue(true);
        }
        if (!overValue) {
          setQuantity(quantity + 1);
          props.setAmountQuantity(quantity + 1);
        }
        break;
      case '/cart':
        if (props.stock - 1 === props.value) {
          setOverValue(true);
        }
        if (!overValue) {
          setQuantity(props.value + 1);
          props.setAmountQuantity(props.value + 1);
        }
        break;
      default:
        console.log('break');
    }
  }

  return (
    <Quantity margin={props.margin} onClick={props.onClick}>
      <QuantityBtn onClick={handleMinusButton} />
      <QuantityNum>{[props.value]}</QuantityNum>
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
