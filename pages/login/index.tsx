"use client";
import React, { Dispatch, SetStateAction, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useForm } from "../../hooks/useForm";
import { formInputService } from "../../utilities/utilities";
import FormInputComponent from "../../components/sharedComponent/FormInputComponent";
// import { useForm } from "../hooks/useForm";
// import { checkLists, formInputService } from "../utilities/utilities";
// import { formInputType } from "../utilities/types";
// import FormInputComponent from "../components/sharedComponent/FormInputComponent";
// import CheckBox from "../components/sharedComponent/CheckBox";

const Login = () => {
  const {
    inputValues,
    handleInputs,
    handleSubmit,
    handleCheckBox,
    isLoading,
    checkboxValue,
  } = useForm();

  return (
    <div className="loginBanner_main">
      <div className="bannerBlock">
        <Image
          src="/../public/images/netflix-loginBanner.jpg"
          alt="loginBannerImage"
          layout="fill"
          objectFit="cover"
          quality={100}
          loading="lazy"
        />
      </div>

      <div className="authBlock">
        <h1>Sign In</h1>
        <form onSubmit={handleSubmit}>
          {formInputService.map((input: any) => {
            return (
              <>
                <FormInputComponent
                  key={input.id}
                  {...input}
                  value={inputValues[input?.name]}
                  //alternative:: value={inputValues.input?.name}
                  onChange={handleInputs}
                />
              </>
            );
          })}
          <button type="submit">
            {isLoading.isLoading ? "Sign in" : "Signing in..."}
          </button>
        </form>

        <div className="formBottomBlock">
          {/* <div className="rememberMe">
            {checkLists.map((list, i) => (
              <>
                <CheckBox
                  isChecked={checkboxValue}
                  type="checkbox"
                  id="1"
                  label={list.name}
                  onChange={handleCheckBox}
                />
                <span className=""> {list?.title}</span>
              </>
            ))}
          </div> */}

          <div className="forgotPassword">
            <Link href="#">Forgot password?</Link>
          </div>
        </div>

        <div className="signUpBlock">
          <h3>New to Netflix?</h3>
          <Link href="#">Sign up</Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
