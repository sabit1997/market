import styled from 'styled-components';

export const Warpper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: ${(props) => props.marginB};
`;

export const InputWarpper = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: ${(props) => props.marginB};
`;

export const Txt = styled.label`
  font-size: 16px;
  font-weight: 400;
  line-height: 1.25;
  color: #767676;
  margin-top: ${(props) => props.marginT};
  margin-bottom: 10px;
  display: block;
`;

export const IdInput = styled.input`
  width: ${(props) => props.wd};
  padding: 17px 0 17px 16px;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.25;
  border-radius: 5px;
  border: ${(props) => props.border};
  &::placeholder {
    color: #000;
  }
`;

export const ValidMessage = styled.span`
  font-size: 16px;
  font-weight: 400;
  line-height: 1.251875;
  margin-top: 10px;
  color: ${(props) => props.color};
`;

export const Input = styled.input`
  width: ${(props) => props.wd};
  padding: 17px 0 17px 16px;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.25;
  border-radius: 5px;
  border: 1px solid #c4c4c4;
  &::placeholder {
    color: #000;
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
  height: 54px;
  border: none;
`;

export const PasswordCheck = styled.img`
  width: 28px;
  height: 28px;
  margin-right: 13px;
`;

export const AtSign = styled.span`
  font-size: 16px;
  font-weight: 700;
  line-height: 1.251875;
  color: #767676;
`;
