import styled from 'styled-components';

export const Warpper = styled.section`
  width: 100%;
  max-width: 550px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 100px 20px 0;
  position: relative;
  margin: 0 auto;
  @media screen and (max-width: 390px) {
    padding: 20px 10px 0;
  }
`;

export const Logo = styled.img`
  width: 238px;
  height: 74px;
  margin-bottom: 70px;
  @media screen and (max-width: 390px) {
    width: 150px;
    height: auto;
    margin-bottom: 40px;
  }
`;

export const LoginBox = styled.section`
  width: 100%;
  height: 352px;
  margin-bottom: 30px;
  @media screen and (max-width: 390px) {
    width: 100%;
    height: fit-content;
    margin-bottom: 0;
  }
`;

export const LoginSelletor = styled.button`
  width: 50%;
  max-width: 275px;
  border: 1px solid #c4c4c4;
  border-radius: 10px;
  background-color: ${(props) =>
    props.loginType === 'BUYER' ? '#fff' : '#f2f2f2'};
  font-size: 18px;
  font-weight: 500;
  line-height: 1.222222222222222;
  padding: 20px 0 38px;
  @media screen and (max-width: 390px) {
    padding: 10px 0 30px;
    font-size: 12px;
  }
  cursor: pointer;
  &:nth-child(2) {
    background-color: ${(props) =>
      props.loginType === 'SELLER' ? '#fff' : '#f2f2f2'};
  }
`;

export const InputBox = styled.form`
  width: 100%;
  border-radius: 10px;
  background-color: #fff;
  margin-top: -20px;
  border: 1px solid #c4c4c4;
  position: relative;
  padding: 34px 35px 36px 35px;
  @media screen and (max-width: 390px) {
    width: 100%;
  }
  &::after {
    content: '';
    width: 49.5%;
    height: 15px;
    position: absolute;
    top: -5px;
    ${(props) => (props.loginType === 'BUYER' ? 'left: 0;' : 'right: 0;')}
    background-color: #fff;
  }
`;

export const MoveTxtWarpper = styled.ul`
  display: flex;
  justify-content: center;
  margin-top: 30px;
`;

export const MoveTxt = styled.li`
  font-size: 16px;
  font-weight: 400;
  line-height: 1.251875;
  color: #333333;
  margin-right: 33px;
  position: relative;
  @media ${(props) => props.theme.tablet} {
    font-size: 14px;
  }
  @media ${(props) => props.theme.mobile} {
    font-size: 12px;
  }
  &:last-child {
    margin-right: 0;
    &::before {
      content: '|';
      position: absolute;
      left: -14px;
    }
  }
`;

export const ErrorMessage = styled.span`
  display: block;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.251875;
  color: #eb5757;
  margin-top: -10px;
  margin-bottom: 26px;
`;
