import {
  Warpper,
  Logo,
  LoginBox,
  LoginSelletor,
  InputBox,
  MoveTxtWarpper,
  MoveTxt,
} from '../../components/login/LoginStyle';
import logo from '../../assets/Logo-hodu.png';
import TextInput from '../../components/input/TextInput';
import Mbutton from '../../components/button/MButton';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const navigate = useNavigate();
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
            <Mbutton value="로그인" wd="100%" />
          </InputBox>
        </LoginBox>
        <MoveTxtWarpper>
          <MoveTxt onClick={() => navigate('/join')}>회원가입</MoveTxt>
          <MoveTxt>비밀번호찾기</MoveTxt>
        </MoveTxtWarpper>
      </Warpper>
    </>
  );
}
