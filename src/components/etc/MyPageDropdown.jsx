import styled from 'styled-components';
import client from '../../client/client';
// import what from '../assets/icon-swiper-1.svg';

export default function MyPageDropdown(props) {
  function handleMypageBtn(event) {
    props.setModal(false);
    event.stopPropagation();
  }

  function handleLogout(event) {
    props.setModal(false);
    event.stopPropagation();
    client
      .post('/accounts/logout/', {})
      .then((res) => {
        console.log(res);
        localStorage.clear();
      })
      .catch((error) => {
        console.log(error);
      });
  }
  return (
    <Warpper>
      <Li onClick={handleMypageBtn}>마이페이지</Li>
      <Li onClick={handleLogout}>로그아웃</Li>
    </Warpper>
  );
}

const Warpper = styled.ul`
  width: 130px;
  height: 108px;
  border-radius: 10px;
  box-shadow: 0px 0px 6px 0px #00000040;
  text-align: center;
  padding: 10px;
  position: absolute;
  top: 66px;
  left: 50%;
  transform: translateX(-50%);
  background-color: #fff;
  z-index: 10;
`;

const Li = styled.li`
  font-size: 16px;
  font-weight: 500;
  line-height: 1.25;
  color: #767676;
  padding: 10px 0;
  width: 100%;
  margin-bottom: 8px;
  border: 1px solid #fff;
  &:last-child {
    margin-bottom: 0;
  }
  &:hover {
    border: 1px solid #767676;
    border-radius: 5px;
    color: #000;
    font-weight: 500;
  }
`;
