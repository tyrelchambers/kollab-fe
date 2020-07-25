import React from 'react'
import './StatusWrapper.css'

const StatusWrapper = ({bool, ifTrueText, ifFalseText}) => {
  return (
    <div className="status-wrapper p-3">
      {!bool ?
        <>
          <i className="fas fa-not-equal text-red-500"></i>
          <p className="text-white">{ifFalseText}</p>
        </> :
        <>
          <i className="fas fa-check-circle text-green-500 mr-4"></i>
          <p>{ifTrueText}</p>
        </>
      }
    </div>
  )
}

export default StatusWrapper
