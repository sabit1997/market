import styled from 'styled-components';

export const Warpper = styled.div<{ marginB: string; marginT: string }>`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: ${(props) => props.marginB};
  margin-top: ${(props) => props.marginT};
`;

export const InputWarpper = styled.section<{ marginB: string }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: ${(props) => props.marginB};
`;

export const Txt = styled.label<{ marginT: string }>`
  font-size: 16px;
  font-weight: 400;
  line-height: 1.25;
  color: #767676;
  margin-top: ${(props) => props.marginT};
  margin-bottom: 10px;
  display: block;
  @media ${(props) => props.theme.mobile} {
    font-size: 12px;
  }
`;

export const IdInput = styled.input<{ wd: string; border: string }>`
  width: ${(props) => props.wd};
  height: 54px;
  padding: 17px 0 17px 16px;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.25;
  border-radius: 5px;
  border: ${(props) => props.border};
  &::placeholder {
    color: #000;
  }
  @media ${(props) => props.theme.mobile} {
    font-size: 12px;
    height: 37px;
  }
`;

export const ValidMessage = styled.span`
  font-size: 16px;
  font-weight: 400;
  line-height: 1.251875;
  margin-top: 10px;
  color: ${(props) => props.color};
  @media ${(props) => props.theme.mobile} {
    font-size: 12px;
  }
`;

export const Input = styled.input<{ wd: string; maxWd: string }>`
  width: ${(props) => props.wd};
  max-width: ${(props) => props.maxWd};
  padding: 17px 0 17px 16px;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.25;
  border-radius: 5px;
  border: 1px solid #c4c4c4;
  &::placeholder {
    color: #000;
  }
  @media ${(props) => props.theme.mobile} {
    font-size: 12px;
    padding: 10px 5px;
  }
`;

export const PasswordInputWarpper = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid #c4c4c4;
  border-radius: 5px;
  overflow: hidden;
`;

export const PasswordInput = styled.input`
  width: 100%;
  padding: 17px 0 17px 16px;
  border: none;
  @media ${(props) => props.theme.mobile} {
    font-size: 12px;
    padding: 10px 5px;
  }
`;

export const PasswordCheck = styled.img`
  width: 28px;
  height: 28px;
  margin-right: 13px;
  @media ${(props) => props.theme.mobile} {
    width: 18px;
  }
`;

export const AtSign = styled.span`
  font-size: 16px;
  font-weight: 700;
  line-height: 1.251875;
  color: #767676;
  margin: 0 3%;
  @media ${(props) => props.theme.mobile} {
    font-size: 12px;
    margin: 0 5px;
  }
`;
