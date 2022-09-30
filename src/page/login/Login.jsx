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
import { useState } from 'react';
import client from '../../client/client';

export default function Login() {
  const navigate = useNavigate();

  const [loginType, setLoginType] = useState('BUYER');

  function handleBuyerBtn() {
    setLoginType('BUYER');
  }

  function handleSellerBtn() {
    setLoginType('SELLER');
  }

  console.log(loginType);

  const [inputs, setInputs] = useState({
    username: '',
    password: '',
  });

  const { username, password } = inputs;

  function onChange(e) {
    const { value, name } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  }

  console.log(inputs);

  function handleLogin(event) {
    event.preventDefault();
    client
      .post('/accounts/login/', {
        username: username,
        password: password,
        login_type: loginType,
      })
      .then((res) => {
        console.log(res);
        navigate('/');
        localStorage.setItem('token', res.data.token);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <>
      <Warpper>
        <Logo src={logo} />
        <LoginBox>
          <LoginSelletor onClick={handleBuyerBtn} loginType={loginType}>
            구매회원 로그인
          </LoginSelletor>
          <LoginSelletor onClick={handleSellerBtn} loginType={loginType}>
            판매회원 로그인
          </LoginSelletor>
          <InputBox loginType={loginType} onSubmit={handleLogin}>
            <TextInput
              type="text"
              placeholder="아이디"
              marginB="6px"
              name="username"
              value={username}
              onChange={onChange}
            />
            <TextInput
              type="password"
              placeholder="비밀번호"
              marginB="36px"
              name="password"
              value={password}
              onChange={onChange}
            />
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
