import styled from 'styled-components';

import close from '../../assets/icon-delete.svg';

export const ModalWarpper = styled.article`
  width: 360px;
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  padding-bottom: 40px;
  border: 1px solid #c4c4c4;
  background-color: #fff;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 10;
  @media ${(props) => props.theme.mobile} {
    width: 200px;
    height: 100px;
    padding-bottom: 8px;
  }
`;

export const CloseButton = styled.button`
  width: 22px;
  height: 22px;
  background-image: url(${close});
  background-repeat: no-repeat;
  background-size: 22px;
  cursor: pointer;
  position: absolute;
  top: 18px;
  right: 18px;
  @media ${(props) => props.theme.mobile} {
    width: 10px;
    height: 10px;
    background-size: contain;
    top: 5px;
    right: 5px;
  }
`;

export const AlertTxt = styled.p<{ marginB: string }>`
  font-size: 16px;
  font-weight: 400;
  line-height: 1.251875;
  text-align: center;
  margin-bottom: ${(props) => props.marginB};
  @media ${(props) => props.theme.mobile} {
    font-size: 9px;
  }
`;

export const AlertContentsWarp = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
