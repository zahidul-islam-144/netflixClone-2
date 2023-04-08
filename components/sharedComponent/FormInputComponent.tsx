import React from "react";
import { useForm } from "../../hooks/useForm";

// export interface inputPropsType extends React.HTMLAttributes<HTMLInputElement> {
//   name: string;
//   label: string;
//   onChange: React.ChangeEventHandler<HTMLInputElement>;
//   placeholder?: string;
//   value?: string | any;
//   type?: string;
//   error?: string;
//   checkValue: string;
//   checkType: string,
//   isCheck: string;
//   checkName: string;
// }

type inputPropsType = {
  input: string | any;
  value: string;
  onChange: (params: any) => any;
};

const FormInputComponent = ({
  value,
  onChange,
  ...inputProps
}: inputPropsType) => {
  return (
    <>
      <input {...inputProps} value={value} onChange={onChange} />
    </>
  );
};

export default FormInputComponent;
