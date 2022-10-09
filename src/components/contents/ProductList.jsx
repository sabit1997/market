import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

function ProductList({ productItem, i }) {
  const navigate = useNavigate();
  return (
    <Warpper
      onClick={() => {
        navigate(`/detail/${productItem[i].product_id}`);
      }}
    >
      <ProductImg src={productItem[i].image} />
      <Seller>{productItem[i].seller}</Seller>
      <ProductName>{productItem[i].product_name}</ProductName>
      <ProductPrice>{productItem[i].price}</ProductPrice>
    </Warpper>
  );
}

const Warpper = styled.li`
  width: 380px;
  height: 490px;
  background-color: #fff;
`;

const ProductImg = styled.img`
  width: 380px;
  height: 380px;
  border-radius: 10px;
  border: 1px solid #c4c4c4;
  margin-bottom: 16px;
`;

const Seller = styled.span`
  font-size: 16px;
  font-weight: 400;
  line-height: 1.375;
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
  font-size: 24px;
  font-weight: 700;
  line-height: 1.25;
  position: relative;
  &::after {
    content: '원';
    font-size: 16px;
    font-weight: 400;
    line-height: 1.25;
    position: absolute;
    top: 50%;
    transform: translate(0, -50%);
  }
`;

export default ProductList;
