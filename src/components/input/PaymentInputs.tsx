import React from 'react';
import { useDaumPostcodePopup } from 'react-daum-postcode';
import { FieldValues, UseFormRegister } from 'react-hook-form';

import SButton from '../button/SButton';

import {
  InfoInputItem,
  Label,
  NormalInput,
  PhoneNumberInput,
  Dash,
  RowWarpper,
} from './PaymentInputsStyle';

interface PhoneNumInputProps {
  // TODO: 타입 수정
  value1?: string;
  value2?: string;
  value3?: string;
  register?: UseFormRegister<FieldValues>;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  activation?: string;
}

export function NameInput(props) {
  return (
    <InfoInputItem>
      <Label htmlFor={props.name}>이름</Label>
      <NormalInput
        maxWd="334px"
        name={props.name}
        value={props.value}
        onChange={props.onChange}
      />
    </InfoInputItem>
  );
}

export function PhoneNumInput({
  value1,
  value2,
  value3,
  register,
  onChange,
  activation,
}: PhoneNumInputProps) {
  return (
    <InfoInputItem>
      <Label htmlFor="phone_number1">휴대폰</Label>
      <PhoneNumberInput
        value={value1}
        id="phone_number1"
        {...(activation === 'true'
          ? {
              ...register('phone_number1', {
                required: '필수 정보입니다.',
                maxLength: 3,

                onChange: (e) => {
                  onChange(e);
                },
              }),
            }
          : null)}
      />
      <Dash>-</Dash>
      <PhoneNumberInput
        value={value2}
        {...(activation === 'true'
          ? {
              ...register('phone_number2', {
                required: '필수 정보입니다.',
                maxLength: 4,
                onChange: (e) => {
                  onChange(e);
                },
              }),
            }
          : null)}
      />
      <Dash>-</Dash>
      <PhoneNumberInput
        value={value3}
        {...(activation === 'true'
          ? {
              ...register('phone_number3', {
                required: '필수 정보입니다.',
                maxLength: 4,
                onChange: (e) => {
                  onChange(e);
                },
              }),
            }
          : null)}
      />
    </InfoInputItem>
  );
}

export function EmailInput() {
  return (
    <InfoInputItem marginB="40px">
      <Label>이메일</Label>
      <NormalInput maxWd="334px" />
    </InfoInputItem>
  );
}

export function ReceiverInput({ value, register, onChange }) {
  return (
    <InfoInputItem>
      <Label htmlFor="receiver">수령인</Label>
      <NormalInput
        id="receiver"
        maxWd="334px"
        value={value}
        {...register('receiver', {
          required: '필수 정보입니다.',
          onChange: (e) => {
            onChange(e);
          },
        })}
      />
    </InfoInputItem>
  );
}

export function AddressInput({
  value1,
  value2,
  value3,
  register,
  onChange,
  handleInputs,
  inputs,
}) {
  const scriptUrl =
    '//t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js';
  const open = useDaumPostcodePopup(scriptUrl);

  const handleComplete = (data) => {
    const zoneCode = data.zonecode;
    let fullAddress = data.address;
    let extraAddress = '';

    if (data.addressType === 'R') {
      if (data.bname !== '') {
        extraAddress += data.bname;
      }
      if (data.buildingName !== '') {
        extraAddress +=
          extraAddress !== '' ? `, ${data.buildingName}` : data.buildingName;
      }
      fullAddress += extraAddress !== '' ? ` (${extraAddress})` : '';
    }

    handleInputs({
      ...inputs,
      zip_code: zoneCode,
      address1: fullAddress,
    });
  };

  const handleClick = () => {
    open({ onComplete: handleComplete });
  };
  return (
    <RowWarpper>
      <Label htmlFor="zip_code">배송주소</Label>
      <div>
        <NormalInput
          id="zip_code"
          maxWd="170px"
          margin="0 10px 8px 0"
          value={value1}
          readOnly
          {...register('zip_code', {
            required: '필수 정보입니다.',
          })}
          onClick={handleClick}
        />
        <SButton
          value="우편번호 조회"
          wd="154px"
          hg="40px"
          mobileWd="80px"
          mobileHg="25px"
          type="button"
          onClick={handleClick}
        />
        <NormalInput
          maxWd="800px"
          margin="0 0 8px 0"
          value={value2}
          readOnly
          {...register('address1', {
            required: '필수 정보입니다.',
          })}
        />
        <NormalInput
          wd="800px"
          margin="0 0 8px 0px"
          value={value3}
          {...register('address2', {
            onChange: (e) => {
              onChange(e);
            },
          })}
        />
      </div>
    </RowWarpper>
  );
}

export function AddressMessageInput({ value, register, onChange }) {
  return (
    <InfoInputItem marginB="70px">
      <Label htmlFor="address_message">배송 메시지</Label>
      <NormalInput
        id="address_message"
        wd="800px"
        value={value}
        {...register('address_message', {
          onChange: (e) => {
            onChange(e);
          },
        })}
      />
    </InfoInputItem>
  );
}
