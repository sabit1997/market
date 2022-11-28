import {
  Warpper,
  Logo,
  LoginBox,
  LoginSelletor,
  InputBox,
  IdInputWarpper,
} from '../../components/join/JoinStyle';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import logo from '../../assets/Logo-hodu.png';
import {
  IdTextInputBox,
  PasswordTextInputBox,
  PasswordReconFirmTextInputBox,
  NameTextInputBox,
  PhoneNumberTextInputBox,
  EmailTextInputBox,
  CompanyNumTextInputBox,
  StoreNameTextInputBox,
} from '../../components/input/TextInputBox';
import CheckText from '../../components/etc/CheckText';
import MS16pButton from '../../components/button/MS16pButton';
import MButton from '../../components/button/MButton';
import MDisabledButton from '../../components/button/MDisabledButton';
import { useNavigate } from 'react-router-dom';
import client from '../../client/client';

export default function Join() {
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

  console.log(inputs);

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
        console.log(res);
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
        console.log(res);
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
        .then((res) => {
          console.log(res);
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

  console.log(Object.keys(errors)[0]);

  const [accountValid, setAccountValid] = useState('');
  const [companyNumValid, setCompanyNumValid] = useState('');

  return (
    <>
      <Warpper onSubmit={handleJoin}>
        <Logo src={logo} onClick={() => navigate('/')} />
        <LoginBox>
          <LoginSelletor joinType={joinType} onClick={changeBuyer}>
            구매회원가입
          </LoginSelletor>
          <LoginSelletor joinType={joinType} onClick={changeSeller}>
            판매회원가입
          </LoginSelletor>
          <InputBox joinType={joinType}>
            <IdInputWarpper>
              <IdTextInputBox
                value={userName}
                accountValid={accountValid}
                errors={errors}
                register={register}
                handleInput={handleInput}
              />
              <MS16pButton
                value="중복확인"
                wd="122px"
                margin="30px 0 0 12px"
                type="button"
                username={userName}
                setAccountValid={setAccountValid}
                onClick={handleButton}
              />
            </IdInputWarpper>
            <PasswordTextInputBox
              title="비밀번호"
              value={password}
              password={password}
              register={register}
              handleInput={handleInput}
              errors={errors}
            />
            <PasswordReconFirmTextInputBox
              value={password2}
              register={register}
              password={password}
              password2={password2}
              handleInput={handleInput}
              errors={errors}
            />
            <NameTextInputBox
              value={name}
              register={register}
              handleInput={handleInput}
              errors={errors}
              marginB="16px"
            />
            <PhoneNumberTextInputBox
              value={phoneNumber1}
              value2={phoneNumber2}
              register={register}
              handleInput={handleInput}
              errors={errors}
              prefixNum={prefixNum}
              setPrefixNum={setPrefixNum}
              marginB="16px"
            />
            <EmailTextInputBox
              value={email1}
              value2={email2}
              register={register}
              handleInput={handleInput}
              errors={errors}
            />
            {joinType === 'SELLER' ? (
              <>
                <IdInputWarpper marginT="50px">
                  <CompanyNumTextInputBox
                    value={companyNum}
                    companyNumValid={companyNumValid}
                    register={register}
                    handleInput={handleInput}
                    errors={errors}
                  />
                  <MS16pButton
                    value="인증"
                    wd="122px"
                    margin="30px 0 0 12px"
                    type="button"
                    onClick={handleAuthButton}
                  />
                </IdInputWarpper>
                <StoreNameTextInputBox
                  value={storeName}
                  register={register}
                  handleInput={handleInput}
                  errors={errors}
                />
              </>
            ) : null}
          </InputBox>
        </LoginBox>
        <CheckText
          value="회원가입"
          marginB="34px"
          setChecked={setChecked}
          checked={checked}
        />
        {(joinType === 'BUYER' && checked && doubleCheck && isValid) ||
        (joinType === 'SELLER' && checked && doubleCheck && companyNumCheck) ? (
          <>
            <MButton value="가입하기" wd="480px" />
          </>
        ) : (
          <>
            <MDisabledButton value="가입하기" wd="480px" />
          </>
        )}
      </Warpper>
    </>
  );
}
