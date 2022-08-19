import styled from 'styled-components';

export default function NumberInputBox() {
  return (
    <>
      <H2 for="price_input">판매가</H2>
      <PriceSection>
        <Input type="number" id="price_input" name="price_input" />
        <Won>원</Won>
      </PriceSection>
    </>
  );
}

const H2 = styled.label`
  font-size: 16px;
  font-weight: 400;
  line-height: 1.25;
  color: #767676;
  margin-bottom: 10px;
  display: block;
`;

const PriceSection = styled.div`
  width: 220px;
  border-radius: 5px;
  border: 1px solid #c4c4c4;
  display: flex;
`;

const Input = styled.input`
  width: 100%;
  padding: 17px 0 17px 16px;
  overflow: hidden;
`;

const Won = styled.p`
  padding: 17px 20px 17px 19px;
  background-color: #c4c4c4;
  color: #fff;
  overflow: hidden;
`;
