import React from "react";
import LoginForm from "../../components/Forms/LoginForm";
import { H1 } from "../../components/Headings/Headings";
import DisplayWrapper from "../../layouts/DisplayWrapper/DisplayWrapper";
import "./Login.css";

function Login() {
  return (
    <DisplayWrapper classNames="flex justify-center">
      <div className="flex flex-col h-full justify-center p-4">
        <H1 className="text-center">Login</H1>
        <div className="flex justify-center">
          <LoginForm />
        </div>
      </div>

      <img
        src={require("../../assets/undraw_welcome_cats_thqn.svg")}
        className="login-image"
      />
    </DisplayWrapper>
  );
}

export default Login;
