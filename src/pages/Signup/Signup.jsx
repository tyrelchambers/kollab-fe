import React from "react";
import "./Signup.css";
import { H1 } from "../../components/Headings/Headings";
import SignupForm from "../../components/Forms/SignupForm";
import DisplayWrapper from "../../layouts/DisplayWrapper/DisplayWrapper";

function Signup() {
  return (
    <DisplayWrapper classNames="flex justify-center">
      <div className="flex flex-col h-full justify-center p-4">
        <H1 className="text-center">Become a Creator</H1>
        <div className="flex justify-center">
          <SignupForm />
        </div>
      </div>
      <img
        src={require("../../assets/undraw_launch_day_4e04.svg")}
        className="signup-image"
      />
    </DisplayWrapper>
  );
}

export default Signup;
