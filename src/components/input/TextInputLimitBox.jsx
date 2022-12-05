import styled from 'styled-components';

export default function TextInputLimitBox(props) {
  return (
    <>
      <ProductName htmlFor="name_input">상품명</ProductName>
      <InputSection>
        <Input
          type="text"
          id="name_input"
          name={props.name}
          value={props.value}
          onChange={props.onChange}
          maxLength="50"
        />
        <InputLimit>{props.productName.length}/50</InputLimit>
      </InputSection>
    </>
  );
}

const ProductName = styled.label`
  font-size: 16px;
  font-weight: 400;
  line-height: 1.25;
  color: #767676;
  margin-bottom: 10px;
  display: block;
`;

const InputSection = styled.div`
  position: relative;
  width: 100%;
  max-width: 826px;
  border: 1px solid #c4c4c4;
  border-radius: 5px;
  margin-bottom: 16px;
`;

const Input = styled.input`
  width: 92%;
  padding: 17px 0 17px 16px;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.251875;
`;

const InputLimit = styled.span`
  font-size: 14px;
  font-weight: 400;
  line-height: 1.25;
  color: #c4c4c4;
  position: absolute;
  top: 19px;
  right: 6.7%;
`;
