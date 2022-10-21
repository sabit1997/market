import { useEffect, useState } from 'react';
import styled from 'styled-components';
import deleteIcon from '../../assets/icon-delete.svg';
import Amount from '../etc/Amount';

function CartProductList({ cartData, cartItem, i, setChecked, checked }) {
  function shippingValue(fee, method) {
    if (method === 'PARCEL') {
      if (fee === 0) {
        return '소포배송 / 무료배송';
      } else if (fee !== 0) {
        return `소포배송 / ${fee?.toLocaleString()}원`;
      }
    } else if (method === 'DELIVERY') {
      if (fee === 0) {
        return '택배배송 / 무료배송';
      } else if (fee !== 0) {
        return `택배배송 / ${fee?.toLocaleString()}원`;
      }
    }
  }

  // function handleCheckButton() {
  //   if (checked.i === false) {
  //     setChecked({
  //       ...checked,
  //       [i]: true,
  //     });
  //   } else if (checked.i === true) {
  //     setChecked({
  //       ...checked,
  //       [i]: false,
  //     });
  //   }
  // }

  if (cartItem !== '') {
    return (
      <Warpper>
        <CheckButton checked={checked} /*onClick={handleCheckButton}*/ />
        <Product src={cartItem[i].image} />
        <ProductInfoWarpper>
          <Seller>{cartItem[i].store_name}</Seller>
          <ProductName>{cartItem[i].product_name}</ProductName>
          <ProductPrice>{`${cartItem[
            i
          ].price?.toLocaleString()}원`}</ProductPrice>
          <Shipping>
            {shippingValue(
              cartItem[i].shipping_fee,
              cartItem[i].shipping_method
            )}
          </Shipping>
        </ProductInfoWarpper>
        <Amount value={cartData[i].quantity} />
        <OderWarpper>
          <OrderPrice>
            {`${(
              cartItem[i].price * cartData[i].quantity +
              cartItem[i].shipping_fee
            )?.toLocaleString()}원`}
          </OrderPrice>
          <OrderBtn>주문하기</OrderBtn>
        </OderWarpper>
        <DeleteBtn />
      </Warpper>
    );
  }
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
  margin-top: 35px;
  margin-bottom: 10px;
  /* 마지막 컴포넌트만 80px로 바꾸고 싶다... */
  &:last-child {
    margin-bottom: 80px;
  }
`;

const CheckButton = styled.button`
  box-sizing: border-box;
  width: 20px;
  height: 20px;
  border: 2px solid #21bf48;
  border-radius: 50%;
  margin-right: 40px;
  cursor: pointer;
  position: relative;
  &::after {
    content: '';
    display: ${(props) => (props.checked.i === false ? 'none;' : 'block')};
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background-color: #21bf48;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
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
