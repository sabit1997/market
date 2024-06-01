import React from 'react';
import styled from 'styled-components';

import downArrow from '../assets/icon-down-arrow.svg';

function MyPageMenu() {
  return (
    <Warpper>
      <H2>장바구니</H2>
      <Num>02</Num>
    </Warpper>
  );
}

const Warpper = styled.section`
  width: 200px;
  height: 200px;
  background-color: #f2f2f2;
  text-align: center;
  padding-top: 26px;
  border-radius: 10px;
`;

const H2 = styled.h2`
  font-size: 18px;
  font-weight: 700;
  line-height: 1.25;
  margin-bottom: 25px;
  position: relative;
  &::after {
    content: url(${downArrow});
    margin-left: 2px;
    position: absolute;
  }
`;

const Num = styled.p`
  font-size: 72px;
  font-weight: 400;
  line-height: 1.25;
  color: #21bf48;
`;

export default MyPageMenu;
