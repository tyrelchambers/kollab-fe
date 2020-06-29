import React from 'react'
import './Header.css'
import {H3} from '../../components/Headings/Headings'
import Navbar from '../Navbar/Navbar'
import { Search } from '../../components/Inputs/Inputs'

function Header() {
  return (
    <div className="w-full justify-center flex p-3 header-wrapper items-center shadow-lg">
      <div className="max-w-screen-xl w-full flex justify-between">
        <H3>Kollab</H3>

        <div className="flex items-center flex-1 justify-end">
          <Search
            withIcon
          />
          <Navbar/>
        </div>
      </div>
    </div>
  )
}

export default Header
