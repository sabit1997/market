import { FieldValues, UseFormRegister } from 'react-hook-form';

import { FormError, ValidationStatus } from './formTypes';

export type FailMesssage = {
  FAIL_Message: string;
};

export type Success = {
  Success: string;
};

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
  prefixNum: string;
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
