import React, { useState } from 'react'
import NewProjectForm from '../../components/Forms/NewProjectForm'
import EditProjectForm from '../../components/Forms/EditProjectForm.jsx'
import { useParams } from 'react-router'
import DisplayWrapper from '../../layouts/DisplayWrapper/DisplayWrapper'
import { H1 } from '../../components/Headings/Headings'

const ProjectController = () => {
  const [ state, setState ] = useState({
    title: "",
    headline: "",
    description: "",
    thumbnail: "",
    supportingImgs: [],
    topics: "",
    collaborators: "",
    projectLinks: ""
  })
  const [ projectLinks, setProjectLinks ] = useState([])
  const [ collaborators, setCollaborators ] = useState([])
  const [ autocomplete, setAutocomplete] = useState([])
  const [ positions, setPositions ] = useState([])
  const [positionState, setPositionState] = useState({
    title: "",
    summary: "",
    experience: ''
  })

  const { action } = useParams()

  const inputHandler = (e) => {
    setState({...state, [e.target.name]: e.target.value})
  }

  const addProjectLink = (e) => {
    e.preventDefault()
    if (!state.projectLinks) return false;

    setProjectLinks([...projectLinks, {link: state.projectLinks}])
    setState({...state, projectLinks: ""})

  }

  const addContributorHandler = (e, user) => {
    e.preventDefault()
    if (!state.collaborators) return false;

    setCollaborators([...collaborators, user || state.collaborators])
    setState({...state, collaborators: ""})
    setAutocomplete([])
  }

  const removeItemHandler = id => {
    const clone = projectLinks
    clone.splice(id, 1)

    setProjectLinks([...clone])
  }

  const removeContributorHandler = id => {
    const clone = collaborators
    clone.splice(id, 1)

    setCollaborators([...clone])
  }

  const addPositionHandler = () => {
    const newPos = positionState

    setPositions([...positions, newPos])
    setPositionState({
      title: "",
      summary: "",
      experience: ""
    })
  }

  const removePositionHandler = id => {
    const clone = positions
    clone.splice(id, 1)

    setPositions([...clone])
    
  }

  const props = {
    autocomplete,
    setAutocomplete,
    state,
    setState,
    projectLinks,
    setProjectLinks,
    collaborators,
    setCollaborators,
    inputHandler,
    addProjectLink,
    addContributorHandler,
    removeItemHandler,
    removeContributorHandler,
    positions,
    setPositions,
    positionState,
    setPositionState,
    addPositionHandler,
    removePositionHandler
  }

  return (
    <DisplayWrapper>
      <div className="flex flex-col items-center">
        {action === "new" && <NewProjectForm {...props} /> }

        {action === "edit" &&  
          <>
            <H1>Edit Project</H1>
            <EditProjectForm {...props} />
          </>
        }
      </div>
    </DisplayWrapper>
  );
}

export default ProjectController
