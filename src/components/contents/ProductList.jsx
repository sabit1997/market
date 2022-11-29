import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

function ProductList({ productData }) {
  const navigate = useNavigate();
  return (
    <Warpper
      onClick={() => {
        navigate(`/detail/${productData.product_id}`);
      }}
    >
      <ProductImg src={productData.image} />
      <Seller>{productData.store_name}</Seller>
      <ProductName>{productData.product_name}</ProductName>
      <ProductPrice>{productData.price.toLocaleString()}</ProductPrice>
    </Warpper>
  );
}

const Warpper = styled.li`
  width: 380px;
  height: 490px;
  background-color: #fff;
  @media screen and (max-width: 390px) {
    width: 160px;
    height: fit-content;
  }
`;

const ProductImg = styled.img`
  width: 380px;
  height: 380px;
  border-radius: 10px;
  border: 1px solid #c4c4c4;
  margin-bottom: 16px;
  @media screen and (max-width: 390px) {
    width: 160px;
    height: 160px;
    margin-bottom: 0;
    display: block;
  }
`;

const Seller = styled.span`
  font-size: 16px;
  font-weight: 400;
  line-height: 1.375;
  color: #767676;
  margin-bottom: 10px;
  @media screen and (max-width: 390px) {
    font-size: 8px;
  }
`;

const ProductName = styled.h2`
  font-size: 18px;
  font-weight: 400;
  line-height: 1.22;
  margin-bottom: 10px;
  @media screen and (max-width: 390px) {
    font-size: 12px;
    margin-bottom: 0;
  }
`;

const ProductPrice = styled.span`
  font-size: 24px;
  font-weight: 700;
  line-height: 1.25;
  position: relative;
  @media screen and (max-width: 390px) {
    font-size: 12px;
  }
  &::after {
    content: '원';
    font-size: 16px;
    font-weight: 400;
    line-height: 1.25;
    position: absolute;
    top: 50%;
    transform: translate(0, -50%);
    @media screen and (max-width: 390px) {
      font-size: 14px;
    }
  }
`;

export default ProductList;
