import React, { useState, useEffect } from "react";
import { inject, observer } from "mobx-react";
import "./HeaderHidden.css";
import { H1, H3 } from "../../components/Headings/Headings";
import { Link } from "react-router-dom";
import getApi from "../../api/getApi";
import ProjectWidget from "../../components/ProjectWidget/ProjectWidget";

const HeaderHidden = ({ NavStore, UserStore }) => {
  const [myProjects, setMyProjects] = useState([]);

  useEffect(() => {
    const fn = async () => {
      getApi({
        url: "/user/projects",
      }).then((res) => {
        if (res) {
          setMyProjects(res);
        }
      });
    };
    fn();
  }, []);
  return (
    <div
      className={`header-hidden-wrapper ${
        NavStore.isOpen ? "flex-col" : "hidden"
      } pl-10 pr-10 overflow-hidden h-full`}
    >
      <H1 style={{ color: "white" }}>Happy Thursday, Tyrel!</H1>
      <div className="flex mb-6">
        <div className="flex items-center mr-6">
          <p className="font-bold text-white mr-2">200</p>
          <p className="text-gray-400">Followers</p>
        </div>

        <div className="flex items-center">
          <p className="font-bold text-white mr-2">200</p>
          <p className="text-gray-400">Following</p>
        </div>
      </div>

      <Link to="/profile/edit" className="text-yellow-400">
        Edit profile
      </Link>

      <div className="mt-16">
        <div className="flex items-center mb-4">
          <H3 className="mr-6" style={{ color: "white", fontWeight: "300" }}>
            Projects ({myProjects.length})
          </H3>

          <Link
            to={`/user/${UserStore.user.uuid}/project/new`}
            className="text-yellow-400"
          >
            Create project
          </Link>
        </div>

        <div className="flex flex-wrap">
          {myProjects.length > 0 &&
            myProjects.map((project, id) => {
              return (
                <ProjectWidget project={project} key={project.uuid} tiny />
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default inject("NavStore", "UserStore")(observer(HeaderHidden));
