import { useState } from 'react';
import styled from 'styled-components';
import minusIcon from '../../assets/icon-minus-line.svg';
import plusIcon from '../../assets/icon-plus-line.svg';

export default function Amount(props) {
  const [quantity, setQuantity] = useState(1);
  const [overValue, setOverValue] = useState(false);
  console.log(props.stock);
  function handleMinusButton() {
    if (quantity >= 2) {
      setQuantity(quantity - 1);
    }
  }
  function handlePlusButton() {
    if (props.stock - 1 === quantity) {
      setOverValue(true);
    }
    if (!overValue) {
      setQuantity(quantity + 1);
    }
  }
  return (
    <Quantity marginT={props.marginT}>
      <QuantityBtn onClick={handleMinusButton} />
      <QuantityNum>{quantity}</QuantityNum>
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
  margin-right: 148px;
  margin-top: ${(props) => props.marginT};
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
