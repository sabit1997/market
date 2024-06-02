import { useRef, useState } from 'react';
import React from 'react';
import { useNavigate } from 'react-router-dom';

import logo from '../../assets/Logo-hodu.png';
import client from '../../client/client';
import MButton from '../../components/button/MButton';
import TextInput from '../../components/input/TextInput';
import useInputs from '../../hooks/useInputs';

import * as S from './LoginPageStyle';

export default function LoginPage() {
  const navigate = useNavigate();
  const [loginType, setLoginType] = useState<'BUYER' | 'SELLER'>('BUYER');
  const [errorMessage, setErrorMessage] = useState('');
  const idInput = useRef<HTMLInputElement | null>(null);
  const passwordInput = useRef<HTMLInputElement | null>(null);

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
  function handleLogin(event: React.FormEvent<HTMLFormElement>) {
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
      <S.Warpper>
        <S.Logo
          src={logo}
          onClick={() => {
            navigate('/');
          }}
        />
        <S.LoginBox>
          <S.LoginSelletor onClick={handleBuyerBtn} loginType={loginType}>
            구매회원 로그인
          </S.LoginSelletor>
          <S.LoginSelletor onClick={handleSellerBtn} loginType={loginType}>
            판매회원 로그인
          </S.LoginSelletor>
          <S.InputBox loginType={loginType} onSubmit={handleLogin}>
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
              <S.ErrorMessage>
                아이디 또는 비밀번호가 일치하지 않습니다.
              </S.ErrorMessage>
            ) : errorMessage ===
              '로그인 정보가 없습니다. 로그인 유형을 학인해주세요.' ? (
              <S.ErrorMessage>로그인 유형을 확인해주세요.</S.ErrorMessage>
            ) : null}
            <MButton value="로그인" wd="100%" />
          </S.InputBox>
        </S.LoginBox>
      </S.Warpper>
      <S.MoveTxtWarpper>
        <S.MoveTxt onClick={() => navigate('/join')}>회원가입</S.MoveTxt>
        <S.MoveTxt>비밀번호찾기</S.MoveTxt>
      </S.MoveTxtWarpper>
    </>
  );
}
