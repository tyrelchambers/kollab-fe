import React from 'react'
import { H2 } from '../Headings/Headings'
import { useHistory } from 'react-router'
import { MainButton } from '../Buttons/Buttons'

function SetupSocialForm() {
  const history = useHistory()

  const submitHandler = (e) => {
    e.preventDefault();
    history.push('/setup/projects')
  }
  return (
    <form className="form shadow-lg">
      <H2>The Socials</H2>

      <p className="mt-6">You can import your Github repositories to populate your profile with some of your projects.</p>
      <a href="#" className="link font-thin mt-2 mb-6">import Github repositories</a>

      <div className="field-group ">
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
