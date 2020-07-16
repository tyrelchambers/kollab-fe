import React, { useEffect, useState } from 'react'
import { H1, H3 } from '../../../components/Headings/Headings'
import ProjectWidget from '../../../components/ProjectWidget/ProjectWidget'
import './DashHome.css'
import DashProfileInfo from '../../../layouts/DashProfileInfo/DashProfileInfo'
import MainCol from '../../../layouts/MainCol/MainCol'
import Sidebar from '../../../layouts/Sidebar/Sidebar'
import getApi from '../../../api/getApi'
import DisplayWrapper from '../../../layouts/DisplayWrapper/DisplayWrapper'

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
  const [myProjects, setMyProjects] = useState([])

  useEffect(() => {
    const fn = async () => {
      await getApi({
        url: '/user/projects'
      }).then(res => {
        if (res) {
          setMyProjects([...res])
        }
      })
    }
    fn()
  }, []) 

  return (
    <DisplayWrapper>
      <H1>Dashboard</H1>

      <div className="flex">
        <MainCol>
          <H3 className="mb-4">Your Projects</H3>
          {myProjects.map((project, id) => (
            <ProjectWidget project={project} key={id}/>
          ))}

          <hr/>

          <H3 className="mb-4">Collaborations</H3>

        </MainCol>

        <Sidebar>
          <div className="profile">
            <DashProfileInfo
              profile={profileSample}
            />
          </div>
        </Sidebar>
      </div>
    </DisplayWrapper>
  )
}

export default DashHome
