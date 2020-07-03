import React from 'react'
import './FormError.css'

function FormError({error}) {
  return (
    <div className="flex items-center form-error-wrapper">
      <i className="fas fa-exclamation-triangle"></i>
      <p className="text-sm font-bold">
        {error}
      </p>
    </div>
  )
}

export default FormError
