import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import client from '../client/client';
import Join from '../template/join/Join';

export default function JoinPage() {
  const [checked, setChecked] = useState(Boolean);
  const [joinType, setJoinType] = useState('BUYER');
  const [doubleCheck, setDoubleCheck] = useState(false);
  const [companyNumCheck, setCompanyNumCheck] = useState(false);
  const [prefixNum, setPrefixNum] = useState('010');
  const navigate = useNavigate();
  const {
    register,
    formState: { errors, isValid },
  } = useForm({ mode: 'onBlur' });

  const [inputs, setInputs] = useState({
    userName: '',
    password: '',
    password2: '',
    name: '',
    phoneNumber1: '',
    phoneNumber2: '',
    email1: '',
    email2: '',
    companyNum: '',
    storeName: '',
  });

  const {
    userName,
    password,
    password2,
    name,
    phoneNumber1,
    phoneNumber2,
    email1,
    email2,
    companyNum,
    storeName,
  } = inputs;

  function handleInput(e) {
    const { value, name } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  }

  const changeBuyer = () => {
    setJoinType('BUYER');
  };

  const changeSeller = () => {
    setJoinType('SELLER');
  };

  // ID 중복확인
  const handleButton = () => {
    client
      .post(`/accounts/signup/valid/username/`, {
        username: userName,
      })
      .then((res) => {
        setDoubleCheck(true);
        setAccountValid(res.data);
      })
      .catch((error) => {
        setAccountValid(error.response.data);
        setChecked(false);
      });
  };

  // 사업자 등록번호 인증

  function handleAuthButton() {
    client
      .post('/accounts/signup/valid/company_registration_number/', {
        company_registration_number: companyNum,
      })
      .then((res) => {
        setCompanyNumValid(res.data);
        setCompanyNumCheck(true);
      })
      .catch((error) => {
        setCompanyNumValid(error.response.data);
        setCompanyNumCheck(false);
      });
  }

  // 회원가입
  const handleJoin = (event) => {
    event.preventDefault();
    if (joinType === 'BUYER' && checked && doubleCheck && isValid) {
      client
        .post('/accounts/signup/', {
          username: userName,
          password: password,
          password2: password2,
          phone_number: `${prefixNum}${phoneNumber1}${phoneNumber2}`,
          name: name,
        })
        .then((res) => {
          client
            .post('/accounts/login/', {
              username: userName,
              password: password,
              login_type: 'BUYER',
            })
            .then((res) => {
              localStorage.setItem('token', res.data.token);
              localStorage.setItem('type', 'BUYER');
            });
          navigate('/');
        })
        .catch((error) => {
          console.log(error);
        });
    } else if (joinType === 'SELLER' && checked && doubleCheck && isValid) {
      client
        .post('/accounts/signup_seller/', {
          username: userName,
          password: password,
          password2: password2,
          phone_number: `${prefixNum}${phoneNumber1}${phoneNumber2}`,
          name: name,
          company_registration_number: companyNum,
          store_name: storeName,
        })
        .then(() => {
          client
            .post('/accounts/login/', {
              username: userName,
              password: password,
              login_type: 'SELLER',
            })
            .then((res) => {
              localStorage.setItem('token', res.data.token);
              localStorage.setItem('type', 'SELLER');
            });
          navigate('/');
        })
        .catch((error) => console.log(error));
    }
  };

  const [accountValid, setAccountValid] = useState('');
  const [companyNumValid, setCompanyNumValid] = useState('');

  return (
    <Join
      handleJoin={handleJoin}
      navigate={navigate}
      joinType={joinType}
      changeBuyer={changeBuyer}
      changeSeller={changeSeller}
      userName={userName}
      accountValid={accountValid}
      errors={errors}
      register={register}
      handleInput={handleInput}
      setAccountValid={setAccountValid}
      handleButton={handleButton}
      password={password}
      password2={password2}
      name={name}
      phoneNumber1={phoneNumber1}
      phoneNumber2={phoneNumber2}
      prefixNum={prefixNum}
      setPrefixNum={setPrefixNum}
      email1={email1}
      email2={email2}
      companyNum={companyNum}
      companyNumValid={companyNumValid}
      handleAuthButton={handleAuthButton}
      storeName={storeName}
      setChecked={setChecked}
      checked={checked}
      doubleCheck={doubleCheck}
      isValid={isValid}
      companyNumCheck={companyNumCheck}
    />
  );
}
