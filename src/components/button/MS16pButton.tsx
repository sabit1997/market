import React from 'react';
import styled from 'styled-components';

import { MS16pButtonProps, CommonStyle } from '../../types/buttonTypes';

export default function MS16pButton({
  wd,
  mobileWd,
  maxWd,
  margin,
  mobileMargin,
  type,
  onClick,
  pd,
  value,
}: MS16pButtonProps) {
  return (
    <>
      <Button
        wd={wd}
        mobileWd={mobileWd}
        maxWd={maxWd}
        margin={margin}
        mobileMargin={mobileMargin}
        type={type}
        onClick={onClick}
        pd={pd}
      >
        {value}
      </Button>
    </>
  );
}

const Button = styled.button<CommonStyle>`
  width: ${(props) => props.wd};
  max-width: ${(props) => props.maxWd};
  height: 54px;
  border-radius: 5px;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.251875;
  background-color: #21bf48;
  color: #fff;
  margin: ${(props) => props.margin};
  padding: ${(props) => props.pd};
  flex-shrink: 0;
  cursor: pointer;
  @media ${(props) => props.theme.mobile} {
    font-size: 12px;
    width: ${(props) => props.mobileWd};
    height: 37px;
    margin: ${(props) => props.mobileMargin};
  }
`;
