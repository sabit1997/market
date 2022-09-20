import NumDropdown from '../etc/NumDropdown';
import {
  Warpper,
  InputWarpper,
  Txt,
  Input,
  PasswordInputWarpper,
  PasswordInput,
  PasswordCheck,
  AtSign,
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
        <>
          <Warpper>
            <Txt htmlFor="id_text_input" marginT={props.marginT}>
              {props.value}
            </Txt>
            <Input
              type="text"
              id="id_text_input"
              name="userName"
              wd="100%"
              marginB={props.marginB}
              onChange={handleInputs}
              value={props.userName}
            />
          </Warpper>
        </>
      ) : props.value === '비밀번호' ? (
        <Warpper>
          <Txt htmlFor="password_text_input" marginT={props.marginT}>
            {props.value}
          </Txt>
          <PasswordInputWarpper>
            <PasswordInput
              type="text"
              id="password_text_input"
              onChange={handleInputs}
              name="password"
              value={props.password}
            />
            <PasswordCheck src={checkOff} />
          </PasswordInputWarpper>
        </Warpper>
      ) : props.value === '비밀번호 재확인' ? (
        <Warpper>
          <Txt htmlFor="password2_text_input" marginT={props.marginT}>
            {props.value}
          </Txt>
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
          <Txt htmlFor="input_text_input" marginT={props.marginT}>
            {props.value}
          </Txt>
          <Input
            type="text"
            id="input_text_input"
            name="name"
            wd="100%"
            marginB={props.marginB}
            onChange={handleInputs}
            value={props.name}
          />
        </Warpper>
      ) : props.value === '휴대폰번호' ? (
        <>
          <Txt htmlFor="phonenumber_text_input">{props.value}</Txt>
          <InputWarpper marginB={props.marginB}>
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
            <Input
              wd="220px"
              type="text"
              id="email_text_input"
              marginB={props.marginB}
            />
          </InputWarpper>
        </>
      ) : null}
    </>
  );
}
