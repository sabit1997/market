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
  @media ${(props) => props.theme.mobile} {
    padding: 10px;
  }
`;

export const FooterNav = styled.ul`
  display: flex;
  @media ${(props) => props.theme.mobile} {
    flex-direction: column;
  }
`;

export const FooterLi = styled.li`
  font-size: 14px;
  font-weight: 400;
  line-height: 1.252142857142857;
  margin-right: 32px;
  position: relative;
  @media ${(props) => props.theme.mobile} {
    font-size: 9px;
  }
  &::after {
    content: '|';
    position: absolute;
    right: -16px;
    @media ${(props) => props.theme.mobile} {
      display: none;
    }
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
  width: 100%;
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
  @media ${(props) => props.theme.mobile} {
    display: block;
  }
`;

export const SnsItem = styled.li`
  width: 32px;
  height: 32px;
  background-image: url(${insta});
  margin-right: 14px;
  @media ${(props) => props.theme.mobile} {
    width: 20px;
    height: 20px;
    background-size: contain;
    margin-bottom: 5px;
  }
  &:nth-child(2) {
    background-image: url(${facebook});
  }
  &:last-child {
    background-image: url(${youtube});
    margin-right: 0;
    @media ${(props) => props.theme.mobile} {
      margin-bottom: 0;
    }
  }
`;

export const Dl = styled.dl`
  width: 100%;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.714285714285714;
  color: #767676;
  position: relative;
  @media ${(props) => props.theme.mobile} {
    width: 100%;
    font-size: 9px;
  }
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
