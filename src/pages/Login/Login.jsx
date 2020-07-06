import React from 'react'
import LoginForm from '../../components/Forms/LoginForm'
import { H1 } from '../../components/Headings/Headings'
import DisplayWrapper from '../../layouts/DisplayWrapper/DisplayWrapper'

function Login() {
  return (
    <DisplayWrapper>
      <H1
        className="text-center" 
      >Login</H1>
      <div className="flex justify-center">
        <LoginForm />
      </div>
    </DisplayWrapper>
  )
}

export default Login
