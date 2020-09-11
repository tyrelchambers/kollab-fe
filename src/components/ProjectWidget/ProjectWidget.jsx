import React from "react";
import "./ProjectWidget.css";
import { Link } from "react-router-dom";

function ProjectWidget({ project, tiny }) {
  if (tiny) {
    return (
      <div className="flex flex-col widget-wrapper-tiny bg-indigo-700 box-shadow m-4">
        <div className="widget-thumbnail-wrapper " title={project.title}>
          <img
            src={project.thumbnailUrl}
            alt=""
            className="widget-thumbnail tiny"
          />
        </div>
      </div>
    );
  }

  return (
    <Link
      to={`/project/${project.uuid}`}
      className=" flex flex-col widget-wrapper bg-indigo-700 box-shadow m-4"
    >
      <div className="widget-thumbnail-wrapper ">
        <img src={project.thumbnailUrl} alt="" className="widget-thumbnail" />
      </div>

      <div className="widget-body flex justify-between items-center ">
        <p className="text-white text-xl font-bold m-0">{project.title}</p>

        <div className="flex items-center" style={{ width: "50px" }}>
          <i className="fas fa-fire-alt text-2xl mr-2 text-white"></i>
          <p className="text-white mt-2 font-bold">{project.likers.length}</p>
        </div>
      </div>
    </Link>
  );
}

export default ProjectWidget;
