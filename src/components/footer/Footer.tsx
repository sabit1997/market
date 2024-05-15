import React from 'react';

import {
  FooterWarpper,
  TopWarpper,
  FooterNav,
  FooterLi,
  Sns,
  SnsItem,
  Dl,
  Dd,
  Dt,
} from './FooterStyle';

export default function Footer() {
  return (
    <FooterWarpper>
      <TopWarpper>
        <FooterNav>
          <FooterLi>호두샵 소개</FooterLi>
          <FooterLi>이용약관</FooterLi>
          <FooterLi>개인정보처리방침</FooterLi>
          <FooterLi>전자금융거래약관</FooterLi>
          <FooterLi>청소년보호정책</FooterLi>
          <FooterLi>제휴문의</FooterLi>
        </FooterNav>
        <Sns>
          <SnsItem />
          <SnsItem />
          <SnsItem />
        </Sns>
      </TopWarpper>
      <Dl>
        <Dt className="ir">회사명</Dt>
        <Dd>(주)HODU SHOP</Dd>
        <Dt className="ir">주소</Dt>
        <Dd>제주특별자치도 제주시 동광고 137 제주코딩베이스캠프</Dd>
        <Dt>사업자 번호</Dt>
        <Dd>000-0000-0000 | 통신판매업</Dd>
        <Dt>대표</Dt>
        <Dd>김호두</Dd>
      </Dl>
    </FooterWarpper>
  );
}
