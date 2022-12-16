import styled from 'styled-components';

export const InfoInputItem = styled.li`
  display: flex;
  align-items: center;
  width: 100%;
  height: 56px;
  border-bottom: 1px solid #c4c4c4;
  margin-bottom: ${(props) => props.marginB};
  @media ${(props) => props.theme.mobile} {
  }
`;

export const Label = styled.label`
  width: 170px;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.251875;
  flex-shrink: 0;
  position: relative;
  @media ${(props) => props.theme.mobile} {
    font-size: 12px;
    width: 60px;
  }
`;

export const NormalInput = styled.input.attrs({ type: 'text' })`
  width: 100%;
  max-width: ${(props) => props.maxWd};
  height: 40px;
  border: 1px solid #c4c4c4;
  margin: ${(props) => props.margin};
  @media ${(props) => props.theme.mobile} {
    width: 250px;
    height: 25px;
    font-size: 12px;
  }
`;

export const PhoneNumberInput = styled.input.attrs({ type: 'number' })`
  width: 100px;
  height: 40px;
  border: 1px solid #c4c4c4;
  &:nth-child(2) {
    width: 80px;
    @media ${(props) => props.theme.mobile} {
      width: 60px;
    }
  }
  @media ${(props) => props.theme.mobile} {
    font-size: 12px;
    height: 25px;
    width: 68px;
  }
`;

export const Dash = styled.span`
  font-size: 16px;
  font-weight: 400;
  line-height: 1.251875;
  margin: 0 10px;
  @media ${(props) => props.theme.mobile} {
  }
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
  border-bottom: 1px solid #c4c4c4;
`;
