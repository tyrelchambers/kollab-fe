import React, { useEffect, useState } from 'react'
import './Inputs.css'
import getApi from '../../api/getApi'

export const Search = props => {
  const [ query, setQuery ] = useState("")

  useEffect(() => {
    const fn = async () => {
      if (query.length > 3) {
        await getApi({
          url: `/search/${query}`
        }).then(console.log)
      }
    }

    fn()
  }, [query])

  return (
    <div className={`input-wrapper w-full max-w-lg ${props.withIcon ? `with-icon` : ""}`}>
      <i className="fas fa-search"></i>
      <input type="search" placeholder={props.placeholder || "Search for a project or user (via username)"} className="form-input" name="search" value={query} onChange={e => setQuery(e.target.value)}/>    
    </div>
  )
}