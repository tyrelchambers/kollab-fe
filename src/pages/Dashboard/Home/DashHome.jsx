import React, { useEffect } from 'react'
import Header from '../../../layouts/Header/Header'
import { H1, H3 } from '../../../components/Headings/Headings'
import ProjectWidget from '../../../components/ProjectWidget/ProjectWidget'
import './DashHome.css'
import DashProfileInfo from '../../../layouts/DashProfileInfo/DashProfileInfo'
import MainCol from '../../../layouts/MainCol/MainCol'
import Sidebar from '../../../layouts/Sidebar/Sidebar'
import getApi from '../../../api/getApi'
import { useAuthState } from '../../../Providers/AuthProvider'

const sample = {
  title: "Super coool awesome idea",
  likes: 500,
  collaborators: 25,
  comments: 25,
  openPositions: [
    "Front-end Developer",
    "Back-end Developer",
    "UI Designer"
  ],
  thumbnail: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png",
  isAccepting: true
}

const profileSample = {
  firstName: "Tyrel",
  lastName: "Chambers",
  get fullName() {
    return this.firstName + " " + this.lastName
  },
  followers: 25,
  following: 25,
  twitter: "@handle",
  instagram: "@handle",
  stackOverflow: "@handle",
  github: "@handle",
  gitlab: "@handle",
  avatar: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png'

}

function DashHome() {  
  return (
    <div className="w-full">
      <Header/>

      <section className="container mx-auto">
        <H1>Dashboard</H1>

        <div className="flex">
          <MainCol>
            <H3 className="mb-4">Your Projects</H3>
            <ProjectWidget
              project={sample}
            />

            <ProjectWidget
              project={sample}
            />

            <hr/>

            <H3 className="mb-4">Collaborations</H3>
            <ProjectWidget
              project={sample}
            />

            <ProjectWidget
              project={sample}
            />
          </MainCol>

          <Sidebar>
            <div className="profile">
              <DashProfileInfo
                profile={profileSample}
              />
            </div>
          </Sidebar>
        </div>
      </section>
    </div>
  )
}

export default DashHome
