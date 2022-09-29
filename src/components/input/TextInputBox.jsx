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
import checkOff from '../../assets/icon-check-off.svg';
import checkOn from '../../assets/icon-check-on.svg';

export default function TextInputBox(props) {
  const handleInputs = (e) => {
    const { value, name } = e.target;
    props.onChange({
      ...props.inputs,
      [name]: value,
    });
  };

  return (
    <>
      {props.value === '아이디' ? (
        <Warpper marginB="12px">
          <Txt htmlFor="id_text_input">{props.value}</Txt>
          <IdInput
            type="text"
            id="id_text_input"
            name="userName"
            wd="100%"
            onChange={handleInputs}
            value={props.userName}
            border={
              Object.keys(props.accountValid)[0] === 'FAIL_Message'
                ? '1px solid #EB5757'
                : '1px solid #c4c4c4'
            }
          />
          {Object.keys(props.accountValid)[0] === 'FAIL_Message' ? (
            <ValidMessage color="red">
              {props.accountValid['FAIL_Message']}
            </ValidMessage>
          ) : (
            (Object.keys(props.accountValid)[0] = 'Success' ? (
              <ValidMessage color="#21BF48">
                {props.accountValid['Success']}
              </ValidMessage>
            ) : null)
          )}
        </Warpper>
      ) : props.value === '비밀번호' ? (
        <Warpper marginB="12px">
          <Txt htmlFor="password_text_input">{props.value}</Txt>
          <PasswordInputWarpper>
            <PasswordInput
              type="text"
              id="password_text_input"
              onChange={handleInputs}
              name="password"
              value={props.password}
              marginB="12px"
            />
            <PasswordCheck src={checkOff} />
          </PasswordInputWarpper>
        </Warpper>
      ) : props.value === '비밀번호 재확인' ? (
        <Warpper marginB="50px">
          <Txt htmlFor="password2_text_input">{props.value}</Txt>
          <PasswordInputWarpper>
            <PasswordInput
              type="text"
              id="password2_text_input"
              onChange={handleInputs}
              name="password2"
              value={props.password2}
            />
            <PasswordCheck src={checkOff} />
          </PasswordInputWarpper>
        </Warpper>
      ) : props.value === '이름' ? (
        <Warpper>
          <Txt htmlFor="input_text_input">{props.value}</Txt>
          <Input
            type="text"
            id="input_text_input"
            name="name"
            wd="100%"
            marginB="16px"
            onChange={handleInputs}
            value={props.name}
          />
        </Warpper>
      ) : props.value === '휴대폰번호' ? (
        <>
          <Txt htmlFor="phonenumber_text_input">{props.value}</Txt>
          <InputWarpper marginB="16px">
            <NumDropdown />
            <Input
              type="number"
              id="phonenumber_text_input"
              wd="152px"
              onChange={handleInputs}
              name="phoneNumber1"
              value={props.phoneNumber1}
            />
            <Input
              type="number"
              wd="152px"
              onChange={handleInputs}
              name="phoneNumber2"
              value={props.phoneNumber2}
            />
          </InputWarpper>
        </>
      ) : props.value === '이메일' ? (
        <>
          <Txt htmlFor="email_text_input">{props.value}</Txt>
          <InputWarpper>
            <Input wd="220px" type="text" />
            <AtSign>@</AtSign>
            <Input wd="220px" type="text" id="email_text_input" />
          </InputWarpper>
        </>
      ) : null}
    </>
  );
}
