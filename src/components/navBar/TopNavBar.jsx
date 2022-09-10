import styled from 'styled-components';
import logo from '../../assets/Logo-hodu.png';
import searchBtn from '../../assets/search.png';
import cart from '../../assets/icon-shopping-cart.svg';
import myInfo from '../../assets/icon-user.svg';
import { useNavigate } from 'react-router-dom';
export default function TopNavBar() {
  const navigate = useNavigate();
  return (
    <Warpper>
      <LeftWarpper>
        <Logo src={logo} onClick={() => navigate('/')} />
        <Search>
          <SearchInput placeholder="상품을 검색해보세요!" />
          <SearchBtn />
        </Search>
      </LeftWarpper>
      <ButtonWarpper>
        {/* 판매자 로그인 시 다르게 */}
        <MoveBtn wd="46px" onClick={() => navigate('/cart')}>
          <BtnTxt>장바구니</BtnTxt>
        </MoveBtn>
        <MoveBtn wd="56px" onClick={() => navigate('/login')}>
          <BtnTxt>마이페이지</BtnTxt>
        </MoveBtn>
      </ButtonWarpper>
    </Warpper>
  );
}

const Warpper = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 1280px;
  height: 90px;
`;

const LeftWarpper = styled.div`
  display: flex;
`;

const ButtonWarpper = styled.div``;

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
  /* margin-right: 598px; */
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
    props.wd === '46px' ? `url(${cart})` : `url(${myInfo})`};
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
  color: #767676;
  word-break: keep-all;
  position: absolute;
  bottom: 0;
  left: 0;
`;
