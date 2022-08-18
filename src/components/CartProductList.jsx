import styled from 'styled-components';
import minusIcon from '../assets/icon-minus-line.svg';
import plusIcon from '../assets/icon-plus-line.svg';
import deleteIcon from '../assets/icon-delete.svg';

function CartProductList() {
  return (
    <Warpper>
      <Label for="inp_radio" />
      <input type="radio" id="inp_radio" name="inp_radio" className="ir" />
      <Product src="" />
      <ProductInfoWarpper>
        <Seller>백엔드글로벌</Seller>
        <ProductName>딥러닝 개발자 무릎 담요</ProductName>
        <ProductPrice>17,500</ProductPrice>
        <Shipping>택배배송 / 무료배송</Shipping>
      </ProductInfoWarpper>
      <Quantity>
        <QuantityBtn />
        <QuantityNum>1</QuantityNum>
        <QuantityBtn />
      </Quantity>
      <OderWarpper>
        <OrderPrice>17,500원</OrderPrice>
        <OrderBtn>주문하기</OrderBtn>
      </OderWarpper>
      <DeleteBtn />
    </Warpper>
  );
}

const Warpper = styled.section`
  display: flex;
  align-items: center;
  width: 1280px;
  height: 200px;
  background-color: #fff;
  border: 2px solid #e0e0e0;
  border-radius: 10px;
  padding: 20px 0 20px 30px;
  position: relative;
`;

const Label = styled.label`
  box-sizing: border-box;
  width: 20px;
  height: 20px;
  border: 2px solid #21bf48;
  border-radius: 50%;
  margin-right: 40px;
`;

const Product = styled.img`
  width: 160px;
  height: 160px;
  border-radius: 10px;
  margin-right: 36px;
`;

const ProductInfoWarpper = styled.div`
  display: flex;
  flex-direction: column;
  width: 418px;
  height: 100%;
  margin-right: 48px;
`;

const Seller = styled.p`
  font-size: 14px;
  font-weight: 400;
  line-height: 1.25;
  color: #767676;
  margin-bottom: 10px;
`;

const ProductName = styled.h2`
  font-size: 18px;
  font-weight: 400;
  line-height: 1.22;
  margin-bottom: 10px;
`;

const ProductPrice = styled.span`
  font-size: 16px;
  font-weight: 700;
  line-height: 1.25;
  margin-bottom: 40px;
`;

const Shipping = styled.span`
  font-size: 14px;
  font-weight: 400;
  line-height: 1.25;
  color: #767676;
`;

const Quantity = styled.div`
  width: 150px;
  height: 50px;
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-right: 148px;
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

const OderWarpper = styled.div`
  text-align: center;
`;

const OrderPrice = styled.p`
  font-size: 18px;
  font-weight: 700;
  line-height: 1.25;
  color: #eb5757;
  margin-bottom: 26px;
`;

const OrderBtn = styled.button`
  font-size: 16px;
  font-weight: 500;
  line-height: 1.25;
  height: 40px;
  padding: 0 35.63px;
  background-color: #21bf48;
  color: #fff;
  border-radius: 5px;
`;

const DeleteBtn = styled.button`
  width: 22px;
  height: 22px;
  background-image: url(${deleteIcon});
  background-position: center;
  background-size: contain;
  position: absolute;
  right: 18px;
  top: 18px;
`;

export default CartProductList;
