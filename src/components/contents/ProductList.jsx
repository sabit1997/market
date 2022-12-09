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
  width: 100%;
  background-color: #fff;
  justify-self: center;
  padding-bottom: 10px;
  @media ${(props) => props.theme.mobile} {
    width: 160px;
    height: fit-content;
  }
  @media ${(props) => props.theme.desktop} {
    padding: 5px;
  }
`;

const ProductImg = styled.img`
  display: block;
  width: 100%;
  max-width: 380px;
  aspect-ratio: 1/1;
  border-radius: 10px;
  border: 1px solid #c4c4c4;
`;

const Seller = styled.span`
  font-size: 16px;
  font-weight: 400;
  line-height: 1.375;
  color: #767676;
  margin-bottom: 10px;
  @media ${(props) => props.theme.mobile} {
    font-size: 8px;
  }
`;

const ProductName = styled.h2`
  font-size: 18px;
  font-weight: 400;
  line-height: 1.22;
  margin-bottom: 10px;
  @media ${(props) => props.theme.mobile} {
    font-size: 12px;
    margin-bottom: 0;
  }
`;

const ProductPrice = styled.span`
  font-size: 24px;
  font-weight: 700;
  line-height: 1.25;
  position: relative;
  @media ${(props) => props.theme.mobile} {
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
    @media ${(props) => props.theme.mobile} {
      font-size: 14px;
    }
  }
`;

export default ProductList;
