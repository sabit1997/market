import styled from 'styled-components';

export const InfoInputItem = styled.li`
  display: flex;
  align-items: center;
  width: 100%;
  height: 56px;
  border-bottom: 1px solid #c4c4c4;
  margin-bottom: ${(props) => props.marginB};
`;

export const Label = styled.label`
  width: 170px;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.251875;
  position: relative;
`;

export const NormalInput = styled.input`
  width: ${(props) => props.wd};
  height: 40px;
  border: 1px solid #c4c4c4;
  margin: ${(props) => props.margin};
`;

export const PhoneNumberInput = styled.input`
  width: 100px;
  height: 40px;
  border: 1px solid #c4c4c4;
  &:nth-child(2) {
    width: 80px;
  }
`;

export const Dash = styled.span`
  font-size: 16px;
  font-weight: 400;
  line-height: 1.251875;
  margin: 0 10px;
`;

export const InfoInputItemCol = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 152px;
  border-bottom: 1px solid #c4c4c4;
  margin-bottom: ${(props) => props.marginB};
`;

export const RowWarpper = styled.div`
  display: flex;
  margin-top: 8px;
  margin-bottom: 8px;
`;
