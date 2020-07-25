import React, { useEffect, useState } from 'react'
import { H1, H3 } from '../../../components/Headings/Headings'
import ProjectWidget from '../../../components/ProjectWidget/ProjectWidget'
import './DashHome.css'
import DashProfileInfo from '../../../layouts/DashProfileInfo/DashProfileInfo'
import MainCol from '../../../layouts/MainCol/MainCol'
import Sidebar from '../../../layouts/Sidebar/Sidebar'
import getApi from '../../../api/getApi'
import DisplayWrapper from '../../../layouts/DisplayWrapper/DisplayWrapper'
import { inject, observer } from 'mobx-react'
import InfoBlock from '../../../layouts/InfoBlock/InfoBlock'
import { Link } from 'react-router-dom'

function DashHome({UserStore}) { 
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
          {myProjects.length > 0 && myProjects.map((project, id) => (
            <ProjectWidget project={project} key={id}/>
          ))}

          {myProjects.length === 0 && 
            <InfoBlock>
              <div className="flex h-10 items-center w-full">
                <p className="mr-6 font-bold">Created or add your first project!</p>
                <div className="max-w-md">
                  <Link to="/dashboard/project/new" className="btn secondary">
                    Create
                  </Link>
                </div>
              </div>
            </InfoBlock>
          }

          <hr/>

          <H3 className="mb-4">Collaborations</H3>

        </MainCol>

        <Sidebar>
          <div className="profile">
            <DashProfileInfo
              profile={UserStore.user}
            />
          </div>

          <div className="mt-4">
            <H3>Imported Github Repos</H3>

            <InfoBlock>
              
            </InfoBlock>
          </div>
        </Sidebar>
      </div>
    </DisplayWrapper>
  )
}

export default inject("UserStore")(observer(DashHome))
