import React from 'react';
import styled from 'styled-components';

import { SButtonProps, CommonStyle } from '../../types/buttonTypes';

export default function SButton({
  wd,
  mobileWd,
  mobileHg,
  onClick,
  value,
}: SButtonProps) {
  return (
    <>
      <Button wd={wd} mobileWd={mobileWd} mobileHg={mobileHg} onClick={onClick}>
        {value}
      </Button>
    </>
  );
}

const Button = styled.button.attrs({ type: 'button' })<CommonStyle>`
  width: ${(props) => props.wd};
  height: 40px;
  border-radius: 5px;
  background-color: #21bf48;
  color: #fff;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.251875;
  @media ${(props) => props.theme.mobile} {
    font-size: 12px;
    width: ${(props) => props.mobileWd};
    height: ${(props) => props.mobileHg};
  }
`;
