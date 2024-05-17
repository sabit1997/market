import React from 'react';
import styled from 'styled-components';

interface ProductInfoProps {
  // TODO: orderInfoType 수정
  orderInfo: any;
  quantity: number;
  i: number;
}

function ProductInfo({ orderInfo, quantity, i }: ProductInfoProps) {
  function shippingFee(value: number) {
    if (value === 0) {
      return '무료배송';
    } else {
      return value.toLocaleString() + '원';
    }
  }

  return (
    <Warpper>
      <ProductWarpper>
        <ProductImg src={orderInfo[i].image} />
        <InfoWarpper>
          <Seller>{orderInfo[i].seller_store}</Seller>
          <ProductName>{orderInfo[i].product_name}</ProductName>
          <ProductNum>수량: {quantity[i]}개</ProductNum>
        </InfoWarpper>
      </ProductWarpper>
      <Discount>-</Discount>
      <Shipping>{shippingFee(orderInfo[i].shipping_fee)}</Shipping>
      <OrderPrice>
        {(orderInfo[i].price * quantity[i]).toLocaleString()}원
      </OrderPrice>
    </Warpper>
  );
}

const Warpper = styled.section`
  width: 100%;
  max-width: 1280px;
  height: 130px;
  display: flex;
  align-items: center;
  padding: 8px 0 18px 0;
  position: relative;
  border-bottom: 1px solid #c4c4c4;
  margin-bottom: 16px;
  &:last-child {
    margin-bottom: 30px;
  }
`;

const ProductWarpper = styled.div`
  display: flex;
  width: 46.01%;
`;

const ProductImg = styled.img`
  width: 104px;
  height: 104px;
  border-radius: 10px;
  margin-right: 36px;
  @media ${(props) => props.theme.mobile} {
    width: 50px;
    height: 50px;
  }
`;

const InfoWarpper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const Seller = styled.p`
  font-size: 14px;
  font-weight: 400;
  line-height: 1.25;
  color: #767676;
  margin-bottom: 6px;
  @media ${(props) => props.theme.mobile} {
    font-size: 12px;
  }
`;

const ProductName = styled.h2`
  font-size: 18px;
  font-weight: 400;
  line-height: 1.22;
  margin-bottom: 10px;
  @media ${(props) => props.theme.mobile} {
    font-size: 12px;
  }
`;

const ProductNum = styled.span`
  font-size: 14px;
  font-weight: 400;
  line-height: 1.25;
  color: #767676;
  @media ${(props) => props.theme.mobile} {
    font-size: 12px;
  }
`;

const Discount = styled.p`
  width: 18.12%;
  font-size: 18px;
  font-weight: 400;
  line-height: 1.252222222222222;
  color: #767676;
  text-align: center;
  @media ${(props) => props.theme.mobile} {
    font-size: 12px;
  }
`;

const Shipping = styled.span`
  width: 17.81%;
  font-size: 18px;
  font-weight: 400;
  line-height: 1.25;
  color: #767676;
  word-break: keep-all;
  text-align: center;
  @media ${(props) => props.theme.mobile} {
    font-size: 12px;
  }
`;

const OrderPrice = styled.span`
  width: 18.04%;
  font-size: 18px;
  font-weight: 700;
  line-height: 1.25;
  word-break: keep-all;
  text-align: center;
  font-size: 12px;
`;

export default ProductInfo;
