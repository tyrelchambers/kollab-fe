import React from 'react'
import './CollaboratorCard.css'

const CollaboratorCard = ({person}) => {
  return (
    <div className="collaborator-card">
      <p>{person.email}</p>

      <select name="permissions" id=""></select>
    </div>
  )
}

export default CollaboratorCard
