import SWhiteButton from '../button/SWhiteButton';
import SButton from '../button/SButton';
import Amount from '../etc/Amount';
import { ModalWarpper, CloseButton, AlertTxt } from './ModalStyle';
import { useNavigate } from 'react-router-dom';

export default function Modal(props) {
  const navigate = useNavigate();

  function handleCloseBtn() {
    props.setAlertModal(false);
  }
  return (
    <ModalWarpper category={props.category}>
      <CloseButton onClick={handleCloseBtn} />
      {props.category === 'changeNum' ? (
        <>
          <Amount />
          <div>
            <SWhiteButton wd="100px" value="취소" marginR="10px" />
            <SButton wd="100px" value="수정" />
          </div>
        </>
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
