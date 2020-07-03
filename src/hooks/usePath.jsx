import React from 'react'
import { useHistory } from 'react-router'

const usePath = (path) => {
  const history = useHistory();

  return history.push(path)
}

export default usePath;