import React from 'react'
import { H3 } from '../../components/Headings/Headings'
import './DashProfileInfo.css'
import { Link } from 'react-router-dom'
function DashProfileInfo({profile}) {
  return (
    <div className="dash-profile-info flex flex-col w-full">
      <div className="flex">
        <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" alt="" className="profile-avatar"/>

        <div className="flex flex-col">
          <H3>{profile.name}</H3>

          <div className="flex mt-2">
            <span className="mr-2 flex">
              <p className="mr-1 font-bold">20</p>
              <p>followers</p>
            </span>

            <span className="flex">
              <p className="mr-1 font-bold">25</p>
              <p>following</p>
            </span>
          </div>
        </div>
      </div>

      <div className="flex flex-col mt-6 ">
        {profile.twitter &&
          <div className="flex items-center mb-2 mt-2 text-gray-700">
            <i className="fab w-8 text-xl fa-twitter text-blue-500"></i>
            {profile.twitter}
          </div>
        }

        {profile.instagram &&
          <div className="flex items-center mb-2 mt-2 text-gray-700">
            <i className="fab w-8 text-xl fa-instagram text-purple-600"></i>
            {profile.instagram}
          </div>
        }

        {profile.stackOverflow &&
          <div className="flex items-center mb-2 mt-2 text-gray-700">
            <i className="fab w-8 text-xl fa-stack-overflow text-orange-500"></i>
            {profile.stackOverflow} 
          </div>
        }

        {profile.github &&
          <div className="flex items-center mb-2 mt-2 text-gray-700">
            <i className="fab w-8 text-xl fa-github text-gray-700"></i>
            {profile.github}
          </div>
        }

        {profile.gitlab &&
          <div className="flex items-center mb-2 mt-2 text-gray-700">
            <i className="fab w-8 text-xl fa-gitlab text-red-600"></i>
            {profile.gitlab}
          </div>
        }
      </div>

      <div className="mt-4 flex justify-center w-full">
        <Link to="/profile/edit" className="btn primary text-center">
          Edit Profile
        </Link>
      </div>
    </div>
  )
}

export default DashProfileInfo
