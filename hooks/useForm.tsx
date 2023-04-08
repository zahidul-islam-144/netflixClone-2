import React, { FormEvent, useState } from "react";

type inputTypes = {
  phn_email?: string | null;
  password?: string | null;
};

type checkBoxType = {
    rememberMe: boolean|any;
};

type loadingType = {
  isLoading: boolean;
};

const initialData = {
  phn_email: "",
  password: "",
};

export const useForm = () => {
  const [inputValues, setInputValues] = useState<inputTypes | any>(initialData);
  const [checkboxValue, setCheckBoxValue] = useState(false)
  const [isLoading, setIsLoading] = useState<loadingType>({ isLoading: true });

  const hasWindow = typeof window !== 'undefined'

  const resetForm = () => {
    setInputValues({
      phn_email: "",
      password: "",
    });
  };

  const handleInputs = (e: React.FormEvent<HTMLInputElement>): void => {
    /*  
    alternative:: e: React.SyntheticEvent
    SyntheticEvent event is used when unsure about the type of event. BaseSyntheticEvent for all DOM event.

*/
    const { name, value } = e.target as HTMLInputElement;
    setInputValues((prevInputs: any) => ({ ...prevInputs, [name]: value }));
    console.log("💛inputValues:useForm (customHook):", inputValues);
  };

  const handleCheckBox = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { checked, value, name } = e.target;
    setCheckBoxValue((prchecked)=> checked);
    
    console.log("💛checkboxValue:useForm (customHook):", checkboxValue);
  };

  // for OnClick::  React.MouseEvent<HTMLDivElement, MouseEvent>
  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    // const resetForm = e.target as HTMLFormElement;
    const { phn_email, password } = inputValues;

    const submittedData = {
      phn_email: phn_email,
      password: password,
    };
    resetForm();
    setIsLoading({ isLoading: false });
    console.log("💛submittedData:", submittedData);
    // resetForm.reset();
  };

  return {
    inputValues,
    handleInputs,
    handleSubmit,
    handleCheckBox,
    isLoading,
    setIsLoading,
    checkboxValue,
  };
};

/*
:: commented for further use:

type inputTypes = {
  phn_email?: string | null;
  password?: string | null;
  // formInput: String | any,
  // setFormInput: Dispatch<SetStateAction<object|any>>
};
====

  const handleInput = (e: React.FormEvent<HTMLInputElement>): void => {
    const { name, value } = e.target as HTMLInputElement;
    setFormInput((prevInput) => ({ ...prevInput, [name]: value }));
    // setFormInput({...formInput, [name]: value });
  };

*/
