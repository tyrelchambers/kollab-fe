import React from 'react'
import Header from '../Header/Header'

const DisplayWrapper = ({children}) => {
  return (
    <div>
      <Header/>
      <div className="container mx-auto mt-16">
        {children}
      </div>
    </div>
  )
}

export default DisplayWrapper
