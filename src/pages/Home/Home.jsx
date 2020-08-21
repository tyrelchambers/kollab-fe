import React, { useState, useEffect } from "react";
import "./Home.css";
import { H3 } from "../../components/Headings/Headings";
import Featured from "../../components/Featured/Featured";
import ProjectWidget from "../../components/ProjectWidget/ProjectWidget";
import MainCol from "../../layouts/MainCol/MainCol";
import Sidebar from "../../layouts/Sidebar/Sidebar";
import InfoBlock from "../../layouts/InfoBlock/InfoBlock";
import { Link } from "react-router-dom";
import getApi from "../../api/getApi";
import DisplayWrapper from "../../layouts/DisplayWrapper/DisplayWrapper";
import groupByDay from "../../helpers/groupByDay";
import { isToday, parseISO } from "date-fns";
import InfiniteScroll from "react-infinite-scroller";

const project = {
  thumbnail:
    "https://images.unsplash.com/photo-1593291619462-e4240344ea21?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2550&q=80",
  title: "Some awesome project I made",
};
function Home() {
  const [projects, setProjects] = useState([]);
  const [users, setUsers] = useState([]);
  const [featuredProject, setFeaturedProject] = useState({});
  const [hasNextPage, setHasNextPage] = useState(false);
  const [limit, setLimit] = useState(25);

  useEffect(() => {
    getAllProjects();

    getApi({
      url: `/user/all`,
      params: {
        availableToHelp: true,
      },
    }).then((res) => setUsers([...res]));

    getApi({
      url: "/featured",
    }).then((res) => setFeaturedProject({ ...res.Project }));
  }, []);

  const getAllProjects = () => {
    getApi({
      url: `/projects/all?limit=${limit}`,
    }).then((res) => {
      if (res) {
        setProjects(groupByDay(res.projects));
        setLimit(res.limit);
        setHasNextPage(res.hasNextPage);
      }
    });
  };
  return (
    <DisplayWrapper>
      <section>
        <H3>Project of the Day</H3>
        <Featured project={featuredProject} />
      </section>

      <main className="mt-16">
        <div className="flex">
          <MainCol>
            <div className="flex flex-col w-full">
              <InfiniteScroll
                pageStart={0} //This is important field to render the next data
                loadMore={getAllProjects}
                hasMore={hasNextPage}
                loader={<h4>Loading...</h4>}
              >
                {projects.map((project, id) => {
                  return (
                    <React.Fragment key={project.uuid}>
                      <H3 className="mb-4">
                        {isToday(parseISO(project.fullDate))
                          ? "Today"
                          : project.date}
                      </H3>

                      {project.projects.map((proj) => (
                        <ProjectWidget project={proj} key={proj.uuid} />
                      ))}
                    </React.Fragment>
                  );
                })}
              </InfiniteScroll>
            </div>
          </MainCol>
          <Sidebar>
            <H3>Available To Help</H3>

            <InfoBlock>
              <div className="flex flex-col">
                {users.length > 0 &&
                  users.map((user) => (
                    <div className="flex items-center" key={user.uuid}>
                      <img
                        src={user.avatar}
                        alt=""
                        className="profile-avatar"
                      />
                      <Link to="#" className="font-bold hover:underline">
                        {user.name}
                      </Link>
                    </div>
                  ))}

                {users.length === 0 && <p>No collaborators available, yet!</p>}
              </div>
            </InfoBlock>

            <H3 className="mt-6">Top Open Source</H3>

            <InfoBlock>
              <div className="flex flex-col">
                <div className="flex items-center">
                  <img
                    src={project.thumbnail}
                    alt=""
                    className="profile-avatar"
                  />
                  <Link to="#" className="font-bold hover:underline">
                    {project.title}
                  </Link>
                </div>
              </div>
            </InfoBlock>
          </Sidebar>
        </div>
      </main>
    </DisplayWrapper>
  );
}

export default Home;
