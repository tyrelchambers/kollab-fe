import React from 'react'
import './Home.css'
import Header from '../../layouts/Header/Header'
import { H2, H3 } from '../../components/Headings/Headings'
import Featured from '../../components/Featured/Featured'
import ProjectWidget from '../../components/ProjectWidget/ProjectWidget'
import MainCol from '../../layouts/MainCol/MainCol'
import Sidebar from '../../layouts/Sidebar/Sidebar'
import InfoBlock from '../../layouts/InfoBlock/InfoBlock'
import { Link } from 'react-router-dom'

const project = {
  thumbnail: 'https://images.unsplash.com/photo-1593291619462-e4240344ea21?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2550&q=80',
  title: 'Some awesome project I made'
}

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

function Home() {
  return (
    <div className="w-full">
      <Header/>

      <div className="container mx-auto mt-16">
        <section>
          <H2>Project of the Week</H2>
          <Featured
            project={project}
          />
        </section>

        <main className="mt-16">

          <div className="flex">
            <MainCol>
              <H2 className="mb-4">Today</H2>
              <div className="flex flex-col w-full">
                <ProjectWidget
                  project={sample}
                />

                <ProjectWidget
                  project={sample}
                />

                <ProjectWidget
                  project={sample}
                />
              </div>
            </MainCol>
            <Sidebar>
              <H2>Available To Help</H2>
              
              <InfoBlock>
                <div className="flex flex-col">
                  <Link to="#">
                    <div className="flex items-center m-2 p-1">
                      <img src={profileSample.avatar} alt="" className="profile-avatar"/>
                      <Link href="#" className="font-bold hover:underline">{profileSample.fullName}</Link>
                    </div>
                  </Link>

                  <Link to="#">
                    <div className="flex items-center m-2 p-1">
                      <img src={profileSample.avatar} alt="" className="profile-avatar"/>
                      <Link href="#" className="font-bold hover:underline">{profileSample.fullName}</Link>
                    </div>
                  </Link>

                  <Link to="#">
                    <div className="flex items-center m-2 p-1">
                      <img src={profileSample.avatar} alt="" className="profile-avatar"/>
                      <Link href="#" className="font-bold hover:underline">{profileSample.fullName}</Link>
                    </div>
                  </Link>
                </div>
              </InfoBlock>

              <H2 className="mt-6">Top Open Source</H2>

              <InfoBlock>
                <div className="flex flex-col">
                  <Link to="#">
                    <div className="flex items-center m-2 p-1">
                      <img src={project.thumbnail} alt="" className="profile-avatar"/>
                      <Link className="font-bold hover:underline">{project.title}</Link>
                    </div>
                  </Link>
                </div>
              </InfoBlock>
            </Sidebar>
          </div>
        </main>
      </div>
    </div>
  )
}

export default Home
