import React from 'react'
import './Signup.css'
import { H1 } from '../../components/Headings/Headings'
import SignupForm from '../../components/Forms/SignupForm'
import DisplayWrapper from '../../layouts/DisplayWrapper/DisplayWrapper'

function Signup() {
  return (
    <DisplayWrapper>
      <H1
        className="text-center" 
      >Become a Creator</H1>
      <div className="flex justify-center">
        <SignupForm />
      </div>
    </DisplayWrapper>
  )
}

export default Signup
