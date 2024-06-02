import React from 'react';
import styled from 'styled-components';

import { SWhiteButtonProps, CommonStyle } from '../../types/buttonTypes';

export default function SWhiteButton(props: SWhiteButtonProps) {
  return (
    <>
      <Button wd={props.wd} marginR={props.marginR} onClick={props.onClick}>
        {props.value}
      </Button>
    </>
  );
}

const Button = styled.button<CommonStyle>`
  width: ${(props) => props.wd};
  height: 40px;
  border: 1px solid #c4c4c4;
  border-radius: 5px;
  background-color: #fff;
  color: #767676;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.251875;
  margin-right: ${(props) => props.marginR};
  &:hover {
    border: 1px solid #767676;
    color: #000;
  }
  @media ${(props) => props.theme.mobile} {
    font-size: 12px;
    width: 40px;
    height: 20px;
  }
`;
