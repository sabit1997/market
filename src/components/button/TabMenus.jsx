import styled from 'styled-components';

export function TabMenuOff({ type, value }) {
  console.log(value);
  return (
    <>
      <OffWarpper type={type}>
        <Txt type={type}>{value}</Txt>
        {type === 'false' ? null : <NoticeTxt>1</NoticeTxt>}
      </OffWarpper>
    </>
  );
}

export function TabMenuOn({ value, type }) {
  return (
    <>
      <OnWarpper>
        <Txt>{value}</Txt>
        {type === 'false' ? null : <NoticeTxt>1</NoticeTxt>}
      </OnWarpper>
    </>
  );
}

const OffWarpper = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 250px;
  height: 50px;
  border-radius: 5px;
  padding: 0 15px 0 20px;
  background-color: #fff;
  &:hover {
    background-color: #effff3;
  }
`;

const OnWarpper = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 250px;
  height: 50px;
  border-radius: 5px;
  color: #fff;
  padding: 0 15px 0 20px;
  background-color: #21bf48;
`;

const Txt = styled.p`
  font-size: 16px;
  font-weight: 500;
  line-height: 1.251875;
  text-align: center;
`;

const NoticeTxt = styled.span`
  width: 20px;
  height: 20px;
  font-size: 12px;
  font-weight: 500;
  line-height: 1.251666666666667;
  padding: 2px 0 3px 0;
  background-color: #eb5757;
  color: #fff;
  border-radius: 50px;
  text-align: center;
`;
