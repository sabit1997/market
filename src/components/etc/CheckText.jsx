import styled from 'styled-components';
import { useState } from 'react';
import checkBox from '../../assets/check-box.svg';
import fillCheckBox from '../../assets/check-fill-box.svg';

export default function CheckText(props) {
  const [check, setCheck] = useState(false);

  function handleChecked() {
    setCheck(!check);
    props.setChecked(!check);
  }
  console.log(check);
  return (
    <Warpper marginB={props.marginB}>
      <input
        type="checkbox"
        id="agree_input"
        name="agree_input"
        className="ir"
      />
      <CheckBox htmlFor="agree_input" check={check} onClick={handleChecked} />
      <Txt htmlFor="agree_input" value={props.value} onClick={handleChecked}>
        {props.value === '회원가입' ? (
          <>
            호두샵의 <BoldLineTxt>이용약관</BoldLineTxt> 및{' '}
            <BoldLineTxt>개인정보처리방침</BoldLineTxt>에 대한 내용을 확인하였고
            동의합니다.
          </>
        ) : (
          '주문 내용을 확인하였으며, 정보 제공 등에 동의합니다.'
        )}
      </Txt>
    </Warpper>
  );
}

const Warpper = styled.div`
  display: flex;
  margin-bottom: ${(props) => props.marginB};
`;

const CheckBox = styled.label`
  display: block;
  width: 16px;
  height: 16px;
  background-image: ${(props) =>
    props.check === true ? `url(${fillCheckBox})` : `url(${checkBox})`};
  margin-right: 10px;
`;

const Txt = styled.label`
  font-size: 16px;
  font-weight: 400;
  line-height: 1.25;
  max-width: 454px;
`;

const BoldLineTxt = styled.p`
  display: inline-block;
  font-size: 16px;
  font-weight: 700;
  line-height: 1.251875;
  color: #767676;
  text-decoration: underline;
`;
