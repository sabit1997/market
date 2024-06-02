import React from 'react';
import styled from 'styled-components';

import { TabDisabledButtonProps } from '../../types/buttonTypes';

export default function TabDisabledButton(props: TabDisabledButtonProps) {
  return (
    <>
      <Button>{props.value}</Button>
    </>
  );
}

const Button = styled.button`
  width: 320px;
  height: 60px;
  background-color: #fff;
  color: #767676;
  position: relative;
  font-size: 18px;
  font-weight: 700;
  line-height: 1.252222222222222;
  @media screen and (max-width: 390px) {
    width: 100%;
    font-size: 12px;
  }
  &:after {
    content: '';
    width: 100%;
    height: 6px;
    background-color: #e0e0e0;
    position: absolute;
    bottom: 0;
    left: 0;
  }
`;
