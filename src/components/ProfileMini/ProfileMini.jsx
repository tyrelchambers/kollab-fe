import React from 'react'
import './ProfileMini.css'

const ProfileMini = ({user}) => {
  return (
    <div className="flex items-center">
      <img src={user.avatar ? user.avatar : require('../../assets/avatar.png')} alt="User" className="avatar small mr-4"/>
      <p className="font-medium">{user.firstName} {user.lastName}</p>
    </div>
  )
}

export default ProfileMini
