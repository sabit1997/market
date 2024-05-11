import checkOff from '../../assets/icon-check-off.svg';
import checkOn from '../../assets/icon-check-on.svg';
import NumDropdown from '../etc/NumDropdown';

import {
  Warpper,
  InputWarpper,
  Txt,
  IdInput,
  Input,
  PasswordInputWarpper,
  PasswordInput,
  PasswordCheck,
  AtSign,
  ValidMessage,
} from './TextInputBoxStyle';

export function IdTextInputBox({
  value,
  accountValid,
  register,
  handleInput,
  errors,
}) {
  return (
    <Warpper marginB="12px">
      <Txt htmlFor="id_text_input">아이디</Txt>
      <IdInput
        type="text"
        id="id_text_input"
        wd="100%"
        value={value}
        border={
          Object.keys(accountValid)[0] === 'FAIL_Message'
            ? '1px solid #EB5757'
            : '1px solid #c4c4c4'
        }
        {...register('userName', {
          required: '필수 정보입니다.',
          pattern: {
            value: /^[a-zA-Z0-9]{1,19}/,
            message: '20자 이내의 영문 소문자, 대문자, 숫자만 사용 가능합니다.',
          },
          onChange: (e) => {
            handleInput(e);
          },
        })}
      />
      {errors.userName ? (
        <ValidMessage color="red">{errors.userName.message}</ValidMessage>
      ) : Object.keys(accountValid)[0] === 'FAIL_Message' ? (
        <ValidMessage color="red">{accountValid['FAIL_Message']}</ValidMessage>
      ) : (
        (Object.keys(accountValid)[0] = 'Success' ? (
          <ValidMessage color="#21BF48">{accountValid['Success']}</ValidMessage>
        ) : null)
      )}
    </Warpper>
  );
}

export function PasswordTextInputBox({
  value,
  password,
  register,
  handleInput,
  errors,
}) {
  return (
    <Warpper marginB="12px">
      <Txt htmlFor="password_text_input">비밀번호</Txt>
      <PasswordInputWarpper>
        <PasswordInput
          type="password"
          id="password_text_input"
          value={value}
          marginB="12px"
          {...register('password', {
            required: '필수 정보입니다.',
            pattern: {
              value: /^(?=.*[a-zA-Z])((?=.*\d)(?=.*\W)).{8,}$/,
              message: '8자 이상, 영문 대 소문자, 숫자, 특수문자를 사용하세요.',
            },
            onChange: (e) => {
              handleInput(e);
            },
          })}
        />
        <PasswordCheck src={password !== '' ? checkOn : checkOff} />
      </PasswordInputWarpper>
      {errors.password && (
        <ValidMessage color="red">{errors.password.message}</ValidMessage>
      )}
    </Warpper>
  );
}

export function PasswordReconFirmTextInputBox({
  value,
  password,
  password2,
  register,
  handleInput,
  errors,
}) {
  return (
    <Warpper marginB="50px">
      <Txt htmlFor="password2_text_input">비밀번호 재확인</Txt>
      <PasswordInputWarpper>
        <PasswordInput
          type="password"
          id="password2_text_input"
          value={value}
          {...register('password2', {
            required: '필수 정보입니다.',
            onChange: (e) => {
              handleInput(e);
            },
            validate: {
              same: (value) =>
                value === password || '비밀번호가 일치하지 않습니다.',
            },
          })}
        />
        <PasswordCheck
          src={password2 !== '' && password2 === password ? checkOn : checkOff}
        />
      </PasswordInputWarpper>
      {errors.password2 && (
        <ValidMessage color="red">{errors.password2.message}</ValidMessage>
      )}
    </Warpper>
  );
}

export function NameTextInputBox({ value, register, handleInput, errors }) {
  return (
    <Warpper marginB="16px">
      <Txt htmlFor="input_text_input">이름</Txt>
      <Input
        type="text"
        id="input_text_input"
        wd="100%"
        value={value}
        {...register('name', {
          required: '필수 정보입니다.',
          onChange: (e) => {
            handleInput(e);
          },
        })}
      />
      {errors.name && (
        <ValidMessage color="red">{errors.name.message}</ValidMessage>
      )}
    </Warpper>
  );
}

