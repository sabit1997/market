import React from 'react';
import { FieldValues, UseFormRegister } from 'react-hook-form';

import { UseInputsProps } from '../hooks/useInputs';

import { FormError, ValidationStatus } from './formTypes';

export type FailMesssage = {
  FAIL_Message: string;
};

export type Success = {
  Success: string;
};

export type PrefixNum = '010' | '011' | '016' | '017' | '018' | '019';
export interface NumDropdownProps {
  prefixNum: PrefixNum;
  setPrefixNum: React.Dispatch<React.SetStateAction<PrefixNum>>;
}

export interface Formhandlers {
  register: UseFormRegister<FieldValues>;
  handleInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
  errors: FormError;
}

export interface IdTextInputBoxProps extends Formhandlers {
  value: string;
  accountValid: ValidationStatus;
}

export interface PasswordTextInputBoxProps extends Formhandlers {
  value: string;
  password: string;
}

export interface PasswordReconFirmTextInputBoxProps extends Formhandlers {
  value: string;
  password: string;
  password2: string;
}

export interface NameTextInputBoxProps extends Formhandlers {
  value: string;
}

export interface PhoneNumberTextInputBoxProps extends Formhandlers {
  value: string;
  value2: string;
  prefixNum: PrefixNum;
  setPrefixNum: React.Dispatch<React.SetStateAction<string>>;
}

export interface EmailTextInputBoxProps extends Formhandlers {
  value: string;
  value2: string;
}

export interface CompanyNumTextInputBoxProps extends Formhandlers {
  value: string;
  companyNumValid: ValidationStatus;
}

export interface StoreNameTextInputBoxProps extends Formhandlers {
  value: string;
}

export interface PhoneNumInputProps {
  // TODO: 타입 수정
  value1?: string;
  value2?: string;
  value3?: string;
  register?: UseFormRegister<FieldValues>;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  activation?: string;
}

export interface NameInputProps {
  name?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface ReceiverInputProps {
  value: string;
  register: UseFormRegister<FieldValues>;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface AddressInputProps {
  value1: string;
  value2: string;
  value3: string;
  register: UseFormRegister<FieldValues>;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleInputs: (value: UseInputsProps) => void;
  inputs: UseInputsProps;
}
export interface AddressMessageInputProps {
  value: string;
  register: UseFormRegister<FieldValues>;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface TextInputProps {
  placeholder?: string;
  name?: string;
  value: string;
  type?: React.HTMLInputTypeAttribute;
  marginB: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  textInput?: React.Ref<HTMLInputElement>;
}
