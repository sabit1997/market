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
  return (
    <>
      {props.title === '아이디' ? (
        <Warpper marginB="12px">
          <Txt htmlFor="id_text_input">{props.title}</Txt>
          <IdInput
            type="text"
            id="id_text_input"
            name={props.name}
            wd="100%"
            onChange={props.onChange}
            value={props.value}
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
      ) : props.title === '비밀번호' ? (
        <Warpper marginB="12px">
          <Txt htmlFor="password_text_input">{props.title}</Txt>
          <PasswordInputWarpper>
            <PasswordInput
              type="password"
              id="password_text_input"
              onChange={props.onChange}
              name="password"
              value={props.value}
              marginB="12px"
            />
            <PasswordCheck src={props.password !== '' ? checkOn : checkOff} />
          </PasswordInputWarpper>
        </Warpper>
      ) : props.title === '비밀번호 재확인' ? (
        <Warpper marginB="50px">
          <Txt htmlFor="password2_text_input">{props.title}</Txt>
          <PasswordInputWarpper>
            <PasswordInput
              type="password"
              id="password2_text_input"
              onChange={props.onChange}
              name="password2"
              value={props.value}
              onBlur={props.onBlur}
            />
            <PasswordCheck src={props.password2 !== '' ? checkOn : checkOff} />
          </PasswordInputWarpper>
          {props.stateValue === false ? (
            <ValidMessage color="red">{props.arlertMessage}</ValidMessage>
          ) : null}
        </Warpper>
      ) : props.title === '이름' ? (
        <Warpper marginB="16px">
          <Txt htmlFor="input_text_input">{props.title}</Txt>
          <Input
            type="text"
            id="input_text_input"
            name="name"
            wd="100%"
            onChange={props.onChange}
            value={props.value}
          />
        </Warpper>
      ) : props.title === '휴대폰번호' ? (
        <>
          <Txt htmlFor="phonenumber_text_input">{props.title}</Txt>
          <InputWarpper marginB="16px">
            <NumDropdown />
            <Input
              type="number"
              id="phonenumber_text_input"
              wd="152px"
              onChange={props.onChange}
              name="phoneNumber1"
              value={props.value}
              maxLength="4"
            />
            <Input
              type="number"
              wd="152px"
              onChange={props.onChange}
              name="phoneNumber2"
              value={props.value2}
              maxLength="4"
            />
          </InputWarpper>
        </>
      ) : props.title === '이메일' ? (
        <>
          <Txt htmlFor="email_text_input">{props.title}</Txt>
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
