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
import { useState } from 'react';
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
export function ChangeNumModal(props) {
  const [amountQuantity, setAmountQuantity] = useState(props.value);

  // is_active Boolean 판별 함수
  function isActive() {
    if (props.stcok <= amountQuantity) {
      return false;
    } else {
      return true;
    }
  }

  // 수량 수정
  function handleNumChangeBtn() {
    instance
      .put(`/cart/${props.cart_item_id}/`, {
        product_id: props.product_id,
        quantity: amountQuantity,
        is_active: isActive(),
      })
      .then((res) => {
        console.log(res);
        props.setAmountModal(false);
        props.setQuantity(res.data.quantity);
      })
      .catch((error) => console.log(error));
  }

  function handleCloseBtn() {
    props.setAmountModal(false);
  }

  return (
    <ModalWarpper>
      <CloseButton />
      <AlertContentsWarp>
        <Amount
          margin="0 0 26px 0"
          value={amountQuantity}
          setAmountQuantity={setAmountQuantity}
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
      <CloseButton />
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
