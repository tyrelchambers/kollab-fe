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

function Home() {
  const [projects, setProjects] = useState([]);
  const [topProjects, setTopProjects] = useState([]);
  const [featuredProject, setFeaturedProject] = useState({});
  const [hasNextPage, setHasNextPage] = useState(false);
  const [limit, setLimit] = useState(25);

  useEffect(() => {
    getAllProjects();

    getApi({
      url: "/projects/top",
    }).then((res) => setTopProjects([...res]));

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
            <H3>Top Projects</H3>

            <InfoBlock>
              <div className="flex flex-col">
                {topProjects.length > 0 &&
                  topProjects.map((project) => (
                    <div className="flex items-center mb-4" key={project.uuid}>
                      <img
                        src={project.thumbnailUrl}
                        alt=""
                        className="profile-avatar"
                      />
                      <Link
                        to={`/project/${project.uuid}`}
                        className="font-bold hover:underline"
                      >
                        {project.title}
                      </Link>
                    </div>
                  ))}
              </div>
            </InfoBlock>
          </Sidebar>
        </div>
      </main>
    </DisplayWrapper>
  );
}

export default Home;
