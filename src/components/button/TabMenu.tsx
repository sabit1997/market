import React from 'react';

import { TabMenuProps } from '../../types/buttonTypes';

import { TabMenuOn, TabMenuOff } from './TabMenus';

export default function TabMenu({ state, value, type }: TabMenuProps) {
  return (
    <>
      {state === true ? (
        <TabMenuOn value={value} type={type} />
      ) : (
        <TabMenuOff value={value} type={type} />
      )}
    </>
  );
}
