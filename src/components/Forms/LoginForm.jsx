import React, { useState } from "react";
import { useForm } from "react-hook-form";
import getApi from "../../api/getApi";
import FormError from "../FormError/FormError";
import { Link, useHistory } from "react-router-dom";
import { MainButton } from "../Buttons/Buttons";
import isEmpty from "../../helpers/objIsEmpty";
import { inject, observer } from "mobx-react";

function LoginForm({ UserStore }) {
  const [state, setState] = useState({
    email: "",
    password: "",
    rememberMe: false,
  });

  const history = useHistory();

  const { handleSubmit, register, errors } = useForm({
    reValidateMode: "onSubmit",
  });

  const submitHandler = async (e) => {
    if (!isEmpty(errors)) return;

    await getApi({
      url: "/auth/login",
      data: state,
      method: "post",
    }).then((res) => {
      if (res) {
        UserStore.setUser(res.user);

        if (state.rememberMe) {
          window.localStorage.setItem("token", res.token);
        } else {
          window.sessionStorage.setItem("token", res.token);
        }

        history.push("/");
      }
    });
  };

  const inputHandler = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  return (
    <form className="form " onSubmit={handleSubmit(submitHandler)}>
      <div className="field-group">
        <label htmlFor="email" className="form-label">
          Email
        </label>
        <input
          type="text"
          className="form-input"
          placeholder="name@example.com"
          ref={register({
            required: true,
            pattern: /^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/,
          })}
          value={state.email}
          onChange={(e) => inputHandler(e)}
          name="email"
        />
        {errors.email && errors.email.type === "required" && (
          <FormError error="Email is required" />
        )}
        {errors.email && errors.email.type === "pattern" && (
          <FormError error="That doesn't look like an email" />
        )}
      </div>

      <div className="field-group">
        <label htmlFor="password" className="form-label">
          Password
        </label>
        <input
          type="password"
          className="form-input"
          ref={register({
            min: 6,
            max: 99,
            required: true,
          })}
          name="password"
          placeholder="minimum: 6, maximum: 99 characters"
          onChange={(e) => inputHandler(e)}
          value={state.password}
        />
        {errors.password && errors.password.type === "required" && (
          <FormError error="Password is required" />
        )}
        {errors.password && errors.password.type === "min" && (
          <FormError error="Password should be more than 6 characters" />
        )}
        {errors.password && errors.password.type === "max" && (
          <FormError error="Password should be less than 99 characters" />
        )}
      </div>

      <div className="mt-2 mb-2 flex flex-col bg-white p-2 rounded-lg">
        <p className="text-xs text-gray-600 italic mt-2 mb-2">
          Clicking the "Remember me" checkbox will save a cookie in your browser
          in order for our server to know who you are so we can keep you logged
          in. Thus, you agree to saving cookies by clicking the aforementioned
          checkbox.{" "}
        </p>
        <div className="flex items-center">
          <input
            type="checkbox"
            name="rememberMe"
            id="rememberMe"
            className="mr-2"
            value={state.rememberMe}
            onChange={(e) =>
              setState({ ...state, rememberMe: e.target.checked })
            }
          />
          <p>Remember me</p>
        </div>
      </div>

      <div className="mt-4">
        <MainButton text="Login" type="submit" />
      </div>

      <div className="flex mt-4 mb-4">
        <Link to="#" className="mr-2 text-blue-500">
          Forget your password?
        </Link>
        <Link to="#" className="text-blue-500">
          Already have an account? Sign in.
        </Link>
      </div>
    </form>
  );
}

export default inject("UserStore")(observer(LoginForm));
