import styled from 'styled-components';

export default function TabMenuOff(props) {
  return (
    <>
      <Warpper type={props.type}>
        <Txt type={props.type}>{props.value}</Txt>
        {props.type === 'false' ? null : <NoticeTxt>1</NoticeTxt>}
      </Warpper>
    </>
  );
}

const Warpper = styled.section`
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
