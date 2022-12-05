import styled from 'styled-components';

export const Warpper = styled.section`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 1280px;
  height: 60px;
  padding-left: 2.34%;
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
    @media ${(props) => props.theme.mobile} {
      width: 9px;
      height: 9px;
    }
  }
  @media ${(props) => props.theme.mobile} {
    width: 15px;
    height: 15px;
  }
`;

export const Txt = styled.p`
  width: ${(props) => props.wd};
  font-size: 18px;
  font-weight: 400;
  line-height: 1.25;
  text-align: center;
  word-break: keep-all;
  @media ${(props) => props.theme.mobile} {
    font-size: 12px;
  }
`;
