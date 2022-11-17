import { TabMenuOn, TabMenuOff } from './TabMenus';

export default function TabMenu({ state, value, type }) {
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
