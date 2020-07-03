import React from 'react'
import Header from '../../layouts/Header/Header'
import LoginForm from '../../components/Forms/LoginForm'
import { H1 } from '../../components/Headings/Headings'

function Login() {
  return (
    <div>
      <Header/>
      
      <div className="container mx-auto mt-16">
        <H1
          className="text-center" 
        >Login</H1>
        <div className="flex justify-center">
          <LoginForm />
        </div>
      </div>
    </div>
  )
}

export default Login
