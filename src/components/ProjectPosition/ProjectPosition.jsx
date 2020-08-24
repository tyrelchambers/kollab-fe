import React from "react";
import "./ProjectPosition.css";

const ProjectPosition = ({ position, removePositionHandler, id }) => {
  return (
    <div className="project-position">
      <div className="flex items-center mb-4">
        <i
          className="fas fa-times-circle text-sm text-red-500 mr-4"
          onClick={() => removePositionHandler(id)}
        ></i>
        <h4 className="break-words">{position.title}</h4>
      </div>

      <h4 className="mt-4">Description</h4>
      <p className="break-words">{position.description}</p>

      <h4 className="mt-4">Experience</h4>
      <p className="break-words">{position.experience}</p>
    </div>
  );
};

export default ProjectPosition;
