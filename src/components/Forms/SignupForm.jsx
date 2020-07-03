import React, { useState } from 'react'
import './forms.css'
import { MainButton } from '../Buttons/Buttons'
import { Link } from 'react-router-dom'
import getApi from '../../api/getApi'
import { useForm } from 'react-hook-form'
import FormError from '../FormError/FormError'

function SignupForm() {
  const [ state, setState ] = useState({
    email: "",
    password: "",
    confirmPassword: ""
  })

  const { handleSubmit, register, errors } = useForm();

  const submitHandler = (e) => {
    
    // getApi({
    //   url: "/auth/register",
    //   data: {
    //     ...state
    //   }
    // })
  }

  const inputHandler = (e) => {
    setState({...state, [e.target.name]: e.target.value})
  }

  return (
    <form className="form shadow-lg" onSubmit={handleSubmit(submitHandler)}>
      <div className="field-group">
        <label htmlFor="email" className="form-label">Email</label>
        <input 
          type="text" 
          className="form-input" 
          placeholder="name@example.com" 
          ref={
            register({ 
              required: true,
              pattern: /^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/
            })
          }
          value={state.email}
          onChange={e => inputHandler(e)}
          name="email"
        />
      {(errors.email && errors.email.type === "required") && <FormError error="Email is required"/>}
      {(errors.email && errors.email.type === "pattern") && <FormError error="That doesn't look like an email"/>}
      </div>

      <div className="field-group">
        <label htmlFor="password" className="form-label">Password</label>
        <input 
          type="password" 
          className="form-input" 
          ref={
            register({ 
              min: 6, 
              max: 99,
              required: true
            })
          }
          name="password"
          onChange={e => inputHandler(e)}
          value={state.password}
        />
        {(errors.password && errors.password.type === "required") && <FormError error="Password is required" />}
        {(errors.password && errors.password.type === "min") && <FormError error="Password should be more than 6 characters" />}
        {(errors.password && errors.password.type === 'max') && <FormError error="Password should be less than 99 characters" />}

      </div>
      <div className="field-group">
        <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
        <input 
          type="password" 
          className="form-input"
          ref={
            register({
              required: true
            })
          }
          placeholder="Must match your password"
          name="confirmPassword"
          value={state.confirmPassword}
          onChange={e => inputHandler(e)}
        />

        {(errors.confirmPassword && errors.confirmPassword.required) && <FormError error="Confirm Password is required" />}
        {state.confirmPassword !== state.password && <FormError error="Passwords must match"/>}
      </div>

      <MainButton
        text="Create account"
        onClick={e => submitHandler(e)}
        type="submit"
      /> 

      <div className="flex mt-4 mb-4">
        <Link to="#" className="mr-2 link">Forget your password?</Link>
        <Link to="#" className="link">Already have an account? Sign in.</Link>
      </div>
    </form>
  )
}

export default SignupForm
