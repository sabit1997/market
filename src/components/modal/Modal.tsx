import { useState } from 'react';
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import instance from '../../client/instance';
import { CartItem } from '../../types/cartTypes';
import {
  ChangeNumModalProps,
  ExistsModalProps,
  NotLoginProps,
  SuccessCartProps,
  deleteModalProps,
  ExcessModalProps,
} from '../../types/modalTypes';
import SButton from '../button/SButton';
import SWhiteButton from '../button/SWhiteButton';
import Amount from '../etc/Amount';

import {
  ModalWarpper,
  CloseButton,
  AlertTxt,
  AlertContentsWarp,
} from './ModalStyle';

// 상품삭제 모달
export function DeleteModal({
  setDeleteModal,
  cartItemId,
  setCartData,
  cartData,
  productBoxData,
  i,
  setProductBoxData,
}: deleteModalProps) {
  const location = useLocation();
  function handleCloseBtn() {
    setDeleteModal(false);
  }

  // 상품 삭제
  function deleteProduct() {
    if (location.pathname === '/cart') {
      instance
        .delete(`/cart/${cartItemId}/`)
        .then((res) => {
          if (res.status === 204) {
            setCartData(
              cartData.filter(
                (item: CartItem) => item.cart_item_id !== cartItemId
              )
            );
          }
          setDeleteModal(false);
        })
        .catch((error) => console.log(error));
    } else if (location.pathname === '/sellercenter') {
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
  }
  return (
    <ModalWarpper>
      <CloseButton onClick={handleCloseBtn} />
      <AlertTxt marginB="20%">상품을 삭제하시겠습니까?</AlertTxt>
      <div>
        <SWhiteButton
          wd="100px"
          value="취소"
          marginR="10px"
          onClick={handleCloseBtn}
        />
        <SButton
          wd="100px"
          value="확인"
          mobileWd="40px"
          mobileHg="20px"
          onClick={deleteProduct}
        />
      </div>
    </ModalWarpper>
  );
}

// 수량 변경 모달
export function ChangeNumModal({
  setQuantity,
  quantity,
  stock,
  cart_item_id,
  product_id,
  setAmountModal,
  i,
  value,
}: ChangeNumModalProps) {
  const [changeQuantity, setChangeQuantity] = useState<number>(value);

  // is_active Boolean 판별 함수
  function isActive() {
    if (stock < changeQuantity) {
      return false;
    } else {
      return true;
    }
  }

  // 수량 수정
  function handleNumChangeBtn() {
    instance
      .put(`/cart/${cart_item_id}/`, {
        product_id: product_id,
        quantity: changeQuantity,
        is_active: isActive(),
      })
      .then((res) => {
        const newQuantities = [...quantity];
        newQuantities.splice(i, 1, res.data.quantity);
        setQuantity(newQuantities);
        setAmountModal(false);
      })
      .catch((error) => console.log(error));
  }
  function handleCloseBtn() {
    setAmountModal(false);
  }

  return (
    <ModalWarpper>
      <CloseButton onClick={handleCloseBtn} />
      <AlertContentsWarp>
        <Amount
          margin="0 0 13% 0"
          value={changeQuantity}
          setAmountQuantity={setChangeQuantity}
          stock={changeQuantity}
          changeQuantity={changeQuantity}
          setChangeQuantity={setChangeQuantity}
        />
        <div>
          <SWhiteButton
            wd="100px"
            value="취소"
            marginR="10px"
            onClick={handleCloseBtn}
          />
          <SButton
            wd="100px"
            mobileWd="40px"
            mobileHg="20px"
            value="수정"
            onClick={handleNumChangeBtn}
          />
        </div>
      </AlertContentsWarp>
    </ModalWarpper>
  );
}

// 로그인 요청 모달
export function NotLogin({ setAlertModal }: NotLoginProps) {
  const navigate = useNavigate();

  function handleCloseBtn() {
    setAlertModal(false);
  }

  return (
    <ModalWarpper>
      <CloseButton onClick={handleCloseBtn} />
      <AlertTxt marginB="30px">
        로그인이 필요한 서비스입니다. <br />
        로그인 하시겠습니까?
      </AlertTxt>
      <div>
        <SWhiteButton
          wd="100px"
          value="아니오"
          marginR="10px"
          onClick={handleCloseBtn}
        />
        <SButton
          wd="100px"
          value="예"
          mobileWd="40px"
          mobileHg="20px"
          onClick={() => {
            navigate('/login');
          }}
        />
      </div>
    </ModalWarpper>
  );
}

// 이미 존재하고 있는 상품 모달
export function ExistsModal({ setExistModal }: ExistsModalProps) {
  const navigate = useNavigate();
  function handleCloseBtn() {
    setExistModal(false);
  }
  return (
    <ModalWarpper>
      <CloseButton onClick={handleCloseBtn} />
      <AlertTxt marginB="30px">
        이미 장바구니에 있는 상품입니다.
        <br />
        장바구니로 이동하시겠습니까?
      </AlertTxt>
      <div>
        <SWhiteButton
          wd="100px"
          value="아니오"
          marginR="10px"
          onClick={() => {
            setExistModal(false);
          }}
        />
        <SButton
          wd="100px"
          value="예"
          mobileWd="40px"
          mobileHg="20px"
          onClick={() => {
            navigate('/cart');
          }}
        />
      </div>
    </ModalWarpper>
  );
}

// 재고 초과 모달
export function ExcessModal({ setExcessModal }: ExcessModalProps) {
  function handleCloseBtn() {
    setExcessModal(false);
  }
  return (
    <ModalWarpper>
      <CloseButton onClick={handleCloseBtn} />
      <AlertTxt marginB="30px">
        현재 재고보다 더 많은 수량을
        <br />
        담을 수 없습니다.
      </AlertTxt>
      <SWhiteButton
        wd="100px"
        value="닫기"
        marginR="10px"
        onClick={handleCloseBtn}
      />
    </ModalWarpper>
  );
}

export function SuccessCart({ setSuccessCart }: SuccessCartProps) {
  const navigate = useNavigate();
  function handleCloseBtn() {
    setSuccessCart(false);
  }
  return (
    <ModalWarpper>
      <CloseButton onClick={handleCloseBtn} />
      <AlertTxt marginB="30px">
        장바구니에 담겼습니다.
        <br />
        이동하시겠습니까?
      </AlertTxt>
      <div>
        <SWhiteButton
          wd="100px"
          value="닫기"
          marginR="10px"
          onClick={handleCloseBtn}
        />
        <SButton
          wd="100px"
          value="예"
          mobileWd="40px"
          mobileHg="20px"
          onClick={() => {
            navigate('/cart');
          }}
        />
      </div>
    </ModalWarpper>
  );
}
