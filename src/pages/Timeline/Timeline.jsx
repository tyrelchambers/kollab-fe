import React, { useState, useEffect } from "react";
import DisplayWrapper from "../../layouts/DisplayWrapper/DisplayWrapper";
import { H1, H2 } from "../../components/Headings/Headings";
import Featured from "../../components/Featured/Featured";
import { Link } from "react-router-dom";
import getApi from "../../api/getApi";

const Timeline = () => {
  const [topProjects, setTopProjects] = useState([]);
  const [feed, setFeed] = useState([]);

  useEffect(() => {
    getApi({
      url: "/projects/top",
    }).then((res) => setTopProjects([...res]));
  }, []);

  return (
    <DisplayWrapper classNames="p-4">
      <H1>Timeline</H1>

      <main className="flex mt-10">
        <section className="w-3/4">
          {feed.length === 0 && <p>Nothing to show.</p>}
        </section>

        <aside className="w-1/4 flex-col">
          <H2>Featured Project</H2>
          <div className="bg-gray-200 p-4 rounded-lg mt-8">
            <Featured small />
          </div>

          <H2 className="mt-8">Top Projects</H2>

          <div className="bg-gray-200 p-4 rounded-lg mt-8">
            <div className="flex flex-col">
              {topProjects.length > 0 &&
                topProjects.map((project) => (
                  <div className="flex items-center mb-4" key={project.uuid}>
                    <img
                      src={project.thumbnailUrl}
                      alt=""
                      className="profile-avatar mr-4"
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
          </div>
        </aside>
      </main>
    </DisplayWrapper>
  );
};

export default Timeline;
