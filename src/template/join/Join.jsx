import { Warpper, Logo, IdInputWarpper } from './JoinStyle';
import { LoginBox, LoginSelletor, InputBox } from '../login/LoginStyle';
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
import logo from '../../assets/Logo-hodu.png';
import CheckText from '../../components/etc/CheckText';
import MS16pButton from '../../components/button/MS16pButton';
import MButton from '../../components/button/MButton';
import MDisabledButton from '../../components/button/MDisabledButton';

export default function Join({
  handleJoin,
  navigate,
  joinType,
  changeBuyer,
  changeSeller,
  userName,
  accountValid,
  errors,
  register,
  handleInput,
  setAccountValid,
  handleButton,
  password,
  password2,
  name,
  phoneNumber1,
  phoneNumber2,
  prefixNum,
  setPrefixNum,
  email1,
  email2,
  companyNum,
  companyNumValid,
  handleAuthButton,
  storeName,
  setChecked,
  checked,
  doubleCheck,
  isValid,
  companyNumCheck,
}) {
  return (
    <Warpper onSubmit={handleJoin}>
      <Logo src={logo} onClick={() => navigate('/')} />
      <LoginBox>
        <LoginSelletor loginType={joinType} onClick={changeBuyer}>
          구매회원가입
        </LoginSelletor>
        <LoginSelletor loginType={joinType} onClick={changeSeller}>
          판매회원가입
        </LoginSelletor>
        <InputBox loginType={joinType}>
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
              maxWd="122px"
              wd="26.63%"
              margin="30px 0 0 12px"
              mobileMargin="25px 0 0 12px"
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
          <MButton value="가입하기" wd="100%" maxWd="480px" />
        </>
      ) : (
        <>
          <MDisabledButton value="가입하기" wd="100%" />
        </>
      )}
    </Warpper>
  );
}
