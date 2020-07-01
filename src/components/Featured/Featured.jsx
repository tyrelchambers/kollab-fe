import React from 'react'
import { H1 } from '../Headings/Headings'
import './Featured.css'

function Featured({project}) {
  return (
    <div className="featured-wrapper p-10 mt-8 ">
      <div className="featured-title">
        <H1>{project.title}</H1>
        <p className="featured-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed turpis dictum, fringilla ex ut, tincidunt enim. Duis vulputate dui non dolor ultricies dictum. Quisque maximus enim nec mauris fermentum laoreet. Cras elementum tellus sem, et interdum nisi maximus mollis. Fusce nisl felis, viverra eu porttitor a, aliquam in nisi. Nulla purus sapien, fringilla a viverra ut, rhoncus et lorem. Aliquam tincidunt, risus sed aliquet scelerisque, augue diam vestibulum urna, vitae dictum tellus sapien posuere ante.</p>
      </div>
      <img src={project.thumbnail} alt="" className="featured-thumbnail"/>
    </div>
  )
}

export default Featured
