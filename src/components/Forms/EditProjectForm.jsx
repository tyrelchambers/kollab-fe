import React, { useRef, useEffect } from "react";
import { useHistory, useParams } from "react-router";
import { useForm } from "react-hook-form";
import getApi from "../../api/getApi";
import { inject, observer } from "mobx-react";
import ProjectForm from "./ProjectForm";

const EditProjectForm = ({
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
  UserStore,
}) => {
  const history = useHistory();
  const { projectId } = useParams();

  const ref = useRef(null);
  const supportingRef = useRef(null);

  const { register, handleSubmit, errors } = useForm({
    reValidateMode: "onBlur",
  });

  useEffect(() => {
    if (state.collaborators.length > 3) {
      getApi({
        url: `/user/${state.collaborators}`,
      }).then((res) => {
        setAutocomplete([...res]);
      });
    }
  }, [state.collaborators]);

  useEffect(() => {
    const fn = async () => {
      await getApi({
        url: `/projects/${projectId}/edit`,
      }).then((res) => {
        if (res) {
          const { collaborators, ProjectLinks, ProjectRoles, ...rest } = res;

          setState({ ...state, ...rest });

          if (ProjectLinks) {
            setProjectLinks([...ProjectLinks]);
          }

          if (collaborators.length) {
            setCollaborators([...collaborators]);
          }

          if (ProjectRoles.length) {
            setPositions([...ProjectRoles]);
          }
        }
      });
    };

    fn();
  }, []);

  const submitHandler = async () => {
    const payload = {
      ...state,
    };
    console.log(state);

    await getApi({
      url: `/projects/${state.uuid}/edit`,
      method: "put",
      data: payload,
    });

    getApi({
      url: "/projectLinks/",
      method: "post",
      data: {
        projectId,
        projectLinks: [...projectLinks],
      },
    });

    getApi({
      url: "/projectRoles/",
      method: "post",
      data: {
        projectId,
        positions: [...positions],
      },
    });

    getApi({
      url: "/collaborators/",
      method: "post",
      data: {
        projectId,
        collaborators: [...collaborators],
      },
    });

    history.push(`/user/${UserStore.user.username}`);
  };

  return (
    <ProjectForm
      autocomplete={autocomplete}
      setAutocomplete={setAutocomplete}
      state={state}
      setState={setState}
      projectLinks={projectLinks}
      setProjectLinks={setProjectLinks}
      collaborators={collaborators}
      setCollaborators={setCollaborators}
      inputHandler={inputHandler}
      addProjectLink={addProjectLink}
      addContributorHandler={addContributorHandler}
      removeItemHandler={removeItemHandler}
      removeContributorHandler={removeContributorHandler}
      positions={positions}
      setPositions={setPositions}
      positionState={positionState}
      setPositionState={setPositionState}
      addPositionHandler={addPositionHandler}
      removePositionHandler={removePositionHandler}
      UserStore={UserStore}
      ref={ref}
      supportingRef={supportingRef}
      register={register}
      errors={errors}
      handleSubmit={handleSubmit}
      submitHandler={submitHandler}
    />
  );
};

export default inject("UserStore")(observer(EditProjectForm));
