import styled from 'styled-components';
import deleteIcon from '../assets/icon-delete.svg';
import Amount from './Amount';

function CartProductList(props) {
  return (
    <Warpper marginB={props.marginB}>
      <Label for="inp_radio" />
      <input type="radio" id="inp_radio" name="inp_radio" className="ir" />
      <Product src="" />
      <ProductInfoWarpper>
        <Seller>백엔드글로벌</Seller>
        <ProductName>딥러닝 개발자 무릎 담요</ProductName>
        <ProductPrice>17,500</ProductPrice>
        <Shipping>택배배송 / 무료배송</Shipping>
      </ProductInfoWarpper>
      <Amount />
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
  margin-bottom: 10px;
  position: relative;
  margin-bottom: 10px;
  /* 마지막 컴포넌트만 80px로 바꾸고 싶다... */
  &:last-child {
    margin-bottom: 80px;
  }
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
