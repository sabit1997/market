import styled from 'styled-components';

export const Warpper = styled.section`
  display: flex;
  align-items: center;
  width: 1280px;
  height: 60px;
  background-color: #f2f2f2;
  border-radius: 10px;
  margin-bottom: ${(props) => props.marginB};
`;

export const AllCheckBtn = styled.button`
  width: 20px;
  height: 20px;
  border: 2px solid #21bf48;
  border-radius: 50%;
  box-sizing: border-box;
  margin-left: 30px;
  margin-right: 314px;
  position: relative;
  &::after {
    content: '';
    display: ${(props) => (props.allChecked === false ? 'none;' : 'block')};
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background-color: #21bf48;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

export const Txt = styled.p`
  font-size: 18px;
  font-weight: 400;
  line-height: 1.25;
  margin-left: ${(props) => props.marginL};
  margin-right: ${(props) => props.marginR};
  word-break: keep-all;
`;
