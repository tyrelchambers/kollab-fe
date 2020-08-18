import React from 'react'
import { H3 } from '../../components/Headings/Headings'
import './DashProfileInfo.css'
import { Link } from 'react-router-dom'
import StatusWrapper from '../../components/StatusWrapper/StatusWrapper'

function DashProfileInfo({profile, owner}) {
  return (
    <div className="dash-profile-info flex flex-col w-full">
      <div className="flex">
        <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" alt="" className="profile-avatar"/>

        <div className="flex flex-col justify-center">
          <H3>{profile.name}</H3>


        </div>
      </div>

      <div className="flex  mt-6 ">
        {profile.twitter &&
          <div className="flex items-center mb-2 mt-2 text-gray-700">
            <a href={`https://twitter.com/@${profile.twitter}`}>
              <i className="fab w-8 text-xl fa-twitter text-blue-500"></i>
            </a>
          </div>
        }

        {profile.instagram &&
          <div className="flex items-center mb-2 mt-2 text-gray-700">
            <a href={`https://instagram.com/@${profile.instagram}`}>
              <i className="fab w-8 text-xl fa-instagram text-purple-600"></i>
            </a>
          </div>
        }

        {profile.stackOverflow &&
          <div className="flex items-center mb-2 mt-2 text-gray-700">
            <a href={profile.stackOverflow}>
              <i className="fab w-8 text-xl fa-stack-overflow text-orange-500"></i>
            </a>
          </div>
        }

        {profile.github &&
          <div className="flex items-center mb-2 mt-2 text-gray-700">
            <a href={profile.github}>
              <i className="fab w-8 text-xl fa-github text-gray-700"></i>
            </a>
          </div>
        }

        {profile.gitlab &&
          <div className="flex items-center mb-2 mt-2 text-gray-700">
            <a href={profile.gitlab}>
              <i className="fab w-8 text-xl fa-gitlab text-red-600"></i>
            </a>
          </div>
        }
      </div>

      {owner &&
        <div className="mt-4 flex justify-center w-full">
          <Link to="/profile/edit" className="btn primary text-center">
            Edit Profile
          </Link>
        </div>
      }
      <hr/>

      <StatusWrapper
        bool={profile.availableToHelp}
        ifTrueText="Available to help!"
        ifFalseText="Not available to help"
      />
    </div>
  )
}

export default DashProfileInfo
