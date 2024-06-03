import React from 'react';
import styled from 'styled-components';

import { MsIconButtonProps, CommonStyle } from '../../types/buttonTypes';

export default function MsIconButton({
  onClick,
  wd,
  src,
  value,
}: MsIconButtonProps) {
  return (
    <Button onClick={onClick} wd={wd}>
      <Img src={src} />
      {value}
    </Button>
  );
}

const Button = styled.button<CommonStyle>`
  width: ${(props) => props.wd};
  max-width: ${(props) => props.maxWd};
  height: 54px;
  font-size: 18px;
  font-weight: 500;
  line-height: 1.252222222222222;
  color: #fff;
  background-color: #21bf48;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  @media ${(props) => props.theme.mobile} {
    width: 100px;
    height: 30px;
    font-size: 12px;
  }
`;

const Img = styled.img`
  width: 30px;
  height: 30px;
  margin-right: 8px;
  @media ${(props) => props.theme.mobile} {
    width: 15px;
    height: 15px;
  }
`;
