import { useNavigate } from 'react-router-dom';
import { useRef, useState } from 'react';
import client from '../../client/client';
import {
  Warpper,
  Logo,
  LoginBox,
  LoginSelletor,
  InputBox,
  MoveTxtWarpper,
  MoveTxt,
  ErrorMessage,
} from './LoginPageStyle';
import logo from '../../assets/Logo-hodu.png';
import TextInput from '../../components/input/TextInput';
import MButton from '../../components/button/MButton';
import useInputs from '../../hooks/useInputs';

export default function LoginPage() {
  const navigate = useNavigate();
  const [loginType, setLoginType] = useState('BUYER');
  const [errorMessage, setErrorMessage] = useState('');
  const idInput = useRef();
  const passwordInput = useRef();

  // 로그인 타입 설정
  function handleBuyerBtn() {
    setLoginType('BUYER');
  }
  function handleSellerBtn() {
    setLoginType('SELLER');
  }

  const [inputs, onChange, handleInputs] = useInputs({
    username: '',
    password: '',
  });

  const { username, password } = inputs;

  // 로그인 기능
  function handleLogin(event) {
    event.preventDefault();
    if ((username && password) !== '') {
      client
        .post('/accounts/login/', {
          username: username,
          password: password,
          login_type: loginType,
        })
        .then((res) => {
          localStorage.setItem('token', res.data.token);
          localStorage.setItem('type', loginType);
          navigate('/');
        })
        .catch((error) => {
          setErrorMessage(error.response.data.FAIL_Message);
          handleInputs({
            ...inputs,
            password: '',
          });
          passwordInput.current.focus();
        });
    } else if (username === '') {
      idInput.current.focus();
      setErrorMessage('로그인 정보가 없습니다.');
    } else if (password === '') {
      passwordInput.current.focus();
      setErrorMessage('로그인 정보가 없습니다.');
    }
  }

  return (
    <>
      <Warpper>
        <Logo
          src={logo}
          onClick={() => {
            navigate('/');
          }}
        />
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
              textInput={idInput}
            />
            <TextInput
              type="password"
              placeholder="비밀번호"
              marginB="36px"
              name="password"
              value={password}
              onChange={onChange}
              textInput={passwordInput}
            />
            {errorMessage === '로그인 정보가 없습니다.' ? (
              <ErrorMessage>
                아이디 또는 비밀번호가 일치하지 않습니다.
              </ErrorMessage>
            ) : errorMessage ===
              '로그인 정보가 없습니다. 로그인 유형을 학인해주세요.' ? (
              <ErrorMessage>로그인 유형을 확인해주세요.</ErrorMessage>
            ) : null}
            <MButton value="로그인" wd="100%" />
          </InputBox>
        </LoginBox>
      </Warpper>
      <MoveTxtWarpper>
        <MoveTxt onClick={() => navigate('/join')}>회원가입</MoveTxt>
        <MoveTxt>비밀번호찾기</MoveTxt>
      </MoveTxtWarpper>
    </>
  );
}
