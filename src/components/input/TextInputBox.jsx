import styled from 'styled-components';
import NumDropdown from '../etc/NumDropdown';
import checkOff from '../../assets/icon-check-off.svg';
import checkOn from '../../assets/icon-check-on.svg';

function TextInputBox(props) {
  return (
    <>
      {props.value === '휴대폰번호' ? (
        <>
          <Txt htmlFor="box_input">{props.value}</Txt>
          <InputWarpper marginB={props.marginB}>
            <NumDropdown />
            <Input type="number" wd="152px" />
            <Input type="number" wd="152px" />
          </InputWarpper>
        </>
      ) : props.value === '이메일' ? (
        <>
          <Txt htmlFor="box_input">{props.value}</Txt>
          <InputWarpper>
            <Input wd="220px" type="text" />
            <AtSign>@</AtSign>
            <Input wd="220px" type="text" marginB={props.marginB} />
          </InputWarpper>
        </>
      ) : props.value === '비밀번호' || props.value === '비밀번호 재확인' ? (
        <Warpper>
          <Txt htmlFor="box_input" marginT={props.marginT}>
            {props.value}
          </Txt>
          <PasswordInputWarpper>
            <PasswordInput type="text" />
            <PasswordCheck src={checkOff} />
          </PasswordInputWarpper>
        </Warpper>
      ) : (
        <Warpper>
          <Txt htmlFor="box_input" marginT={props.marginT}>
            {props.value}
          </Txt>
          <Input
            type={props.type}
            id="box_input"
            name="box_input"
            wd="100%"
            marginB={props.marginB}
          />
        </Warpper>
      )}
    </>
  );
}

const Warpper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const InputWarpper = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: ${(props) => props.marginB};
`;

const Txt = styled.label`
  font-size: 16px;
  font-weight: 400;
  line-height: 1.25;
  color: #767676;
  margin-top: ${(props) => props.marginT};
  margin-bottom: 10px;
  display: block;
`;
const Input = styled.input`
  width: ${(props) => props.wd};
  padding: 17px 0 17px 16px;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.25;
  border-radius: 5px;
  border: 1px solid #c4c4c4;
  margin-bottom: ${(props) => props.marginB};
  &::placeholder {
    color: #000;
  }
`;

const PasswordInputWarpper = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid #c4c4c4;
  border-radius: 5px;
  overflow: hidden;
`;

const PasswordInput = styled.input`
  width: 100%;
  height: 54px;
  border: none;
`;

const PasswordCheck = styled.img`
  width: 28px;
  height: 28px;
  margin-right: 13px;
`;

const AtSign = styled.span`
  font-size: 16px;
  font-weight: 700;
  line-height: 1.251875;
  color: #767676;
`;

export default TextInputBox;
