import React from 'react'
import './Header.css'
import {H3} from '../../components/Headings/Headings'
import Navbar from '../Navbar/Navbar'
import { Search } from '../../components/Inputs/Inputs'
import Autocomplete from '../../components/Autocomplete/Autocomplete'

function Header() {
  return (
    <div className="w-full justify-center flex p-3 header-wrapper items-center ">
      <div className="max-w-screen-xl w-full flex justify-between">
        <H3>Kollab</H3>

        <div className="flex items-center flex-1 justify-end">
          <div className="flex flex-col w-full max-w-lg relative">
            <Search
              withIcon
            />

            <Autocomplete />
          </div>
          <Navbar/>
        </div>
      </div>
    </div>
  )
}

export default Header
