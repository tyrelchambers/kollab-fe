import React from 'react'
import Header from '../../layouts/Header/Header'
import './Signup.css'
import { H1 } from '../../components/Headings/Headings'
import SignupForm from '../../components/Forms/SignupForm'

function Signup() {
  return (
    <div>
      <Header/>
      
      <div className="container mx-auto mt-16">
        <H1
          className="text-center" 
        >Become a Creator</H1>
        <div className="flex justify-center">
          <SignupForm />
        </div>
      </div>
    </div>
  )
}

export default Signup
