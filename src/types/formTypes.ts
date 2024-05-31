import { FieldErrors, FieldValues } from 'react-hook-form';

import { FailMesssage, Success } from './inputBoxTypes';

export type FormError = FieldErrors<FieldValues>;

export type ValidationStatus = FailMesssage | Success | Record<string, never>;
