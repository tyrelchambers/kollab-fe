import React from 'react'
import './Profile.css'
import DisplayWrapper from '../../layouts/DisplayWrapper/DisplayWrapper'
import { H1 } from '../../components/Headings/Headings'
import ProfileForm from '../../components/Forms/ProfileForm'

const Profile = () => {
  return (
    <DisplayWrapper>
      <H1>Manage your account</H1>
      <ProfileForm/>
    </DisplayWrapper>
  )
}

export default Profile
