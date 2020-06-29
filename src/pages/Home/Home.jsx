import React from 'react'
import './Home.css'
import Header from '../../layouts/Header/Header'
import { H2, H2Subtitle } from '../../components/Headings/Headings'

function Home() {
  return (
    <div className="w-full">
      <Header/>

      <section className="home-wrapper mt-8 container mx-auto">
        <H2>Project of the Week</H2>
      </section>
    </div>
  )
}

export default Home
