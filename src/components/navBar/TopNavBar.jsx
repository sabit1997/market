import styled from 'styled-components';
import logo from '../../assets/Logo-hodu.png';
import searchBtn from '../../assets/search.png';
import cart from '../../assets/icon-shopping-cart.svg';
import myInfo from '../../assets/icon-user.svg';
import myInfoActive from '../../assets/icon-user-2.svg';
import shoppingBag from '../../assets/icon-shopping-bag.svg';
import MyPageDropdown from '../../components/etc/MyPageDropdown';
import MsIconButton from '../button/MsIconButton';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Modal from '../modal/Modal';

export default function TopNavBar(props) {
  const navigate = useNavigate();
  const [modal, setModal] = useState(false);
  // 경고창 모달
  const [alertModal, setAlertModal] = useState(false);

  // 마이페이지 버튼
  function handleMyPageButton() {
    if (localStorage.getItem('token') === null) {
      navigate('/login');
    } else if (modal === true) {
      setModal(false);
    } else {
      setModal(true);
    }
  }

  // 장바구니 버튼
  function handleCartButton() {
    if (localStorage.getItem('token') === null) {
      setAlertModal(true);
    } else {
      setAlertModal(false);
      navigate('/cart');
    }
  }

  return (
    <Warpper vlaue={props.value}>
      <LeftWarpper>
        <Logo src={logo} onClick={() => navigate('/')} />
        <Search>
          <SearchInput placeholder="상품을 검색해보세요!" />
          <SearchBtn />
        </Search>
      </LeftWarpper>
      <ButtonWarpper>
        {/* 판매자 로그인 시 다르게 */}
        {props.value === 'seller' ? (
          <>
            <MoveBtn wd="56px" onClick={handleMyPageButton} modal={modal}>
              <BtnTxt modal={modal}>마이페이지</BtnTxt>
              {modal === true ? <MyPageDropdown setModal={setModal} /> : null}
            </MoveBtn>
            <MsIconButton
              value="판매자센터"
              wd="168px"
              src={shoppingBag}
              onClick={() => navigate('/sellercenter')}
            />
          </>
        ) : (
          <>
            <MoveBtn wd="46px" onClick={handleCartButton}>
              <BtnTxt>장바구니</BtnTxt>
            </MoveBtn>
            <MoveBtn wd="56px" onClick={handleMyPageButton} modal={modal}>
              <BtnTxt modal={modal}>마이페이지</BtnTxt>
              {modal === true ? <MyPageDropdown setModal={setModal} /> : null}
            </MoveBtn>
          </>
        )}
      </ButtonWarpper>
      {alertModal === true ? (
        <Modal category="notLogin" setAlertModal={setAlertModal} />
      ) : null}
    </Warpper>
  );
}

const Warpper = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 1920px;
  height: 90px;
  padding-left: 320px;
  padding-right: 320px;
  position: relative;
`;

const LeftWarpper = styled.div`
  display: flex;
`;

const ButtonWarpper = styled.div`
  display: flex;
`;

const Logo = styled.img`
  width: 124px;
  height: 38px;
  margin-right: 30px;
`;

const Search = styled.section`
  /* position: relative; */
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 400px;
  padding: 9px 22px;
  border: 2px solid #21bf48;
  border-radius: 50px;
`;

const SearchInput = styled.input`
  flex-grow: 1;
  border: none;
  font-family: inherit;
  font-size: 16px;
  line-height: 1.25;
  font-weight: 400;
  &::placeholder {
    color: #767676;
  }
`;

const SearchBtn = styled.button`
  width: 28px;
  height: 28px;
  background-image: url(${searchBtn});
  background-size: contain;
  background-color: transparent;
  cursor: pointer;
  /* position: absolute; */
  /* left: 0; */
`;

const MoveBtn = styled.button`
  width: ${(props) => props.wd};
  height: 50px;
  background-image: ${(props) =>
    props.wd === '46px'
      ? `url(${cart})`
      : `url(${props.modal === true ? `${myInfoActive}` : `${myInfo}`})`};
  background-repeat: no-repeat;
  background-position: top center;
  position: relative;
  margin-right: 26px;
  &:last-child {
    margin-right: 0;
  }
`;

const BtnTxt = styled.span`
  font-size: 12px;
  line-height: 1.1666;
  vertical-align: bottom;
  color: ${(props) => (props.modal === true ? '#21BF48' : '#767676')};
  word-break: keep-all;
  position: absolute;
  bottom: 0;
  left: 0;
`;
