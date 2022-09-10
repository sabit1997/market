import styled from 'styled-components';

function ProductBox() {
  return (
    <Warpper>
      <ProductImg src="" />
      <div>
        <ProductName>딥러닝 개발자 무릎 담요</ProductName>
        <StockNum>수량: 1개</StockNum>
      </div>
      <ProductPrice>17,500원</ProductPrice>
      <Btn bg="#21BF48">수정</Btn>
      <Btn bg="#fff">삭제</Btn>
    </Warpper>
  );
}

const Warpper = styled.section`
  width: 100%;
  height: 103px;
  display: flex;
  align-items: center;
  padding: 16px 30px;
`;

const ProductImg = styled.img`
  width: 70px;
  height: 70px;
  border-radius: 50%;
  margin-right: 30px;
`;

const ProductName = styled.h2`
  width: 500px;
  font-size: 18px;
  font-weight: 400;
  line-height: 1.22;
  margin-right: 267px;
  margin-bottom: 10px;
`;

const StockNum = styled.span`
  font-size: 16px;
  font-weight: 400;
  line-height: 1.25;
  color: #767676;
`;

const ProductPrice = styled.p`
  font-size: 18px;
  font-weight: 500;
  line-height: 1.22;
  margin-right: 217px;
`;

const Btn = styled.button`
  height: 40px;
  padding: 0 25px;
  border-radius: 5px;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.25;
  word-break: keep-all;
  background-color: ${(props) => props.bg};
  color: ${(props) => (props.bg === '#21BF48' ? '#fff' : '#767676')};
  border: ${(props) => (props.bg === '#fff' ? '1px solid #c4c4c4' : null)};
  margin-right: 60px;
  &:last-child {
    margin-right: 0;
  }
`;

export default ProductBox;
