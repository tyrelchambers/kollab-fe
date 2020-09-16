import React from "react";
import "./ProjectWidget.css";
import { Link } from "react-router-dom";
import { inject, observer } from "mobx-react";

function ProjectWidget({ project, tiny, NavStore }) {
  if (tiny) {
    return (
      <Link
        to={`/project/${project.uuid}`}
        className=" flex flex-col widget-wrapper-tiny bg-indigo-700 box-shadow m-4"
        onClick={() => NavStore.setIsOpen(false)}
      >
        <div className="widget-thumbnail-wrapper " title={project.title}>
          <img
            src={project.thumbnailUrl}
            alt=""
            className="widget-thumbnail tiny"
          />
        </div>
      </Link>
    );
  }

  return (
    <Link
      to={`/project/${project.uuid}`}
      className=" flex flex-col widget-wrapper  box-shadow m-4 project-item"
      onClick={() => NavStore.setIsOpen(false)}
    >
      <div className="widget-thumbnail-wrapper ">
        <img src={project.thumbnailUrl} alt="" className="widget-thumbnail" />
      </div>

      <div className="widget-body flex justify-between items-center bg-gray-800 ">
        <p className="text-white text-xl font-bold m-0 ellipses">
          {project.title}
        </p>

        <div className="flex items-center" style={{ width: "50px" }}>
          <i className="fas fa-fire-alt text-2xl mr-2 text-white"></i>
          <p className="text-white mt-2 font-bold">{project.likers.length}</p>
        </div>
      </div>
    </Link>
  );
}

export default inject("NavStore")(observer(ProjectWidget));
