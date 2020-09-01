import React, { useEffect } from "react";
import { H1, H2 } from "../Headings/Headings";
import "./Featured.css";
import { Link } from "react-router-dom";
import getApi from "../../api/getApi";

function Featured({ small, classes }) {
  const [featuredProject, setFeaturedProject] = React.useState({});

  useEffect(() => {
    getApi({
      url: "/featured",
    }).then((res) => setFeaturedProject({ ...res.Project }));
  }, []);

  const title = small ? (
    <H2 className="mt-8 mb-4">
      <Link to={`/project/${featuredProject.uuid}`} className="hover:underline">
        {featuredProject.title}
      </Link>{" "}
    </H2>
  ) : (
    <H1>
      <Link to={`/project/${featuredProject.uuid}`} className="hover:underline">
        {featuredProject.title}
      </Link>
    </H1>
  );

  return (
    <div
      className={`featured-wrapper ${!small ? "flex" : ""} ${
        classes ? classes : ""
      }`}
    >
      <img
        src={featuredProject.thumbnailUrl}
        alt=""
        className={`featured-thumbnail box-shadow  ${
          small ? "small" : "large mr-8"
        }`}
      />

      <div className="featured-title">
        {title}
        <p className="featured-description">{featuredProject.description}</p>
      </div>
    </div>
  );
}

export default Featured;
