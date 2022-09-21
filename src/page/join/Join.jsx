import {
  Warpper,
  Logo,
  LoginBox,
  LoginSelletor,
  InputBox,
  IdInputWarpper,
} from '../../components/join/JoinStyle';
import { useState } from 'react';
import logo from '../../assets/Logo-hodu.png';
import TextInputBox from '../../components/input/TextInputBox';
import CheckText from '../../components/etc/CheckText';
import MS16pButton from '../../components/button/MS16pButton';
import MButton from '../../components/button/MButton';
import MDisabledButton from '../../components/button/MDisabledButton';
import { useNavigate } from 'react-router-dom';
import client from '../../client/client';

export default function Join() {
  const [checked, setChecked] = useState(Boolean);
  const [joinType, setJoinType] = useState('buyer');
  const navigate = useNavigate();

  const [inputs, setInputs] = useState({
    userName: '',
    password: '',
    password2: '',
    name: '',
    phoneNumber1: '',
    phoneNumber2: '',
    email: '',
  });

  const { userName, password, password2, name, phoneNumber1, phoneNumber2 } =
    inputs;

  const onChange = (value) => {
    setInputs(value);
  };

  const changeBuyer = () => {
    setJoinType('buyer');
  };

  const changeSeller = () => {
    setJoinType('seller');
    console.log(joinType);
  };

  const handleJoin = () => {
    if (joinType === 'buyer') {
      client.post('/accounts/signup/', {
        username: userName,
        password: password,
        password2: password2,
        phone_number: `${phoneNumber1}${phoneNumber2}`,
        name: name,
      });
    }
  };

  console.log(inputs);

  console.log(checked);

  const [accountValid, setAccountVaild] = useState('');
  console.log(accountValid.Success);

  return (
    <>
      <Warpper>
        <Logo src={logo} onClick={() => navigate('/')} />
        <LoginBox>
          <LoginSelletor joinType={joinType} onClick={changeBuyer}>
            구매회원가입
          </LoginSelletor>
          <LoginSelletor joinType={joinType} onClick={changeSeller}>
            판매회원가입
          </LoginSelletor>
          <InputBox joinType={joinType} onSubmit={handleJoin}>
            <IdInputWarpper>
              <TextInputBox
                name="아이디"
                value="아이디"
                type="text"
                onChange={onChange}
                accountValid={accountValid}
              />
              <MS16pButton
                value="중복확인"
                wd="122px"
                margin="30px 0 0 12px"
                type="button"
                username={userName}
                setAccountVaild={setAccountVaild}
              />
            </IdInputWarpper>
            <TextInputBox
              value="비밀번호"
              type="password"
              onChange={onChange}
            />
            <TextInputBox
              value="비밀번호 재확인"
              type="password"
              marginB="50px"
              onChange={onChange}
            />
            <TextInputBox
              value="이름"
              type="text"
              marginB="16px"
              onChange={onChange}
            />
            <TextInputBox
              value="휴대폰번호"
              marginB="16px"
              onChange={onChange}
            />
            <TextInputBox value="이메일" />
            {joinType === 'seller' ? (
              <>
                <IdInputWarpper>
                  <TextInputBox
                    value="사업자 등록번호"
                    type="number"
                    marginT="50px"
                    marginB="16px"
                  />
                  <MS16pButton value="인증" wd="122px" margin="80px 0 0 12px" />
                </IdInputWarpper>
                <TextInputBox value="스토어 이름" type="text" />
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
        {checked ? (
          <>
            <MButton value="가입하기" wd="480px" />
          </>
        ) : (
          <>
            <MDisabledButton value="가입하기" />
          </>
        )}
      </Warpper>
    </>
  );
}
