import styled from 'styled-components';
import { useState } from 'react';
import logo from '../assets/Logo-hodu.png';
import TextInputBox from '../components/TextInputBox';
import CheckText from '../components/CheckText';
import MButton from '../components/button/MButton';
import MDisabledButton from '../components/button/MDisabledButton';

export default function Join(props) {
  const [checked, setChecked] = useState(Boolean);
  const [joinType, setJoinType] = useState('buyer');

  const changeBuyer = () => {
    setJoinType('buyer');
  };

  const changeSeller = () => {
    setJoinType('seller');
    console.log(joinType);
  };

  console.log(checked);
  return (
    <>
      <Warpper>
        <Logo src={logo} />
        <LoginBox>
          <LoginSelletor joinType={joinType} onClick={changeBuyer}>
            구매회원가입
          </LoginSelletor>
          <LoginSelletor joinType={joinType} onClick={changeSeller}>
            판매회원가입
          </LoginSelletor>
          <InputBox joinType={joinType}>
            <TextInputBox value="아이디" type="text" marginB="12px" />
            <TextInputBox value="비밀번호" type="password" marginB="12px" />
            <TextInputBox
              value="비밀번호 재확인"
              type="password"
              marginB="50px"
            />
            <TextInputBox value="이름" type="text" marginB="16px" />
            <TextInputBox value="휴대폰번호" marginB="16px" />
            <TextInputBox value="이메일" />
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
            <MButton value="가입하기" />
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
  margin-bottom: 30px;
`;

const LoginSelletor = styled.button`
  width: 275px;
  border: 1px solid #c4c4c4;
  border-radius: 10px;
  background-color: ${(props) =>
    props.joinType === 'buyer' ? '#fff' : '#f2f2f2'};
  font-size: 18px;
  font-weight: 500;
  line-height: 1.222222222222222;
  padding: 20px 0 38px;
  cursor: pointer;
  &:nth-child(2) {
    background-color: ${(props) =>
      props.joinType === 'buyer' ? '#f2f2f2' : '#fff'};
  }
`;

const InputBox = styled.form`
  width: 550px;
  border-radius: 10px;
  background-color: #fff;
  margin-top: -20px;
  border: 1px solid #c4c4c4;
  z-index: 1;
  position: relative;
  padding: 40px 35px 36px 35px;
  &::after {
    content: '';
    width: 273px;
    height: 15px;
    position: absolute;
    top: -5px;
    ${(props) => (props.joinType === 'buyer' ? 'left: 0;' : 'right: 0;')}
    background-color: #fff;
  }
`;
