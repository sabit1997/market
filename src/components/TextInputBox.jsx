import styled from 'styled-components';
import NumDropdown from './NumDropdown';

function TextInputBox(props) {
  return (
    <>
      {props.value === '휴대폰번호' ? (
        <>
          <Txt htmlFor="box_input">{props.value}</Txt>
          <Warpper>
            <NumDropdown />
            <Input type="number" wd="152px" />
            <Input type="number" wd="152px" marginB={props.marginB} />
          </Warpper>
        </>
      ) : props.value === '이메일' ? (
        <>
          <Txt htmlFor="box_input">{props.value}</Txt>
          <Warpper>
            <Input wd="220px" type="text" />
            <AtSign>@</AtSign>
            <Input wd="220px" type="text" marginB={props.marginB} />
          </Warpper>
        </>
      ) : (
        <>
          <Txt htmlFor="box_input">{props.value}</Txt>
          <Input
            type={props.type}
            id="box_input"
            name="box_input"
            wd="100%"
            marginB={props.marginB}
          />
        </>
      )}
    </>
  );
}

const Warpper = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Txt = styled.label`
  font-size: 16px;
  font-weight: 400;
  line-height: 1.25;
  color: #767676;
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

const AtSign = styled.span`
  font-size: 16px;
  font-weight: 700;
  line-height: 1.251875;
  color: #767676;
`;

export default TextInputBox;
