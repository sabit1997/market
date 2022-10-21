import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import instance from '../../client/instance';

function ProductBox({ i, productBoxData, setProductBoxData }) {
  const navigate = useNavigate();
  // 상품 삭제
  function handleDelteBtn() {
    instance
      .delete(`/products/${productBoxData[i].product_id}/`)
      .then((res) => {
        if (res.status === 204) {
          setProductBoxData(
            productBoxData.filter(
              (el) => el.product_id !== productBoxData[i].product_id
            )
          );
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <Warpper>
      <ProductImg src={productBoxData[i].image} />
      <ProductInfoWarpper>
        <ProductName>{productBoxData[i].product_name}</ProductName>
        <StockNum>{productBoxData[i].stock}</StockNum>
      </ProductInfoWarpper>
      <ProductPrice></ProductPrice>
      <Btn
        bg="#21BF48"
        onClick={() => {
          navigate('/');
        }}
      >
        수정
      </Btn>
      <Btn bg="#fff" onClick={handleDelteBtn}>
        삭제
      </Btn>
    </Warpper>
  );
}

const Warpper = styled.section`
  width: 1440px;
  height: 103px;
  display: flex;
  align-items: center;
  padding: 16px 30px;
  background-color: #fff;
  border-bottom: 1px solid #c4c4c4;
`;

const ProductImg = styled.img`
  width: 70px;
  height: 70px;
  border-radius: 50%;
  margin-right: 30px;
`;

const ProductInfoWarpper = styled.div`
  width: 500px;
  margin-right: 267px;
`;

const ProductName = styled.h2`
  width: 100%;
  font-size: 18px;
  font-weight: 400;
  line-height: 1.22;
  margin-bottom: 10px;
`;

const StockNum = styled.span`
  width: 100%;
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
