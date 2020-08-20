import React, { useRef, useEffect } from "react";
import { useHistory } from "react-router";
import { useForm } from "react-hook-form";
import getApi from "../../api/getApi";
import { inject, observer } from "mobx-react";
import ProjectForm from "./ProjectForm";

function NewProjectForm({
  autocomplete,
  setAutocomplete,
  state,
  projectLinks,
  collaborators,
  inputHandler,
  addProjectLink,
  addContributorHandler,
  removeItemHandler,
  removeContributorHandler,
  positions,
  positionState,
  setPositionState,
  addPositionHandler,
  removePositionHandler,
  UserStore,
  setState,
}) {
  const history = useHistory();

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
        if (res) {
          setAutocomplete([...res]);
        }
      });
    }
  }, [state.collaborators]);

  const submitHandler = async () => {
    const payload = {
      ...state,
      collaborators: [...collaborators],
    };

    const projectId = await getApi({
      url: "/projects/new",
      method: "post",
      data: payload,
    }).then((res) => {
      if (res) {
        return res.project.uuid;
      }
    });

    getApi({
      url: "/projectLinks/",
      method: "post",
      data: {
        projectLinks,
        projectId,
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
      projectLinks={projectLinks}
      collaborators={collaborators}
      inputHandler={inputHandler}
      addProjectLink={addProjectLink}
      addContributorHandler={addContributorHandler}
      removeItemHandler={removeItemHandler}
      removeContributorHandler={removeContributorHandler}
      positions={positions}
      positionState={positionState}
      setPositionState={setPositionState}
      addPositionHandler={addPositionHandler}
      removePositionHandler={removePositionHandler}
      UserStore={UserStore}
      setState={setState}
      ref={ref}
      supportingRef={supportingRef}
      register={register}
      errors={errors}
      handleSubmit={handleSubmit}
      submitHandler={submitHandler}
    />
  );
}

export default inject("UserStore")(observer(NewProjectForm));
