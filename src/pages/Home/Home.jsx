import React from 'react'
import './Home.css'
import Header from '../../layouts/Header/Header'
import { H2 } from '../../components/Headings/Headings'
import Featured from '../../components/Featured/Featured'

const project = {
  thumbnail: 'https://images.unsplash.com/photo-1593291619462-e4240344ea21?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2550&q=80',
  title: 'Some awesome project I made'
}

function Home() {
  return (
    <div className="w-full">
      <Header/>

      <section className="featured-section mt-16 container mx-auto">
        <H2>Project of the Week</H2>
        <Featured
          project={project}
        />
      </section>
    </div>
  )
}

export default Home
