import React from 'react';
import styled from 'styled-components';

import { MDisabledButtonProps, CommonStyle } from '../../types/buttonTypes';

export default function MDisabledButton({
  wd,
  maxWd,
  marginR,
  basis,
  value,
}: MDisabledButtonProps) {
  return (
    <>
      <Button wd={wd} maxWd={maxWd} marginR={marginR} basis={basis}>
        {value}
      </Button>
    </>
  );
}

const Button = styled.button.attrs({ type: 'button' })<CommonStyle>`
  width: ${(props) => props.wd};
  max-width: ${(props) => props.maxWd};
  height: 60px;
  font-size: 18px;
  font-weight: 700;
  line-height: 1.22;
  background-color: #c4c4c4;
  color: #fff;
  border-radius: 5px;
  margin-right: ${(props) => props.marginR};
  flex-basis: ${(props) => props.basis};
  @media screen and (max-width: 390px) {
    height: 35px;
    font-size: 12px;
  }
`;
