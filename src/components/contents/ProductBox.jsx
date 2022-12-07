import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { DeleteModal } from '../modal/Modal';

function ProductBox({ i, productBoxData, setProductBoxData }) {
  const navigate = useNavigate();
  const [deleteModal, setDeleteModal] = useState(false);
  // 상품 삭제
  function handleDelteBtn() {
    setDeleteModal(true);
  }

  return (
    <Warpper>
      <ProductWarpper>
        <ProductImg src={productBoxData[i].image} />
        <ProductInfoWarpper>
          <ProductName>{productBoxData[i].product_name}</ProductName>
          <StockNum>재고: {productBoxData[i].stock}</StockNum>
        </ProductInfoWarpper>
      </ProductWarpper>
      <ProductPrice>{productBoxData[i].price.toLocaleString()}원</ProductPrice>
      <Btn
        bg="#21BF48"
        onClick={() => {
          navigate('/productedit', {
            state: { productBoxData: productBoxData[i] },
          });
        }}
      >
        수정
      </Btn>
      <Btn bg="#fff" onClick={handleDelteBtn}>
        삭제
      </Btn>
      {deleteModal ? (
        <DeleteModal
          productBoxData={productBoxData}
          setProductBoxData={setProductBoxData}
          i={i}
          setDeleteModal={setDeleteModal}
        />
      ) : null}
    </Warpper>
  );
}

const Warpper = styled.section`
  width: 100%;
  height: fit-content;
  max-width: 1440px;
  max-height: 103px;
  display: flex;
  align-items: center;
  padding: 3.39% 0 3.5%;
  padding-left: 5.55%;
  background-color: #fff;
  border-bottom: 1px solid #c4c4c4;
`;

const ProductWarpper = styled.div`
  display: flex;
  width: 49.93%;
`;

const ProductImg = styled.img`
  width: 70px;
  height: 70px;
  flex-shrink: 0;
  border-radius: 50%;
  margin-right: 2.08%;
  @media ${(props) => props.theme.tablet} {
    width: 50px;
    height: 50px;
  }
  @media ${(props) => props.theme.mobile} {
    width: 30px;
    height: 30px;
  }
`;

const ProductInfoWarpper = styled.div`
  width: 100%;
`;

const ProductName = styled.h2`
  width: 100%;
  font-size: 18px;
  font-weight: 400;
  line-height: 1.22;
  margin-bottom: 10px;
  @media ${(props) => props.theme.tablet} {
    font-size: 12px;
  }
`;

const StockNum = styled.span`
  width: 100%;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.25;
  color: #767676;
  @media ${(props) => props.theme.tablet} {
    font-size: 10px;
  }
`;

const ProductPrice = styled.p`
  width: 30.62%;
  font-size: 18px;
  font-weight: 500;
  line-height: 1.22;
  text-align: center;
  max-width: 390px;
  @media ${(props) => props.theme.tablet} {
    font-size: 12px;
  }
`;

const Btn = styled.button`
  width: 5.55%;
  max-width: 80px;
  min-width: 34px;
  height: 40px;
  margin: 0 1.38%;
  border-radius: 5px;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.25;
  word-break: keep-all;
  background-color: ${(props) => props.bg};
  color: ${(props) => (props.bg === '#21BF48' ? '#fff' : '#767676')};
  border: ${(props) => (props.bg === '#fff' ? '1px solid #c4c4c4' : null)};
  @media ${(props) => props.theme.tablet} {
    height: 25px;
    font-size: 12px;
  }
`;

export default ProductBox;
