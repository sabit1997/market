import { useState } from 'react';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import logo from '../../assets/Logo-hodu.png';
import client from '../../client/client';
import MButton from '../../components/button/MButton';
import MDisabledButton from '../../components/button/MDisabledButton';
import MS16pButton from '../../components/button/MS16pButton';
import CheckText from '../../components/etc/CheckText';
import * as I from '../../components/input/TextInputBox';
import useInputs from '../../hooks/useInputs';
import * as L from '../loginPage/LoginPageStyle';

import * as S from './JoinPageStyle';

export default function JoinPage() {
  const [checked, setChecked] = useState(Boolean);
  const [joinType, setJoinType] = useState<'BUYER' | 'SELLER'>('BUYER');
  const [doubleCheck, setDoubleCheck] = useState(false);
  const [companyNumCheck, setCompanyNumCheck] = useState(false);
  const [prefixNum, setPrefixNum] = useState('010');
  const navigate = useNavigate();
  const {
    register,
    formState: { errors, isValid },
  } = useForm({ mode: 'onBlur' });

  const [
    {
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
    },
    onChange,
  ] = useInputs({
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
        .then(() => {
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
          console.error(error);
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
        .catch((error) => console.error(error));
    }
  };

  const [accountValid, setAccountValid] = useState('');
  const [companyNumValid, setCompanyNumValid] = useState('');

  return (
    <S.Warpper onSubmit={handleJoin}>
      <S.Logo src={logo} onClick={() => navigate('/')} />
      <L.LoginBox>
        <L.LoginSelletor loginType={joinType} onClick={changeBuyer}>
          구매회원가입
        </L.LoginSelletor>
        <L.LoginSelletor loginType={joinType} onClick={changeSeller}>
          판매회원가입
        </L.LoginSelletor>
        <L.InputBox loginType={joinType}>
          <S.IdInputWarpper>
            <I.IdTextInputBox
              value={userName}
              accountValid={accountValid}
              errors={errors}
              register={register}
              handleInput={onChange}
            />
            <MS16pButton
              value="중복확인"
              maxWd="122px"
              wd="26.63%"
              margin="30px 0 0 12px"
              mobileMargin="25px 0 0 12px"
              type="button"
              username={userName}
              setAccountValid={setAccountValid}
              onClick={handleButton}
            />
          </S.IdInputWarpper>
          <I.PasswordTextInputBox
            // title="비밀번호"
            value={password}
            password={password}
            register={register}
            handleInput={onChange}
            errors={errors}
          />
          <I.PasswordReconFirmTextInputBox
            value={password2}
            register={register}
            password={password}
            password2={password2}
            handleInput={onChange}
            errors={errors}
          />
          <I.NameTextInputBox
            value={name}
            register={register}
            handleInput={onChange}
            errors={errors}
            // marginB="16px"
          />
          <I.PhoneNumberTextInputBox
            value={phoneNumber1}
            value2={phoneNumber2}
            register={register}
            handleInput={onChange}
            errors={errors}
            prefixNum={prefixNum}
            setPrefixNum={setPrefixNum}
            // marginB="16px"
          />
          <I.EmailTextInputBox
            value={email1}
            value2={email2}
            register={register}
            handleInput={onChange}
            errors={errors}
          />
          {joinType === 'SELLER' ? (
            <>
              <S.IdInputWarpper marginT="50px">
                <I.CompanyNumTextInputBox
                  value={companyNum}
                  companyNumValid={companyNumValid}
                  register={register}
                  handleInput={onChange}
                  errors={errors}
                />
                <MS16pButton
                  value="인증"
                  wd="122px"
                  margin="30px 0 0 12px"
                  type="button"
                  onClick={handleAuthButton}
                />
              </S.IdInputWarpper>
              <I.StoreNameTextInputBox
                value={storeName}
                register={register}
                handleInput={onChange}
                errors={errors}
              />
            </>
          ) : null}
        </L.InputBox>
      </L.LoginBox>
      <CheckText
        value="회원가입"
        marginB="34px"
        setChecked={setChecked}
        // checked={checked}
      />
      {(joinType === 'BUYER' && checked && doubleCheck && isValid) ||
      (joinType === 'SELLER' && checked && doubleCheck && companyNumCheck) ? (
        <>
          <MButton value="가입하기" wd="100%" maxWd="480px" />
        </>
      ) : (
        <>
          <MDisabledButton value="가입하기" wd="100%" />
        </>
      )}
    </S.Warpper>
  );
}
