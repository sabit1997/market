import { useEffect } from 'react';
import styled from 'styled-components';

export default function PaymentWayItem({
  i,
  value,
  checked,
  setChecked,
  paymentWay,
}) {
  console.log(checked);

  useEffect(() => {
    let initial = {};
    for (let i = 0; i < paymentWay.length; i++) {
      initial[`pay${i}`] = false;
    }
    setChecked(initial);
  }, [paymentWay.length, setChecked]);

  function handlePaymentClick() {
    for (let i = 0; i < paymentWay.length; i++) {
      checked[`pay${i}`] = false;
    }
    setChecked({
      ...checked,
      [`pay${i}`]: true,
    });
  }

  return (
    <Li onClick={handlePaymentClick}>
      <CheckBtn checked={checked} i={i} />
      {value}
    </Li>
  );
}

const Li = styled.li`
  display: flex;
  align-items: center;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.251875;
  margin-right: 20px;
  cursor: pointer;
  &:last-child {
    margin-right: 0;
  }
`;

const CheckBtn = styled.button`
  width: 20px;
  height: 20px;
  background-color: #fff;
  border: 2px solid #c4c4c4;
  border-radius: 50%;
  margin-right: 10px;
  position: relative;
  &::after {
    content: '';
    display: ${(props) =>
      props.checked[`pay${props.i}`] === false ? 'none;' : 'block;'};
    width: 12px;
    height: 12px;
    background-color: #21bf48;
    border-radius: 50%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;
