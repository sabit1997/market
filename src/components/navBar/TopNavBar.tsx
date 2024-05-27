import { useState } from 'react';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import shoppingBag from '../../assets/icon-shopping-bag.svg';
import cart from '../../assets/icon-shopping-cart.svg';
import myInfoActive from '../../assets/icon-user-2.svg';
import myInfo from '../../assets/icon-user.svg';
import logo from '../../assets/Logo-hodu.png';
import searchBtn from '../../assets/search.png';
import MsIconButton from '../button/MsIconButton';
import MyPageDropdown from '../etc/MyPageDropdown';
import { NotLogin } from '../modal/Modal';

export default function TopNavBar(props) {
  const navigate = useNavigate();
  const [modal, setModal] = useState(false);
  // 경고창 모달
  const [alertModal, setAlertModal] = useState(false);
  const [searchInput, setSearchInput] = useState('');

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

  function handleSearchInput(e) {
    setSearchInput(e.target.value);
  }

  function handleSearchClick() {
    const mergedProductData = [].concat(...props.productData);
    const resultProducts = mergedProductData.filter(
      (x) => x.product_name.includes(searchInput) === true
    );
    navigate('/result', {
      state: { resultProducts: resultProducts, searchInput: searchInput },
    });
  }

  function handlePressEnter(e) {
    if (e.key === 'Enter') {
      handleSearchClick();
    }
  }

  return (
    <Warpper>
      <LeftWarpper>
        <Logo src={logo} onClick={() => navigate('/')} />
        <Search>
          <SearchInput
            placeholder="상품을 검색해보세요!"
            onChange={handleSearchInput}
            onKeyPress={handlePressEnter}
          />
          <SearchBtn onClick={handleSearchClick} />
        </Search>
      </LeftWarpper>
      <ButtonWarpper>
        {props.value === 'SELLER' ? (
          <>
            <MoveBtn wd="56px" onClick={handleMyPageButton} modal={modal}>
              <BtnTxt modal={modal}>마이페이지</BtnTxt>
              {modal === true ? <MyPageDropdown setModal={setModal} /> : null}
            </MoveBtn>
            <MsIconButton
              value="판매자센터"
              wd="100%"
              maxWd="168px"
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
      {alertModal === true ? <NotLogin setAlertModal={setAlertModal} /> : null}
    </Warpper>
  );
}

const Warpper = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1280px;
  width: 100%;
  height: 90px;
  position: relative;
  @media ${(props) => props.theme.mobile && props.theme.tablet} {
    width: 100%;
    height: auto;
    padding-left: 0;
    padding-right: 0;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: fit-content;
    padding-top: 40px;
  }
`;

const LeftWarpper = styled.div`
  display: flex;
  @media ${(props) => props.theme.mobile && props.theme.tablet} {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const ButtonWarpper = styled.div`
  display: flex;
  align-items: center;
  @media ${(props) => props.theme.mobile && props.theme.tablet} {
    position: absolute;
    top: 5px;
    right: 15px;
  }
`;

const Logo = styled.img`
  width: 124px;
  height: 38px;
  margin-right: 30px;
  @media ${(props) => props.theme.tablet} {
    margin: 0 0 15px 0;
  }
  @media ${(props) => props.theme.mobile} {
    margin-right: 0;
    margin-bottom: 10px;
  }
`;

const Search = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 400px;
  padding: 9px 22px;
  border: 2px solid #21bf48;
  border-radius: 50px;
  @media ${(props) => props.theme.tablet} {
    margin-bottom: 15px;
  }
  @media ${(props) => props.theme.mobile} {
    width: 250px;
    padding: 5px 15px;
    margin-bottom: 10px;
  }
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
  @media ${(props) => props.theme.mobile} {
    font-size: 9px;
  }
`;

const SearchBtn = styled.button`
  width: 28px;
  height: 28px;
  background-image: url(${searchBtn});
  background-size: contain;
  background-color: transparent;
  cursor: pointer;
  @media ${(props) => props.theme.mobile} {
    width: 14px;
    height: 14px;
  }
`;

const MoveBtn = styled.button<{ wd: string; modal?: boolean }>`
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
  @media ${(props) => props.theme.tablet} {
    width: ${(props) =>
      props.wd === '46px' ? '30px' : props.wd === '56px' ? '28px' : null};
    height: 45px;
    background-size: contain;
    margin-right: 10px;
  }
  @media ${(props) => props.theme.mobile} {
    width: ${(props) =>
      props.wd === '46px' ? '22px' : props.wd === '56px' ? '25px' : null};
    height: 20px;
    background-size: contain;
    margin-right: 10px;
  }

  &:last-child {
    margin-right: 0;
  }
`;

const BtnTxt = styled.span<{ modal?: boolean }>`
  font-size: 12px;
  line-height: 1.1666;
  vertical-align: bottom;
  color: ${(props) => (props.modal === true ? '#21BF48' : '#767676')};
  word-break: keep-all;
  position: absolute;
  bottom: 0;
  left: 0;
  @media ${(props) => props.theme.mobile && props.theme.tablet} {
    display: none;
  }
`;
