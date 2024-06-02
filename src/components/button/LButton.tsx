import React from 'react';
import styled from 'styled-components';

import { CommonStyle, LButtonProps } from '../../types/buttonTypes';

export default function LButton(props: LButtonProps) {
  return (
    <>
      <Button
        margin={props.margin}
        mobileWd={props.mobileWd}
        mobileHg={props.mobileHg}
        onClick={props.onClick}
      >
        {props.value}
      </Button>
    </>
  );
}

const Button = styled.button<CommonStyle>`
  width: 220px;
  height: 68px;
  font-size: 24px;
  font-weight: 700;
  line-height: 1.25;
  color: #fff;
  background-color: #21bf48;
  border-radius: 5px;
  margin: ${(props) => props.margin};
  @media ${(props) => props.theme.mobile} {
    width: ${(props) => props.mobileWd};
    height: ${(props) => props.mobileHg};
    font-size: 18px;
  }
`;
