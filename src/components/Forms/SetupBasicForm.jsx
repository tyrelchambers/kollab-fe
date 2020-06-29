import React from 'react'
import { MainButton } from '../Buttons/Buttons'
import { H2, H2Subtitle } from '../Headings/Headings'

function SetupBasicForm() {
  return (
    <form className="form shadow-lg">
      <H2>The Basics</H2>
      <H2Subtitle>Here we will setup up all the basics for your profile. Don't worry, you can add or change this information later.</H2Subtitle>
      <div className="field-group mt-16">
        <label htmlFor="firstName" className="form-label">First Name</label>
        <input type="text" className="form-input" placeholder="John"/>
      </div>

      <div className="field-group">
        <label htmlFor="lastName" className="form-label">Last Name</label>
        <input type="text" className="form-input" placeholder="Smith"/>
      </div>

      <div className="field-group">
        <label htmlFor="username" className="form-label">Username</label>
        <input type="text" className="form-input" placeholder="SuperCool123" />
      </div>

      <MainButton
        text="Save & Continue"
      />
    </form>
  )
}

export default SetupBasicForm
