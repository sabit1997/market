import React from 'react';
import styled from 'styled-components';

interface ButtonStyle {
  margin: string;
  mobileWd: string;
  mobileHg: string;
}

interface LDisabledButtonProps extends ButtonStyle {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  value: string;
}

export default function LDisabledButton(props: LDisabledButtonProps) {
  return (
    <Button
      margin={props.margin}
      mobileWd={props.mobileWd}
      mobileHg={props.mobileHg}
      onClick={props.onClick}
    >
      {props.value}
    </Button>
  );
}

const Button = styled.button<ButtonStyle>`
  width: 220px;
  height: 68px;
  font-size: 24px;
  font-weight: 700;
  line-height: 1.25;
  color: #fff;
  background-color: #c4c4c4;
  border-radius: 5px;
  margin: ${(props) => props.margin};
  @media ${(props) => props.theme.mobile} {
    width: ${(props) => props.mobileWd};
    height: ${(props) => props.mobileHg};
    font-size: 18px;
  }
`;
