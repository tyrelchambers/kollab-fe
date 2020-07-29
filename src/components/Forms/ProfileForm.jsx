import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { H3 } from '../Headings/Headings'
import InfoBlock from '../../layouts/InfoBlock/InfoBlock'
import { MainButton } from '../Buttons/Buttons'
import { useState } from 'react'
import getApi from '../../api/getApi'
import { inject, observer } from 'mobx-react'

const ProfileForm = ({UserStore, ModalStore}) => {
  const [profile, setProfile] = useState({
    email: "",
    name: "",
    username: "",
    useUsername: false,
    twitter: "",
    stackOverflow: "",
    instagram: "",
    github: "",
    gitlab: "",
    availableToHelp: false
  });
  const [account, setAccount] = useState({
    password: "",
    newPassword: "",
    confirmNewPassword: ""
  })


  const { handleSubmit } = useForm()

  useEffect(() => {
    setProfile({ ...UserStore.user })
  }, [])

  const submitHandler = () => {
    getApi({
      url: '/user/me',
      method: 'put',
      data: profile
    })

    window.location.pathname = `/user/${UserStore.user.username}`
  }

  const inputHandler = e => {
    setProfile({...profile, [e.target.name]: e.target.value})
  }

  const accountHandler = e => {
    setAccount({ ...account, [e.target.name]: e.target.value })
  }

  return (
    <div className="flex">
      <form className="w-1/2 mr-4" onSubmit={handleSubmit(submitHandler)}>
        <H3>Profile</H3>

        <InfoBlock>
          <div className="field-group">
            <label htmlFor="email" className="form-label">Email</label>
            <input
              type="email"
              className="form-input"
              name="email"
              placeholder="Your email"
              value={profile.email}
              onChange={e => inputHandler(e)}
            />
          </div>

          <div className="field-group">
            <label htmlFor="name" className="form-label">Your Name</label>
            <input 
              type="text" 
              name="name" 
              className="form-input" 
              placeholder="Your name" 
              value={profile.name}
              onChange={e => inputHandler(e)}
            />
          </div>

          <div className="field-group">
            <label htmlFor="username" className="form-label">Username</label>
            <p className="text-sm mb-2 italic">No spaces allowed</p>
            <input 
              type="text" 
              className="form-input" 
              placeholder="@Username" 
              value={profile.username}
              onChange={e => inputHandler(e)}
              name="username"
            />
          </div>

          <div className="field-group ">
            <label htmlFor="Twitter" className="form-label">Twitter</label>

            <div className="flex items-center w-full">
              <i className="fab fa-twitter"></i>
              <input 
                type="text" 
                className="form-input" 
                placeholder="https://twitter.com/@someuser" 
                value={profile.twitter}
                onChange={e => inputHandler(e)}
                name="twitter"
              />
            </div>
          </div>

          <div className="field-group">
            <label htmlFor="Twitter" className="form-label">StackOverflow</label>

            <div className="flex items-center w-full">
              <i className="fab fa-stack-overflow"></i>
              <input 
                type="text" 
                className="form-input" 
                placeholder="https://stackoverflow.com/users/####/username" 
                value={profile.stackOverflow}
                name="stackOverflow"
                onChange={e => inputHandler(e)}
              />
            </div>
          </div>

          <div className="field-group">
            <label htmlFor="Instagram" className="form-label">Instagram</label>

            <div className="flex items-center w-full">
              <i className="fab fa-instagram"></i>
              <input 
                type="text" 
                className="form-input" 
                placeholder="https://instagram.com/@someuser" 
                value={profile.instagram}
                onChange={e => inputHandler(e)}
                name="instagram"
              />
            </div>
          </div>

          <div className="field-group">
            <label htmlFor="github" className="form-label">Github</label>

            <div className="flex items-center w-full">
              <i className="fab fa-github"></i>
              <input 
                type="text" 
                className="form-input" 
                name="github" 
                placeholder="https://github.com/username" 
                value={profile.github} 
                onChange={e => inputHandler(e)}
              />
            </div>
          </div>

          <div className="field-group">
            <label htmlFor="gitlab" className="form-label">Gitlab</label>

            <div className="flex items-center w-full">
              <i className="fab fa-gitlab"></i>
              <input 
                type="text" 
                className="form-input" 
                name="gitlab" 
                placeholder="https://gitlab.com/username" 
                value={profile.gitlab}
                onChange={e => inputHandler(e)}
              />
            </div>
          </div>

          <div className="flex mt-8">
            <input type="checkbox" name="availableToHelp" id="availableToHelp" className="mr-4" checked={profile.availableToHelp} onChange={e => setProfile({ ...profile, availableToHelp: e.target.checked })}/>

            <label htmlFor="availableToHelp" className="form-label" >Available to help</label>
          </div>

          <MainButton
            text="Save profile"
            type="submit"
            className="mt-4"
          />
        </InfoBlock>

        
      </form>

      <div className="w-1/2">
        <H3>Account</H3>

        <InfoBlock>

          <div className="field-group">
            <label htmlFor="currentPassword" className="form-label">Current Password</label>
            <input 
              type="password" 
              className="form-input" 
              name="password" 
              placeholder="Your current password"
              value={account.password}
              onChange={e => accountHandler(e)}
              autoComplete="new-password"
            />
          </div>

          <div className="field-group">
            <label htmlFor="newPassword" className="form-label">New Password</label>
            <input 
              type="password" 
              className="form-input" 
              name="newPassword" 
              placeholder="New password"
              value={account.newPassword}
              onChange={e => accountHandler(e)}
            />
          </div>

          <div className="field-group">
            <label htmlFor="confirmNewPassword" className="form-label">Confirm New Password</label>
            <input 
              type="password" 
              className="form-input" 
              name="confirmNewPassword" 
              placeholder="Confirm new password"
              value={account.confirmNewPassword}
              onChange={e => accountHandler(e)}
            />
          </div>

          <MainButton
            text="Save passwords"
            className="mt-4"
          />
        </InfoBlock>
      </div>
    </div>
  )
}

export default inject("UserStore", "ModalStore")(observer(ProfileForm))
