import styled from 'styled-components';

function ProductInfo({ orderInfo, quantity, i }) {
  function shippingFee(value) {
    if (value === 0) {
      return '무료배송';
    } else {
      return value.toLocaleString() + '원';
    }
  }

  return (
    <Warpper>
      <ProductImg src={orderInfo[i].image} />
      <InfoWarpper>
        <Seller>{orderInfo[i].seller_store}</Seller>
        <ProductName>{orderInfo[i].product_name}</ProductName>
        <ProductNum>수량: {quantity[i]}개</ProductNum>
      </InfoWarpper>
      <Discount>-</Discount>
      <Shipping>{shippingFee(orderInfo[i].shipping_fee)}</Shipping>
      <OrderPrice>
        {(orderInfo[i].price * quantity[i]).toLocaleString()}
      </OrderPrice>
    </Warpper>
  );
}

const Warpper = styled.section`
  width: 1280px;
  height: 130px;
  display: flex;
  align-items: center;
  padding: 8px 0 18px 8px;
  position: relative;
  border-bottom: 1px solid #c4c4c4;
  margin-bottom: 16px;
  &:last-child {
    margin-bottom: 30px;
  }
`;

const ProductImg = styled.img`
  width: 104px;
  height: 104px;
  border-radius: 10px;
  margin-right: 36px;
`;

const InfoWarpper = styled.div`
  width: 442px;
  display: flex;
  flex-direction: column;
  margin-right: 111px;
`;

const Seller = styled.p`
  font-size: 14px;
  font-weight: 400;
  line-height: 1.25;
  color: #767676;
  margin-bottom: 6px;
`;

const ProductName = styled.h2`
  width: 442px;
  font-size: 18px;
  font-weight: 400;
  line-height: 1.22;
  margin-bottom: 10px;
`;

const ProductNum = styled.span`
  font-size: 14px;
  font-weight: 400;
  line-height: 1.25;
  color: #767676;
`;

const Discount = styled.p`
  font-size: 18px;
  font-weight: 400;
  line-height: 1.252222222222222;
  color: #767676;
  margin-right: 193px;
`;

const Shipping = styled.span`
  font-size: 18px;
  font-weight: 400;
  line-height: 1.25;
  color: #767676;
  margin-right: 158px;
  word-break: keep-all;
`;

const OrderPrice = styled.span`
  font-size: 18px;
  font-weight: 700;
  line-height: 1.25;
  word-break: keep-all;
`;

export default ProductInfo;
