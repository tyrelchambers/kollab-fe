import React from 'react'
import './Autocomplete.css'
import { inject, observer } from 'mobx-react'
import { Link } from 'react-router-dom'

const Autocomplete = ({AutocompleteStore}) => {
  return (
    <div className="autocomplete-wrapper shadow-lg">
      {AutocompleteStore.list.map(item => (
        <div className="flex autocomplete-item items-center" key={item.uuid} >
          <img src={item.thumbnailUrl} className="avatar-xs mr-4"/>
          <Link to={`/project/${item.uuid}`}>{item.title}</Link>
        </div>
      ))}
    </div>
  )
}

export default inject("AutocompleteStore")(observer(Autocomplete))
