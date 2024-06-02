import React from 'react';
import styled from 'styled-components';

import { MButtonProps, CommonStyle } from '../../types/buttonTypes';

export default function MButton(props: MButtonProps) {
  return (
    <>
      <Button
        wd={props.wd}
        maxWd={props.maxWd}
        mobileWd={props.mobileWd}
        marginR={props.marginR}
        basis={props.basis}
        onClick={props.onClick}
      >
        {props.value}
      </Button>
    </>
  );
}

const Button = styled.button<CommonStyle>`
  max-width: ${(props) => props.maxWd};
  width: ${(props) => props.wd};
  height: 60px;
  font-size: 18px;
  font-weight: 700;
  line-height: 1.22;
  background-color: #21bf48;
  color: #fff;
  border-radius: 5px;
  margin-right: ${(props) => props.marginR};
  flex-basis: ${(props) => props.basis};
  @media ${(props) => props.theme.mobile} {
    width: ${(props) => props.mobileWd};
    height: 35px;
    font-size: 12px;
  }
`;
