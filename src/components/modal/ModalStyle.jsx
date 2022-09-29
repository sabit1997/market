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
  position: relative;
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
`;

export const AlertTxt = styled.p`
  font-size: 16px;
  font-weight: 400;
  line-height: 1.251875;
  text-align: center;
  margin-bottom: ${(props) => props.marginB};
`;