import styled from 'styled-components';
import logo from '../assets/Logo-hodu.png';
import TextInput from '../components/TextInput';
import Mbutton from '../components/button/MButton';

export default function Login() {
  return (
    <>
      <Warpper>
        <Logo src={logo} />
        <LoginBox>
          <LoginSelletor>구매회원 로그인</LoginSelletor>
          <LoginSelletor>판매회원 로그인</LoginSelletor>
          <InputBox>
            <TextInput type="text" placeholder="아이디" marginB="6px" />
            <TextInput type="password" placeholder="비밀번호" marginB="36px" />
            <Mbutton value="로그인" />
          </InputBox>
        </LoginBox>
        <MoveTxtWarpper>
          <MoveTxt>회원가입</MoveTxt>
          <MoveTxt>비밀번호찾기</MoveTxt>
        </MoveTxtWarpper>
      </Warpper>
    </>
  );
}

const Warpper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 100px;
`;

const Logo = styled.img`
  width: 238px;
  height: 74px;
  margin-bottom: 70px;
`;

const LoginBox = styled.section`
  width: 550px;
  height: 352px;
  margin-bottom: 30px;
`;

const LoginSelletor = styled.button`
  width: 275px;
  border: 1px solid #c4c4c4;
  border-radius: 10px;
  background-color: #fff;
  z-index: -1;
  position: relative;
  font-size: 18px;
  font-weight: 500;
  line-height: 1.222222222222222;
  padding: 20px 0 38px;
  &:nth-child(2) {
    background-color: #f2f2f2;
  }
`;

const InputBox = styled.form`
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
    left: 0;
    background-color: #fff;
  }
`;

const MoveTxtWarpper = styled.ul`
  display: flex;
  justify-content: center;
  position: relative;
`;

const MoveTxt = styled.li`
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
