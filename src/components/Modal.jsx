import styled from 'styled-components';
import close from '../assets/icon-delete.svg';
import SWhiteButton from './button/SWhiteButton';
import SButton from './button/SButton';
import Amount from './Amount';

export default function Modal(props) {
  return (
    <ModalWarpper category={props.category}>
      <CloseButton />
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
            <SWhiteButton wd="100px" value="아니오" marginR="10px" />
            <SButton wd="100px" value="예" />
          </div>
        </>
      ) : null}
    </ModalWarpper>
  );
}

const ModalWarpper = styled.article`
  width: 360px;
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  padding-bottom: 40px;
  border: 1px solid #c4c4c4;
  position: relative;
`;

const CloseButton = styled.button`
  width: 22px;
  height: 22px;
  background-image: url(${close});
  background-repeat: no-repeat;
  background-size: 22px;
  cursor: pointer;
  position: absolute;
  top: 18px;
  right: 18px;
`;

const AlertTxt = styled.p`
  font-size: 16px;
  font-weight: 400;
  line-height: 1.251875;
  text-align: center;
  margin-bottom: ${(props) => props.marginB};
`;
