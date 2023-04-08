import { useEffect, useState } from "react";

export interface IHandleChangeOptions {
  regex?: RegExp;
  errorMessage?: string;
  required?: boolean;
  requiredMessage?: string;
  validate?: (value: string) => boolean;
  formatter?: (value: string) => string;
}

export interface IUseFormOptions {
  debugging?: boolean;
}

export type TFormKey = string | number;
export type TFormValue = any;
export type TErrorValue = string;
export type TFormState = Record<TFormKey, TFormValue>;
export type TErrorState = Record<TFormKey, TErrorValue>;

const DEFAULT_ERROR_MESSAGE = "Invalid Value";
const DEFAULT_REQUIRED_MESSAGE = "This field is required";

const useForm = (
  initialFormState: TFormState = {},
  options: IUseFormOptions = {
    debugging: true,
  }
) => {
  const [form, setForm] = useState<TFormState>({ ...initialFormState });
  const [errors, setErrors] = useState<TErrorState>({});

  useEffect(() => {
    console.log({ form, errors });
  }, [form]);

  const valueSetter = (
    key: TFormKey,
    value: TFormValue,
    options?: IHandleChangeOptions
  ) => {
    let message = "";
    let isValid = false;
    if (value) {
      isValid = options?.validate
        ? options.validate(value)
        : options?.regex?.test(value) ?? true;
      message = isValid ? "" : options?.errorMessage || DEFAULT_ERROR_MESSAGE;
    } else {
      if (options?.required)
        message = options?.requiredMessage || DEFAULT_REQUIRED_MESSAGE;
      else isValid = true;
    }

    const formattedValue = options?.formatter
      ? options.formatter(value)
      : value;
    setForm((form) => ({ ...form, [key]: formattedValue }));
    setErrors((errors) => ({ ...errors, [key]: isValid ? "" : message }));
  };

  const handleTextbox =
    (key: TFormKey, options?: IHandleChangeOptions) =>
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value;
      valueSetter(key, value, options);
    };

  return {
    form,
    handleTextbox,
    errors,
  };
};

export default useForm;
