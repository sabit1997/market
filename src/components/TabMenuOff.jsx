import styled from 'styled-components';

export default function TabMenuOff() {
  return (
    <>
      <Warpper>
        <Txt>판매중인 상품(3)</Txt>
      </Warpper>
    </>
  );
}

const Warpper = styled.section`
  width: 250px;
  height: 50px;
  border-radius: 5px;
  position: relative;
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
  position: absolute;
  top: 50%;
  left: 20px;
  transform: translateY(-50%);
  &::after {
    content: '1';
    font-size: 12px;
    font-weight: 500;
    line-height: 1.251666666666667;
    padding: 2px 6px 3px 6px;
    background-color: #eb5757;
    color: #fff;
    border-radius: 50px;
    margin-left: 77px;
    text-align: center;
  }
`;
