import { useState } from 'react';
import React from 'react';
import styled from 'styled-components';

import checkBox from '../../assets/check-box.svg';
import fillCheckBox from '../../assets/check-fill-box.svg';

interface CheckTextProps {
  marginB: string;
  value?: string;
  setChecked: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function CheckText({
  setChecked,
  marginB,
  value,
}: CheckTextProps) {
  const [check, setCheck] = useState(false);

  function handleChecked() {
    setCheck(!check);
    setChecked(!check);
  }
  return (
    <Warpper marginB={marginB}>
      <input
        type="checkbox"
        id="agree_input"
        name="agree_input"
        className="ir"
      />
      <CheckBox htmlFor="agree_input" check={check} onClick={handleChecked} />
      <Txt htmlFor="agree_input" onClick={handleChecked}>
        {value === '회원가입' ? (
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

const Warpper = styled.div<{ marginB: string }>`
  display: flex;
  margin-bottom: ${(props) => props.marginB};
  @media ${(props) => props.theme.mobile} {
    margin-top: 15px;
  }
`;

const CheckBox = styled.label<{ check: boolean }>`
  display: block;
  width: 16px;
  height: 16px;
  background-image: ${(props) =>
    props.check === true ? `url(${fillCheckBox})` : `url(${checkBox})`};
  margin-right: 10px;
  flex-shrink: 0;
  @media ${(props) => props.theme.mobile} {
    width: 12px;
    height: 12px;
    background-size: contain;
    margin-right: 7px;
  }
`;

const Txt = styled.label`
  font-size: 16px;
  font-weight: 400;
  line-height: 1.25;
  max-width: 454px;
  @media ${(props) => props.theme.mobile} {
    font-size: 12px;
  }
`;

const BoldLineTxt = styled.p`
  display: inline-block;
  font-size: 16px;
  font-weight: 700;
  line-height: 1.251875;
  color: #767676;
  text-decoration: underline;
  @media ${(props) => props.theme.mobile} {
    font-size: 12px;
  }
`;
