import React, { useState, useEffect } from "react";
import "./Explore.css";
import { H2, H1 } from "../../components/Headings/Headings";
import Featured from "../../components/Featured/Featured";
import ProjectWidget from "../../components/ProjectWidget/ProjectWidget";
import getApi from "../../api/getApi";
import DisplayWrapper from "../../layouts/DisplayWrapper/DisplayWrapper";
import groupByDay from "../../helpers/groupByDay";
import { isToday, parseISO } from "date-fns";
import InfiniteScroll from "react-infinite-scroller";
import { Search } from "../../components/Inputs/Inputs";
import Autocomplete from "../../components/Autocomplete/Autocomplete";

function Explore() {
  const [projects, setProjects] = useState([]);
  const [, setTopProjects] = useState([]);
  const [hasNextPage, setHasNextPage] = useState(false);
  const [limit, setLimit] = useState(25);

  useEffect(() => {
    getAllProjects();

    getApi({
      url: "/projects/top",
    }).then((res) => setTopProjects([...res]));
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
      <section className="bg-gray-100 p-8">
        <div className="flex w-full justify-between">
          <H1 className="mt-0">Explore</H1>
          <div className="w-full max-w-lg relative z-10">
            <Search withIcon />
            <Autocomplete />
          </div>
        </div>
        <Featured classes="mt-10" />
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
      </main>
    </DisplayWrapper>
  );
}

export default Explore;
