import React from 'react';
import styled from 'styled-components';

import { CommonStyle, MS16pWhiteButtonProps } from '../../types/buttonTypes';

export default function MS16pWhiteButton({
  wd,
  mobileWd,
  margin,
  type,
  onClick,
  value,
}: MS16pWhiteButtonProps) {
  return (
    <>
      <Button
        wd={wd}
        mobileWd={mobileWd}
        margin={margin}
        type={type}
        onClick={onClick}
      >
        {value}
      </Button>
    </>
  );
}

const Button = styled.button<CommonStyle>`
  width: ${(props) => props.wd};
  height: 55px;
  border: 1px solid #c4c4c4;
  border-radius: 5px;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.251875;
  background-color: #fff;
  color: #767676;
  margin: ${(props) => props.margin};
  cursor: pointer;
  &:hover {
    border: 1px solid #767676;
    color: #000;
  }
  @media ${(props) => props.theme.mobile} {
    font-size: 12px;
    width: ${(props) => props.mobileWd};
    height: 37px;
  }
`;
