import styled from 'styled-components';
import minusIcon from '../../assets/icon-minus-line.svg';
import plusIcon from '../../assets/icon-plus-line.svg';

export default function Amount(props) {
  return (
    <Quantity marginT={props.marginT}>
      <QuantityBtn />
      <QuantityNum>1</QuantityNum>
      <QuantityBtn />
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
`;

const QuantityBtn = styled.button`
  width: 47px;
  height: 50px;
  background-image: url(${minusIcon});
  background-repeat: no-repeat;
  background-size: 20px;
  background-position: center;
  border-right: 1px solid #c4c4c4c4;
  &:last-child {
    background-image: url(${plusIcon});
    border-right: none;
    border-left: 1px solid #c4c4c4c4;
  }
`;

const QuantityNum = styled.p`
  font-size: 18px;
  font-weight: 400;
  line-height: 1.25;
`;
