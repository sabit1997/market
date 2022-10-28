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
import { useLocation } from 'react-router-dom';
import instance from '../../client/instance';

export default function Modal(props) {
  const navigate = useNavigate();
  const [amountQuantity, setAmountQuantity] = useState(props.value);
  const location = useLocation();

  // 모달 창 닫는 동작
  function handleCloseBtn() {
    switch (location.pathname) {
      case '/detail:product_id':
        props.setAlertModal(false);
        break;
      case '/cart':
        props.setAmountModal(false);
        break;
      default:
        console.log('default');
    }
  }

  // is_active Boolean 판별 함수
  function isActive() {
    if (props.stcok <= amountQuantity) {
      return false;
    } else {
      return true;
    }
  }

  // 수량 수정 기능
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

  return (
    <ModalWarpper category={props.category}>
      <CloseButton onClick={handleCloseBtn} />
      {props.category === 'changeNum' ? (
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
      ) : props.category === 'productDel' ? (
        <>
          <AlertTxt marginB="40px">상품을 삭제하시겠습니까?</AlertTxt>
          <div>
            <SWhiteButton wd="100px" value="취소" marginR="10px" />
            <SButton wd="100px" value="확인" />
          </div>
        </>
      ) : props.category === 'notLogin' ? (
        <>
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
        </>
      ) : null}
    </ModalWarpper>
  );
}
