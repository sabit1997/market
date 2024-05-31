import { FieldError, FieldErrorsImpl, Merge } from 'react-hook-form';

function getErrorMessage(
  message: string | FieldError | Merge<FieldError, FieldErrorsImpl<any>>
): string {
  return typeof message === 'string' ? message : '';
}

export default getErrorMessage;
