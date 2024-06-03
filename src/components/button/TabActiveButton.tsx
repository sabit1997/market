import React from 'react';
import styled from 'styled-components';

import { TabActiveButtonProps } from '../../types/buttonTypes';

export default function TabActiveButton({ value }: TabActiveButtonProps) {
  return (
    <>
      <Button>{value}</Button>
    </>
  );
}

const Button = styled.button`
  width: 320px;
  height: 60px;
  background-color: #fff;
  color: #21bf48;
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
    background-color: #21bf48;
    position: absolute;
    bottom: 0;
    left: 0;
  }
`;
