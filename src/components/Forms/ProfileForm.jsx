import React from 'react'
import { useForm } from 'react-hook-form'
import { H3 } from '../Headings/Headings'
import InfoBlock from '../../layouts/InfoBlock/InfoBlock'
import { SecondaryButton, MainButton } from '../Buttons/Buttons'

const ProfileForm = () => {
  const { handleSubmit } = useForm()

  return (
    <div className="flex">
      <form className="w-1/2 mr-4">
        <H3>Profile</H3>

        <InfoBlock>
          <div className="field-group">
            <label htmlFor="firstName" className="form-label">First Name</label>
            <input type="text" name="firstName" className="form-input" placeholder="First Name"/>
          </div>
          
          <div className="field-group">
            <label htmlFor="lastName" className="form-label">Last Name</label>
            <input type="text" name="lastName" className="form-input" placeholder="Last Name" />
          </div>

          <div className="field-group">
            <label htmlFor="username" className="form-label">Username</label>
            <p className="text-sm mb-2 italic">No spaces allowed</p>
            <input type="text" className="form-input" placeholder="Username" />
          </div>

          <div className="field-group">
            <div className="flex items-center">
              <input type="checkbox" name="useUsername" id="useUsername" className="mr-3"/>
              <label htmlFor="useUsername" className="form-label" style={{marginBottom: '0'}}>Use username instead of full name?</label>
            </div>
          </div>

          <MainButton
            text="Save profile"
          />
        </InfoBlock>

        <H3>Socials</H3>
        <InfoBlock>
          <div className="field-group ">
            <label htmlFor="Twitter" className="form-label">Twitter</label>

            <div className="flex items-center w-full">
              <i className="fab fa-twitter"></i>
              <input type="text" className="form-input" placeholder="https://twitter.com/@someuser" />
            </div>
          </div>

          <div className="field-group">
            <label htmlFor="Twitter" className="form-label">StackOverflow</label>

            <div className="flex items-center w-full">
              <i className="fab fa-stack-overflow"></i>
              <input type="text" className="form-input" placeholder="https://stackoverflow.com/users/####/username" />
            </div>
          </div>

          <div className="field-group">
            <label htmlFor="Instagram" className="form-label">Instagram</label>

            <div className="flex items-center w-full">
              <i className="fab fa-instagram"></i>
              <input type="text" className="form-input" placeholder="https://instagram.com/@someuser" />
            </div>
          </div>

          <div className="field-group">
            <label htmlFor="github" className="form-label">Github</label>

            <div className="flex items-center w-full">
              <i className="fab fa-github"></i>
              <input type="text" className="form-input" name="github" placeholder="https://github.com/username" />
            </div>
          </div>

          <div className="field-group">
            <label htmlFor="gitlab" className="form-label">Gitlab</label>

            <div className="flex items-center w-full">
              <i className="fab fa-gitlab"></i>
              <input type="text" className="form-input" name="gitlab" placeholder="https://gitlab.com/username" />
            </div>
          </div>

          <MainButton
            text="Save socials"
          />
        </InfoBlock>
      </form>

      <div className="w-1/2">
        <H3>Account</H3>

        <InfoBlock>
          <div className="field-group">
            <label htmlFor="currentPassword" className="form-label">Current Password</label>
            <input type="password" className="form-input" name="currentPassword" placeholder="Your current password"/>
          </div>

          <div className="field-group">
            <label htmlFor="newPassword" className="form-label">New Password</label>
            <input type="password" className="form-input" name="newPassword" placeholder="New password"/>
          </div>

          <div className="field-group">
            <label htmlFor="confirmNewPassword" className="form-label">Confirm New Password</label>
            <input type="password" className="form-input" name="confirmNewPassword" placeholder="Confirm new password"/>
          </div>

          <MainButton
            text="Save passwords"
          />
        </InfoBlock>
      </div>
    </div>
  )
}

export default ProfileForm
