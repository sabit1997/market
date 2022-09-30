import styled from 'styled-components';

export const Warpper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 100px;
  position: relative;
`;

export const Logo = styled.img`
  width: 238px;
  height: 74px;
  margin-bottom: 70px;
`;

export const LoginBox = styled.section`
  width: 550px;
  height: 352px;
  margin-bottom: 30px;
`;

export const LoginSelletor = styled.button`
  width: 275px;
  border: 1px solid #c4c4c4;
  border-radius: 10px;
  background-color: ${(props) =>
    props.loginType === 'BUYER' ? '#fff' : '#f2f2f2'};
  font-size: 18px;
  font-weight: 500;
  line-height: 1.222222222222222;
  padding: 20px 0 38px;
  cursor: pointer;
  &:nth-child(2) {
    background-color: ${(props) =>
      props.loginType === 'SELLER' ? '#fff' : '#f2f2f2'};
  }
`;

export const InputBox = styled.form`
  width: 550px;
  height: 292px;
  border-radius: 10px;
  background-color: #fff;
  margin-top: -20px;
  border: 1px solid #c4c4c4;
  position: relative;
  padding: 34px 35px 36px 35px;
  &::after {
    content: '';
    width: 273px;
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
  position: relative;
`;

export const MoveTxt = styled.li`
  font-size: 16px;
  font-weight: 400;
  line-height: 1.251875;
  color: #333333;
  margin-right: 33px;
  position: relative;
  &:last-child {
    margin-right: 0;
    &::before {
      content: '|';
      position: absolute;
      left: -14px;
    }
  }
`;
