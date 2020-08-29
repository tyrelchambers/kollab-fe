import React, { useState, useEffect } from "react";
import "./Home.css";
import { H2, H1 } from "../../components/Headings/Headings";
import Featured from "../../components/Featured/Featured";
import ProjectWidget from "../../components/ProjectWidget/ProjectWidget";
import getApi from "../../api/getApi";
import DisplayWrapper from "../../layouts/DisplayWrapper/DisplayWrapper";
import groupByDay from "../../helpers/groupByDay";
import { isToday, parseISO } from "date-fns";
import InfiniteScroll from "react-infinite-scroller";
import { Search } from "../../components/Inputs/Inputs";

function Home() {
  const [projects, setProjects] = useState([]);
  const [, setTopProjects] = useState([]);
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
      <section className="bg-gray-100 overflow-hidden">
        <div className="flex w-full justify-between">
          <H1 className="mt-0">Kollab</H1>
          <Search withIcon />
        </div>
        <Featured project={featuredProject} />
      </section>

      <main className="p-8">
        <div className="flex flex-col w-full">
          <InfiniteScroll
            pageStart={0} //This is important field to render the next data
            loadMore={getAllProjects}
            hasMore={hasNextPage}
            loader={<h4>Loading...</h4>}
          >
            {projects.map((project) => {
              return (
                <React.Fragment key={project.uuid}>
                  <H2 className="mb-4 mt-4">
                    {isToday(parseISO(project.fullDate))
                      ? "Today"
                      : project.date}
                  </H2>

                  <div className="flex flex-wrap ">
                    {project.projects.map((proj) => (
                      <ProjectWidget project={proj} key={proj.uuid} />
                    ))}
                  </div>
                </React.Fragment>
              );
            })}
          </InfiniteScroll>
        </div>
        {/* <div className="flex">
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
        </div> */}
      </main>
    </DisplayWrapper>
  );
}

export default Home;
