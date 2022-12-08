import { useNavigate } from 'react-router-dom';
import { useRef, useState } from 'react';
import client from '../client/client';
import Login from '../template/login/Login';

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

  // login input 상태관리
  const [inputs, setInputs] = useState({
    username: '',
    password: '',
  });

  const { username, password } = inputs;

  // input 제어
  function onChange(e) {
    const { value, name } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  }

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
          console.log(res);
          localStorage.setItem('token', res.data.token);
          localStorage.setItem('type', loginType);
          navigate('/');
        })
        .catch((error) => {
          setErrorMessage(error.response.data.FAIL_Message);
          setInputs({
            ...inputs,
            password: '',
          });
          console.log(passwordInput.current);
          console.log(idInput.current);
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
    <Login
      navigate={navigate}
      handleBuyerBtn={handleBuyerBtn}
      handleSellerBtn={handleSellerBtn}
      loginType={loginType}
      handleLogin={handleLogin}
      username={username}
      onChange={onChange}
      idInput={idInput}
      password={password}
      passwordInput={passwordInput}
      errorMessage={errorMessage}
    />
  );
}
