import React, { useState, useEffect } from "react";
import NewProjectForm from "../../components/Forms/NewProjectForm";
import EditProjectForm from "../../components/Forms/EditProjectForm.jsx";
import { useParams } from "react-router";
import DisplayWrapper from "../../layouts/DisplayWrapper/DisplayWrapper";
import { H1 } from "../../components/Headings/Headings";
import getApi from "../../api/getApi";

const initialState = {
  title: "",
  headline: "",
  description: "",
  thumbnail: "",
  supportingImgs: [],
  topics: "",
  collaborators: "",
  projectLinks: "",
  openPositions: false,
};

const initialPositionState = {
  title: "",
  description: "",
  experience: "",
};

const ProjectController = () => {
  const [state, setState] = useState({
    title: "",
    headline: "",
    description: "",
    thumbnail: "",
    supportingImgs: [],
    topics: "",
    collaborators: "",
    projectLinks: "",
    openPositions: false,
  });
  const [projectLinks, setProjectLinks] = useState([]);
  const [collaborators, setCollaborators] = useState([]);
  const [autocomplete, setAutocomplete] = useState([]);
  const [positions, setPositions] = useState([]);
  const [positionState, setPositionState] = useState({
    title: "",
    description: "",
    experience: "",
  });

  const { action, projectId } = useParams();

  useEffect(() => {
    resetState();
  }, [action]);

  const resetState = () => {
    setState(initialState);
    setPositionState(initialPositionState);
    setProjectLinks([]);
    setCollaborators([]);
    setPositions([]);
  };

  const inputHandler = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const addProjectLink = (e) => {
    e.preventDefault();
    if (!state.projectLinks) return false;

    setProjectLinks([...projectLinks, { link: state.projectLinks }]);
    setState({ ...state, projectLinks: "" });
  };

  const addContributorHandler = (e, user) => {
    e.preventDefault();
    if (!state.collaborators) return false;
    setCollaborators([...collaborators, user || state.collaborators]);
    setState({ ...state, collaborators: "" });
    setAutocomplete([]);
  };

  const removeItemHandler = (link, id) => {
    const clone = projectLinks;
    clone.splice(id, 1);

    setProjectLinks([...clone]);

    getApi({
      url: `/projectLinks/${link.uuid}`,
      method: "delete",
    }).then((res) => {
      if (res) {
      }
    });
  };

  const removeContributorHandler = (user, id) => {
    const clone = collaborators;
    clone.splice(id, 1);

    setCollaborators([...clone]);

    if (user.uuid) {
      getApi({
        url: "/collaborators/",
        method: "delete",
        params: {
          projectId,
          userId: user.uuid,
        },
      });
    }
  };

  const addPositionHandler = () => {
    const newPos = positionState;

    setPositions([...positions, newPos]);
    setPositionState({
      title: "",
      description: "",
      experience: "",
    });
  };

  const removePositionHandler = (pos, id) => {
    const clone = positions;
    clone.splice(id, 1);

    setPositions([...clone]);

    if (pos.uuid) {
      getApi({
        url: `/projectRoles/${pos.uuid}`,
        method: "delete",
      }).then((res) => {
        if (res) {
        }
      });
    }
  };

  const props = {
    autocomplete,
    setAutocomplete,
    state,
    setState,
    projectLinks,
    setProjectLinks,
    collaborators,
    setCollaborators,
    inputHandler,
    addProjectLink,
    addContributorHandler,
    removeItemHandler,
    removeContributorHandler,
    positions,
    setPositions,
    positionState,
    setPositionState,
    addPositionHandler,
    removePositionHandler,
  };

  return (
    <DisplayWrapper>
      <div className="flex flex-col items-center">
        {action === "new" && (
          <>
            <H1>Create Project</H1>
            <NewProjectForm {...props} />
          </>
        )}

        {action === "edit" && (
          <>
            <H1>Edit Project</H1>
            <EditProjectForm {...props} />
          </>
        )}
      </div>
    </DisplayWrapper>
  );
};

export default ProjectController;
