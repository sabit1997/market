import styled from 'styled-components';

export const Warpper = styled.form`
  max-width: 550px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 100px;
  margin: 0 auto;
  padding: 0 10px;
`;

export const Logo = styled.img`
  width: 238px;
  height: 74px;
  margin-bottom: 70px;
`;

export const LoginBox = styled.section`
  width: 550px;
  margin-bottom: 30px;
`;

export const LoginSelletor = styled.button<{ joinType: 'BUYER' | 'SELLER' }>`
  width: 275px;
  border: 1px solid #c4c4c4;
  border-radius: 10px;
  background-color: ${(props) =>
    props.joinType === 'BUYER' ? '#fff' : '#f2f2f2'};
  font-size: 18px;
  font-weight: 500;
  line-height: 1.222222222222222;
  padding: 20px 0 38px;
  cursor: pointer;
  &:nth-child(2) {
    background-color: ${(props) =>
      props.joinType === 'BUYER' ? '#f2f2f2' : '#fff'};
  }
`;

export const InputBox = styled.section<{ joinType: 'BUYER' | 'SELLER' }>`
  width: 550px;
  border-radius: 10px;
  background-color: #fff;
  margin-top: -20px;
  border: 1px solid #c4c4c4;
  z-index: 1;
  position: relative;
  padding: 40px 35px 36px 35px;
  &::after {
    content: '';
    width: 273px;
    height: 15px;
    position: absolute;
    top: -5px;
    ${(props) => (props.joinType === 'BUYER' ? 'left: 0;' : 'right: 0;')}
    background-color: #fff;
  }
`;

export const IdInputWarpper = styled.div<{ marginT?: string }>`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: ${(props) => props.marginT};
`;
