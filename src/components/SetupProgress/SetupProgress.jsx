import React from 'react'
import './SetupProgress.css'

function SetupProgress({progress}) {
  return (
    <div className="progress-wrapper mx-auto mt-16 mb-16">
      <div className="flex w-full justify-between">
        <span className={`progress-circle ${progress >= 0 ? "active": ""}`} id="circle1">Basics</span>
        <span className={`progress-circle ${progress >= 1 ? "active": ""}`} id="circle2">Socials</span>
        <span className={`progress-circle ${progress >= 2 ? "active": ""}`} id="circle3">Add Project</span>
        <span className={`progress-circle ${progress >= 3 ? "active": ""}`} id="circle4">Complete</span>
      </div>

      <div className={`progress-bar`} data-progress={progress}></div>
    </div>
  )
}

export default SetupProgress
