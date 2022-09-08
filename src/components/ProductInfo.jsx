import styled from 'styled-components';

function ProductInfo() {
  return (
    <Warpper>
      <ProductImg src="" />
      <InfoWarpper>
        <Seller>백엔드글로벌</Seller>
        <ProductName>딥러닝 개발자 무릎 담요</ProductName>
        <ProductNum>수량: 1개</ProductNum>
      </InfoWarpper>
      <Discount>-</Discount>
      <Shipping>무료배송</Shipping>
      <OrderPrice>17,500원</OrderPrice>
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
