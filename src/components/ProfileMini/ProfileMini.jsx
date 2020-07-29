import React from 'react'
import './ProfileMini.css'
import { Link } from 'react-router-dom'

const ProfileMini = ({user}) => {
  if (!user) return null;
  
  return (
    <div className="flex items-center">
      <img src={user.avatar ? user.avatar : require('../../assets/avatar.png')} alt="User" className="avatar small mr-4"/>
      <Link to={`/user/${user.username}`} className="hover:underline text-gray-800 font-bold">{user.name}</Link>
    </div>
  )
}

export default ProfileMini
