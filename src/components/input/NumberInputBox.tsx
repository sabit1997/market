import React from 'react';
import styled from 'styled-components';

interface NumberInputBoxProps {
  title: string;
  name: string;
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  unit: string;
}

export default function NumberInputBox(props: NumberInputBoxProps) {
  return (
    <>
      <H2 htmlFor="price_input">{props.title}</H2>
      <PriceSection>
        <Input
          type="number"
          id="price_input"
          name={props.name}
          value={props.value}
          onChange={props.onChange}
        />
        <Won>{props.unit}</Won>
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
  margin-bottom: 16px;
  overflow: hidden;
  &:last-child {
    margin-bottom: 0;
  }
`;

const Input = styled.input`
  width: 100%;
  padding: 17px 0 17px 16px;
  overflow: hidden;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.251875;
`;

const Won = styled.p`
  padding: 17px 20px 17px 19px;
  background-color: #c4c4c4;
  color: #fff;
  overflow: hidden;
`;
