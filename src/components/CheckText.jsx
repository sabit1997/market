import styled from 'styled-components';
import checkBox from '../assets/check-box.svg';

export default function CheckText() {
  return (
    <Warpper>
      <input
        type="checkbox"
        id="agree_input"
        name="agree_input"
        className="ir"
      />
      <CheckBox for="agree_input" />
      <Txt for="agree_input">
        주문 내용을 확인하였으며, 정보 제공 등에 동의합니다.
      </Txt>
    </Warpper>
  );
}

const Warpper = styled.div`
  display: flex;
  align-items: center;
`;

const CheckBox = styled.label`
  display: block;
  width: 16px;
  height: 16px;
  background-image: url(${checkBox});
  margin-right: 10px;
`;

const Txt = styled.label`
  font-size: 16px;
  font-weight: 400;
  line-height: 1.25;
`;
