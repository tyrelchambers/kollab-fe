import React from 'react'
import { H2, H2Subtitle } from '../Headings/Headings'
import { useHistory } from 'react-router'
import { MainButton } from '../Buttons/Buttons'

function SetupSocialForm() {
  const history = useHistory()

  const submitHandler = (e) => {
    e.preventDefault();
    history.push('/setup/socials')
  }
  return (
    <form className="form">
      <H2>The Socials</H2>
      <H2Subtitle>Here we will setup your social accounts. Just add the links!</H2Subtitle>

      <div className="field-group">
        <label htmlFor="Twitter" className="form-label">Twitter</label>

        <div className="flex items-center w-full">
          <i className="fab fa-twitter"></i>
          <input type="text" className="form-input" placeholder="https://twitter.com/@someuser"/>
        </div>
      </div>

      <div className="field-group">
        <label htmlFor="Twitter" className="form-label">StackOverflow</label>

        <div className="flex items-center w-full">
          <i className="fab fa-stack-overflow"></i>
          <input type="text" className="form-input" placeholder="https://stackoverflow.com/users/####/username"/>
        </div>
      </div>

      <div className="field-group">
        <label htmlFor="Instagram" className="form-label">Instagram</label>

        <div className="flex items-center w-full">
          <i className="fab fa-instagram"></i>
          <input type="text" className="form-input" placeholder="https://instagram.com/@someuser"/>
        </div>
      </div>

      <MainButton 
        text="Save & Continue"
        onClick={e => submitHandler(e)}
      />
    </form>
  )
}

export default SetupSocialForm
