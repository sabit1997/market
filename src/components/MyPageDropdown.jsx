import styled from 'styled-components';

import what from '../assets/icon-swiper-1.svg';

export default function MyPageDropdown() {
  return (
    <Warpper>
      <Li>마이페이지</Li>
      <Li>로그아웃</Li>
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
  position: relative;
  background-color: #fff;
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
