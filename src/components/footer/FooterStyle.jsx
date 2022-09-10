import styled from 'styled-components';
import insta from '../../assets/icon-insta.svg';
import facebook from '../../assets/icon-fb.svg';
import youtube from '../../assets/icon-yt.svg';

export const FooterWarpper = styled.footer`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f2f2f2;
  padding: 60px 0 63px;
`;

export const FooterNav = styled.ul`
  display: flex;
`;

export const FooterLi = styled.li`
  font-size: 14px;
  font-weight: 400;
  line-height: 1.252142857142857;
  margin-right: 32px;
  position: relative;
  &::after {
    content: '|';
    position: absolute;
    right: -16px;
  }
  &:nth-child(3) {
    font-weight: 700;
  }
  &:last-child {
    margin-right: 0;
    &::after {
      content: '';
    }
  }
`;

export const TopWarpper = styled.div`
  width: 1280px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 53px;
  position: relative;
  &::after {
    content: '';
    width: 100%;
    height: 1px;
    background-color: #c4c4c4;
    position: absolute;
    bottom: -30px;
  }
`;

export const Sns = styled.ul`
  display: flex;
`;

export const SnsItem = styled.li`
  width: 32px;
  height: 32px;
  background-image: url(${insta});
  margin-right: 14px;
  &:nth-child(2) {
    background-image: url(${facebook});
  }
  &:last-child {
    background-image: url(${youtube});
    margin-right: 0;
  }
`;

export const Dl = styled.dl`
  width: 1280px;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.714285714285714;
  color: #767676;
  position: relative;
`;

export const Dt = styled.dt`
  &::after {
    content: ' : ';
  }
`;

export const Dd = styled.dd`
  &:first-child {
    font-weight: 700;
    /* 적용안됨 */
  }
`;
