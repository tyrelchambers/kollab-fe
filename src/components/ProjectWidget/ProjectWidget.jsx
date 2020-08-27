import React from "react";
import { H3 } from "../Headings/Headings";
import "./ProjectWidget.css";
import { concat } from "../../helpers/concatString";
import { Link } from "react-router-dom";

function ProjectWidget({ project }) {
  return (
    <div className="flex flex-col widget-wrapper bg-indigo-700 box-shadow m-4">
      <div className="widget-thumbnail-wrapper ">
        <img src={project.thumbnailUrl} alt="" className="widget-thumbnail" />
      </div>

      <div className="widget-body flex justify-between ">
        <H3>
          <Link to={`/project/${project.uuid}`} className="text-white">
            {project.title}
          </Link>
        </H3>

        <div className="flex items-center" style={{ width: "50px" }}>
          <i className="fas fa-fire-alt text-2xl mr-4 text-white"></i>
          <p className="text-white mt-2">{project.likers.length}</p>
        </div>
      </div>
    </div>
  );
}

export default ProjectWidget;
