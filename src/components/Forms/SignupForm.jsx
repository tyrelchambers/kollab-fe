import React from 'react'
import './forms.css'
import { MainButton } from '../Buttons/Buttons'
import { Link, useHistory } from 'react-router-dom'

function SignupForm() {
  const history = useHistory();

  const submitHandler = (e) => {
    e.preventDefault()
    history.push('/setup/basics')
  }

  return (
    <form className="form shadow-lg">
      <div className="field-group">
        <label htmlFor="email" className="form-label">Email</label>
        <input type="text" className="form-input" placeholder="name@example.com"/>
      </div>

      <div className="field-group">
        <label htmlFor="password" className="form-label">Password</label>
        <input type="password" className="form-input"/>
      </div>

      <div className="field-group">
        <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
        <input type="password" className="form-input"/>
      </div>

      <MainButton
        text="Create account"
        onClick={e => submitHandler(e)}
      /> 

      <div className="flex mt-4 mb-4">
        <Link className="mr-2 link">Forget your password?</Link>
        <Link className="link">Already have an account? Sign in.</Link>
      </div>
    </form>
  )
}

export default SignupForm
