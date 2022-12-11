import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import deleteIcon from '../../assets/icon-delete.svg';
import Amount from '../etc/Amount';
import { DeleteModal, ChangeNumModal } from '../modal/Modal';

function CartProductList({
  cartData,
  cartItem,
  i,
  setChecked,
  checked,
  quantity,
  setQuantity,
  setCartData,
}) {
  const [amountModal, setAmountModal] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);
  const navigate = useNavigate();

  function shippingValue(fee, method) {
    if (method === 'PARCEL') {
      if (fee === 0) {
        return '소포배송 / 무료배송';
      } else if (fee !== 0) {
        return `소포배송 / ${fee.toLocaleString()}원`;
      }
    } else if (method === 'DELIVERY') {
      if (fee === 0) {
        return '택배배송 / 무료배송';
      } else if (fee !== 0) {
        return `택배배송 / ${fee.toLocaleString()}원`;
      }
    }
  }
  // checked 초기값 설정
  useEffect(() => {
    let initial = {};
    for (let i = 0; i < cartData.length; i++) {
      initial[`product${i}`] = true;
    }
    setChecked(initial);
  }, [cartData.length, setChecked]);

  // 상품 체크 버튼
  function handleCheckBtn(e) {
    const { name } = e.target;
    // console.log(e.target.name);
    if (checked[`product${i}`]) {
      setChecked({
        ...checked,
        [name]: false,
      });
    } else {
      setChecked({
        ...checked,
        [name]: true,
      });
    }
  }

  // 수량 변경 버튼
  function handleAmount(event) {
    event.stopPropagation();
    setAmountModal(true);
  }

  // 상품 삭제 버튼
  function handleDeleteBtn() {
    setDeleteModal(true);
  }

  // 주문하기 버튼
  function handlePaymentButton() {
    navigate('/payment', {
      state: {
        orderProduct: [cartItem[i]],
        quantity: [quantity[i]],
      },
    });
  }

  // 상품 상세로 이동
  function moveProductDetail() {
    navigate(`/detail/${cartItem[i].product_id}`);
  }

  return (
    <>
      <Warpper>
        <input
          type="checkbox"
          name={`product${i}`}
          value={`product${i}`}
          className="ir"
          id={i}
          onClick={handleCheckBtn}
        />
        <CheckButton checked={checked} htmlFor={i} i={i} />
        <ProductWarpper>
          <Product src={cartItem[i].image} onClick={moveProductDetail} />
          <ProductInfoWarpper onClick={moveProductDetail}>
            <Seller>{cartItem[i].store_name}</Seller>
            <ProductName>{cartItem[i].product_name}</ProductName>
            <ProductPrice>{`${cartItem[
              i
            ].price.toLocaleString()}원`}</ProductPrice>
            <Shipping>
              {shippingValue(
                cartItem[i].shipping_fee,
                cartItem[i].shipping_method
              )}
            </Shipping>
          </ProductInfoWarpper>
        </ProductWarpper>
        <Amount
          value={quantity[i]}
          cartItem={cartItem}
          onClick={handleAmount}
          margin="0 "
          cartData={cartData}
          i={i}
          quantity={quantity}
          setQuantity={setQuantity}
          justSelf="center"
        />
        <OderWarpper>
          <OrderPrice>
            {`${(cartItem[i].price * quantity[i]).toLocaleString()}원`}
          </OrderPrice>
          <OrderBtn onClick={handlePaymentButton}>주문하기</OrderBtn>
        </OderWarpper>
        <DeleteBtn onClick={handleDeleteBtn} />
      </Warpper>
      {amountModal === true ? (
        <ChangeNumModal
          value={quantity[i]}
          setQuantity={setQuantity}
          setAmountModal={setAmountModal}
          cart_item_id={cartData[i].cart_item_id}
          product_id={cartData[i].product_id}
          stock={cartItem[i].stock}
          quantity={quantity}
          cartData={cartData}
          i={i}
        />
      ) : deleteModal === true ? (
        <DeleteModal
          setDeleteModal={setDeleteModal}
          cartItemId={cartData[i].cart_item_id}
          cartData={cartData}
          setCartData={setCartData}
        />
      ) : null}
    </>
  );
}

const Warpper = styled.section`
  display: grid;
  grid-template-columns: 20px 47.73% 19.37% 25.7%;
  align-items: center;
  width: 100%;
  max-width: 1280px;
  background-color: #fff;
  border: 2px solid #e0e0e0;
  border-radius: 10px;
  padding: 20px 0 20px 1.56%;
  margin-bottom: 10px;
  position: relative;
  &:nth-child(3) {
    margin-top: 35px;
    @media ${(props) => props.theme.mobile} {
      margin-top: 10px;
    }
  }
`;

const CheckButton = styled.label`
  box-sizing: border-box;
  width: 20px;
  height: 20px;
  border: 2px solid #21bf48;
  border-radius: 50%;
  margin-right: 2.34%;
  cursor: pointer;
  position: relative;
  &::after {
    content: '';
    display: ${(props) =>
      props.checked[`product${props.i}`] === false ? 'none;' : 'block'};
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background-color: #21bf48;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    @media ${(props) => props.theme.mobile} {
      width: 9px;
      height: 9px;
    }
  }
  @media ${(props) => props.theme.mobile} {
    width: 16px;
    height: 16px;
  }
`;

const ProductWarpper = styled.div`
  display: flex;
  padding-left: 3.125%;
  align-items: center;
`;

const Product = styled.img`
  width: 160px;
  height: 160px;
  border-radius: 10px;
  margin-right: 2.8%;
  @media ${(props) => props.theme.mobile} {
    width: 70px;
    height: 70px;
  }
`;

const ProductInfoWarpper = styled.div`
  display: flex;
  flex-direction: column;
  /* margin-right: 48px; */
`;

const Seller = styled.p`
  font-size: 14px;
  font-weight: 400;
  line-height: 1.25;
  color: #767676;
  margin-bottom: 10px;
  @media ${(props) => props.theme.mobile} {
    font-size: 9px;
    margin-bottom: 5px;
  }
`;

const ProductName = styled.h2`
  font-size: 18px;
  font-weight: 400;
  line-height: 1.22;
  margin-bottom: 10px;
  @media ${(props) => props.theme.mobile} {
    font-size: 10px;
    margin-bottom: 5px;
  }
`;

const ProductPrice = styled.span`
  font-size: 16px;
  font-weight: 700;
  line-height: 1.25;
  margin-bottom: 40px;
  @media ${(props) => props.theme.mobile} {
    font-size: 10px;
    margin-bottom: 5px;
  }
`;

const Shipping = styled.span`
  font-size: 14px;
  font-weight: 400;
  line-height: 1.25;
  color: #767676;
  @media ${(props) => props.theme.mobile} {
    font-size: 10px;
  }
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
  @media ${(props) => props.theme.mobile} {
    font-size: 12px;
    margin-bottom: 10px;
  }
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
  @media ${(props) => props.theme.mobile} {
    font-size: 12px;
    padding: 0;
    width: 80%;
    height: 30px;
  }
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
  @media ${(props) => props.theme.mobile} {
    width: 15px;
    height: 15px;
    top: 8px;
    right: 8px;
  }
`;

export default CartProductList;
