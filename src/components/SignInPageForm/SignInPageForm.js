import React, { useState } from "react";
import "./SignInPageForm.css";
import Button from "../../global/Button/Button";
import Input from "../../global/Input/Input";
import { SIGN_IN_TEXT } from "../../constants/signInPageForm/signInPageForm"

function SignInPageForm() {
  const [showSignInBox, setShowSignInBox] = useState(true);

  function goToSignUpBox() {
    setShowSignInBox(false);
  }

  function goToSignInBox() {
    setShowSignInBox(true);
  }

  return (
    <>
      {showSignInBox ? (
        //   SignIn Box
        <div className="signinpageform_container">
          <div className="signinpageform_form">
            <p className="signinpageform_form_title">{SIGN_IN_TEXT.SIGN_IN}</p>
            <Input placeholder={SIGN_IN_TEXT.EMAIL} />
            <Input placeholder={SIGN_IN_TEXT.PASSWORD} />
            <Button text={SIGN_IN_TEXT.SIGN_IN} />
            <Button text={SIGN_IN_TEXT.LOGIN_AS_GUEST_USER} color="white" />
            <p className="signinpageform_form_signup_text">
              {SIGN_IN_TEXT.NEW_TO_APP}{" "} <span onClick={goToSignUpBox}>{SIGN_IN_TEXT.SIGN_UP_NOW}</span>
            </p>
          </div>
        </div>
      ) : (
        // Sign Up Box
        <div className="signinpageform_container">
          <div className="signinpageform_form">
            <p className="signinpageform_form_title">{SIGN_IN_TEXT.SIGN_UP}</p>
            <Input placeholder="Name" />
            <Input placeholder={SIGN_IN_TEXT.EMAIL} />
            <Input placeholder={SIGN_IN_TEXT.PASSWORD} /> 
            <Button text={SIGN_IN_TEXT.SIGN_UP} />
            <Button text={SIGN_IN_TEXT.LOGIN_AS_GUEST_USER} color="white" />
            <p className="signinpageform_form_signup_text">
              {SIGN_IN_TEXT.HAVE_AN_ACCOUNT}{" "} <span onClick={goToSignInBox}>{SIGN_IN_TEXT.SIGN_IN_NOW}</span>
            </p>
          </div>
        </div>
      )}
    </>
  );
}

export default SignInPageForm;
