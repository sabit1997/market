import SWhiteButton from '../button/SWhiteButton';
import SButton from '../button/SButton';
import Amount from '../etc/Amount';
import {
  ModalWarpper,
  CloseButton,
  AlertTxt,
  AlertContentsWarp,
} from './ModalStyle';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import instance from '../../client/instance';

// 상품삭제 모달
export function DeleteModal({
  setDeleteModal,
  cartItemId,
  setCartData,
  cartData,
}) {
  function handleCloseBtn() {
    setDeleteModal(false);
  }

  // 상품 삭제
  function deleteProduct() {
    instance
      .delete(`/cart/${cartItemId}/`)
      .then((res) => {
        console.log(res);
        if (res.status === 204) {
          setCartData(
            cartData.filter((item) => item.cart_item_id !== cartItemId)
          );
        }
        setDeleteModal(false);
      })
      .catch((error) => console.log(error));
  }
  return (
    <ModalWarpper>
      <CloseButton onClick={handleCloseBtn} />
      <AlertTxt marginB="40px">상품을 삭제하시겠습니까?</AlertTxt>
      <div>
        <SWhiteButton
          wd="100px"
          value="취소"
          marginR="10px"
          onClick={handleCloseBtn}
        />
        <SButton wd="100px" value="확인" onClick={deleteProduct} />
      </div>
    </ModalWarpper>
  );
}

// 수량 변경 모달
export function ChangeNumModal({
  setQuantity,
  quantity,
  stcok,
  cart_item_id,
  product_id,
  setAmountModal,
  cartData,
  i,
  value,
}) {
  const [changeQuantity, setChangeQuantity] = useState(value);

  // is_active Boolean 판별 함수
  function isActive() {
    if (stcok < changeQuantity) {
      return false;
    } else {
      return true;
    }
  }

  console.log(quantity);
  // 수량 수정
  function handleNumChangeBtn() {
    instance
      .put(`/cart/${cart_item_id}/`, {
        product_id: product_id,
        quantity: changeQuantity,
        is_active: isActive(),
      })
      .then((res) => {
        quantity.splice(i, 1, res.data.quantity);
        setQuantity(quantity);
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
          margin="0 0 26px 0"
          value={changeQuantity}
          setQuantity={setQuantity}
          quantity={quantity}
          changeQuantity={changeQuantity}
          setChangeQuantity={setChangeQuantity}
          stock={stcok}
        />
        <div>
          <SWhiteButton
            wd="100px"
            value="취소"
            marginR="10px"
            onClick={handleCloseBtn}
          />
          <SButton wd="100px" value="수정" onClick={handleNumChangeBtn} />
        </div>
      </AlertContentsWarp>
    </ModalWarpper>
  );
}

// 로그인 요청 모달
export function NotLogin({ setAlertModal }) {
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
          onClick={() => {
            navigate('/login');
          }}
        />
      </div>
    </ModalWarpper>
  );
}

export function ExistsModal({ setExistModal }) {
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
          onClick={() => {
            navigate('/cart');
          }}
        />
      </div>
    </ModalWarpper>
  );
}

export function ExcessModal({ setExcessModal }) {
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
        onClick={() => {
          setExcessModal(false);
        }}
      />
    </ModalWarpper>
  );
}
