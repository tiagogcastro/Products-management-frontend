import { ValidationError } from 'yup';

interface IErrors {
  [key: string]: string;
}

export default function getValidationErrors(err: ValidationError): IErrors {
  const validationErrors: IErrors = {};

  err.inner.forEach((error) => {
    validationErrors[String(error.path)] = error.message;
  });

  return validationErrors;  
}