export function PhoneNumberTextInputBox({
  value,
  value2,
  register,
  handleInput,
  errors,
  prefixNum,
  setPrefixNum,
}) {
  return (
    <>
      <Txt htmlFor="phonenumber_text_input">휴대폰번호</Txt>
      <InputWarpper marginB="16px">
        <NumDropdown prefixNum={prefixNum} setPrefixNum={setPrefixNum} />
        <Input
          type="number"
          id="phonenumber_text_input"
          value={value}
          wd="33.33%"
          maxWd="152px"
          {...register('phoneNumber1', {
            required: true,
            maxLength: 4,
            onChange: (e) => {
              handleInput(e);
            },
          })}
        />
        <Input
          type="number"
          value={value2}
          wd="33.33%"
          maxWd="152px"
          maxLength="4"
          {...register('phoneNumber2', {
            required: true,
            maxLength: 4,
            onChange: (e) => {
              handleInput(e);
            },
          })}
        />
      </InputWarpper>
      {(errors.phoneNumber1 || errors.phoneNumber2) && (
        <ValidMessage color="red">필수 정보입니다.</ValidMessage>
      )}
    </>
  );
}

export function EmailTextInputBox({
  value,
  value2,
  register,
  handleInput,
  errors,
}) {
  return (
    <>
      <Txt htmlFor="email_text_input">이메일</Txt>
      <InputWarpper>
        <Input
          wd="47%"
          type="text"
          id="email_text_input"
          value={value}
          {...register('email1', {
            required: '필수 정보입니다.',
            pattern: {
              value: /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*$/,
              message: '잘못된 이메일 형식입니다.',
            },
            onChange: (e) => {
              handleInput(e);
            },
          })}
        />
        <AtSign>@</AtSign>
        <Input
          wd="47%"
          type="text"
          value={value2}
          {...register('email2', {
            required: '필수 정보입니다.',
            pattern: {
              value: /^([-_.]?[0-9a-zA-Z])+\.[a-zA-Z]{2,3}$/,
              message: '잘못된 이메일 형식입니다.',
            },
            onChange: (e) => {
              handleInput(e);
            },
          })}
        />
      </InputWarpper>
      <ValidMessage color="red">
        {errors.email1
          ? errors.email1.message
          : errors.email2
            ? errors.email2.message
            : null}
      </ValidMessage>
    </>
  );
}

export function CompanyNumTextInputBox({
  value,
  register,
  handleInput,
  companyNumValid,
  errors,
}) {
  return (
    <>
      <Warpper marginB="12px">
        <Txt htmlFor="company_num_input">사업자 등록번호</Txt>
        <IdInput
          type="number"
          id="company_num_input"
          wd="100%"
          value={value}
          border={
            Object.keys(companyNumValid)[0] === 'FAIL_Message'
              ? '1px solid #EB5757'
              : '1px solid #c4c4c4'
          }
          {...register('companyNum', {
            required: '필수 정보입니다.',
            onChange: (e) => {
              handleInput(e);
            },
          })}
        />
        {errors.companyNum ? (
          <ValidMessage color="red">{errors.companyNum.message}</ValidMessage>
        ) : Object.keys(companyNumValid)[0] === 'FAIL_Message' ? (
          <ValidMessage color="red">
            {companyNumValid['FAIL_Message']}
          </ValidMessage>
        ) : (
          (Object.keys(companyNumValid)[0] = 'Success' ? (
            <ValidMessage color="#21BF48">
              {companyNumValid['Success']}
            </ValidMessage>
          ) : null)
        )}
      </Warpper>
    </>
  );
}

export function StoreNameTextInputBox({
  value,
  register,
  handleInput,
  errors,
}) {
  return (
    <>
      <Warpper marginB="16px">
        <Txt htmlFor="store_name_input">스토어 이름</Txt>
        <Input
          type="text"
          id="store_name_input"
          wd="100%"
          value={value}
          {...register('storeName', {
            required: '필수 정보입니다.',
            onChange: (e) => {
              handleInput(e);
            },
          })}
        />
      </Warpper>
      {errors.storeName && (
        <ValidMessage color="red">{errors.storeName.message}</ValidMessage>
      )}
    </>
  );
}
