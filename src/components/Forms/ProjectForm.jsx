import React from "react";
import { H2 } from "../Headings/Headings";
import FormError from "../FormError/FormError";
import ImageUploader from "../ImageUploader/ImageUploader";
import { SecondaryButton, MainButton } from "../Buttons/Buttons";
import SmallCard from "../SmallCard/SmallCard";
import InfoBlock from "../../layouts/InfoBlock/InfoBlock";
import ProjectPosition from "../ProjectPosition/ProjectPosition";

function ProjectForm({
  autocomplete,
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
  setState,
  ref,
  register,
  errors,
  handleSubmit,
  submitHandler,
  supportingRef,
}) {
  return (
    <form
      className="flex flex-col container"
      onSubmit={handleSubmit(submitHandler)}
    >
      <div className="flex">
        <div className="form w-1/2 mr-2">
          <H2 className="mb-4 mt-2">Basics</H2>

          <div className="field-group">
            <label htmlFor="title" className="form-label">
              Title -{" "}
              <span className="italic text-sm text-gray-500">Required</span>
            </label>
            <input
              type="text"
              className="form-input with-bg"
              placeholder="Super Cool Project"
              name="title"
              value={state.title}
              onChange={(e) => inputHandler(e)}
              ref={register({
                required: true,
              })}
            />
            {errors.title && <FormError error="Title is required" />}
          </div>

          <div className="field-group">
            <label htmlFor="headline" className="form-label">
              Headline -{" "}
              <span className="italic text-sm text-gray-500">Required</span>
            </label>
            <input
              type="text"
              className="form-input with-bg"
              placeholder="The Elon Musk of projects"
              name="headline"
              value={state.headline}
              onChange={(e) => inputHandler(e)}
              ref={register({
                required: true,
              })}
            />
            {errors.headline && <FormError error="Headline is required" />}
          </div>

          <div className="field-group">
            <label htmlFor="description" className="form-label">
              Short Description -{" "}
              <span className="italic text-sm text-gray-500">Required</span>
            </label>
            <textarea
              type="text"
              className="form-textarea"
              placeholder="A basic introduction of your project..."
              name="description"
              value={state.description}
              onChange={(e) => inputHandler(e)}
              ref={register({
                required: true,
                maxLength: 500,
              })}
            />
            {errors.description && errors.description.type === "required" && (
              <FormError error="Description is required" />
            )}
            {errors.description && errors.description.type === "maxLength" && (
              <FormError error="Description is too long" />
            )}
          </div>
          <div className="flex justify-end">
            <p className="text-gray-500">
              {state.description.length}/500{" "}
              <span
                className={`${
                  state.description.length > 500 ? "text-red-500" : ""
                }`}
              >
                {state.description.length > 500
                  ? `+${state.description.length - 500}`
                  : ""}
              </span>
            </p>
          </div>

          <div className="field-group">
            <label htmlFor="thumbnail" className="form-label">
              Thumbnail
            </label>
            <p className="mb-4">
              For the best results, upload an image that is 500 x 500.
              Thumbnails are squares with rounded corners.
            </p>
            <ImageUploader imageRef={ref} maxFiles={1} />
          </div>

          <div className="field-group">
            <label htmlFor="supportingImages" className="form-label">
              Supporting Images
            </label>
            <p className="mb-4">Recommended size: 1280 x 720</p>
            <ImageUploader imageRef={supportingRef} maxFiles={6} />
          </div>

          <div className="field-group">
            <label htmlFor="topics" className="form-label">
              Topics
            </label>
            <input
              type="text"
              className="form-input with-bg"
              placeholder="comma separated topics (eg: productivity, health, awesome)"
              name="topics"
              value={state.topics}
              onChange={(e) => inputHandler(e)}
            />
          </div>

          <div className="field-group">
            <label htmlFor="projectLinks" className="form-label">
              Project Links
            </label>

            <div className="flex mb-2">
              <input
                type="text"
                name="projectLinks"
                className="form-input with-bg flex-auto"
                placeholder="Add a project link"
                value={state.projectLinks}
                onChange={(e) => inputHandler(e)}
                onKeyPress={(e) => {
                  if (e.which === 13) {
                    addProjectLink(e);
                  }
                }}
              />
              <div className="w-20 ml-4">
                <SecondaryButton
                  text="Add"
                  onClick={(e) => addProjectLink(e)}
                />
              </div>
            </div>
          </div>

          <div className="mt-2">
            {projectLinks.map((item, id) => (
              <SmallCard
                key={id}
                text={item.link}
                removeItem={() => removeItemHandler(item, id)}
              />
            ))}
          </div>
        </div>

        <div className="flex w-1/2 flex-col">
          <InfoBlock>
            <H2 className="mb-4">Open Positions</H2>

            <div className="field-group">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  name="openPositions"
                  id="openPositionsCheck"
                  className="mr-4"
                  checked={state.openPositions}
                  onChange={(e) =>
                    setState({ ...state, openPositions: e.target.checked })
                  }
                />
                <label htmlFor="openPositions" className="form-label no-margin">
                  Looking for help?
                </label>
              </div>
            </div>

            <div className="field-group">
              <label htmlFor="positionTitle" className="form-label">
                Position title
              </label>
              <input
                type="text"
                className="form-input with-bg"
                name="positionTitle"
                placeholder="Chief Bagel Officer"
                onChange={(e) =>
                  setPositionState({ ...positionState, title: e.target.value })
                }
                value={positionState.title}
              />
            </div>

            <div className="field-group">
              <label htmlFor="positionDescription" className="form-label">
                Position description
              </label>
              <textarea
                type="text"
                className="form-textarea"
                name="positionDescription"
                placeholder="Describe what this position would help you with..."
                onChange={(e) =>
                  setPositionState({
                    ...positionState,
                    description: e.target.value,
                  })
                }
                value={positionState.description}
              />
            </div>

            <div className="field-group">
              <label htmlFor="positionExperience" className="form-label">
                Experience
              </label>
              <input
                type="text"
                className="form-input with-bg"
                name="positionExperience"
                placeholder="Does this require any experience?"
                onChange={(e) =>
                  setPositionState({
                    ...positionState,
                    experience: e.target.value,
                  })
                }
                value={positionState.experience}
              />
            </div>

            <div className="h-10 mt-4">
              <SecondaryButton
                text="Save position"
                onClick={addPositionHandler}
              />
            </div>
            {positions.length > 0 &&
              positions.map((pos, id) => (
                <ProjectPosition
                  position={pos}
                  key={id}
                  id={id}
                  removePositionHandler={() => removePositionHandler(pos, id)}
                />
              ))}
          </InfoBlock>

          <InfoBlock>
            <div className="field-group">
              <H2 className="mb-4">Collaborators</H2>
              <p className="italic text-sm mt-2 mb-4">
                Collaborators are people who can help in more ways than one.
                Rather than adding someone to a position, add them as a
                collaborator in order to show them as a helper in more than just
                a singular role.
              </p>

              <p className="italic text-sm mt-2 mb-4">
                Collaborators will be emailed to let them know they've been
                added to your project.
              </p>

              <div className="flex">
                <input
                  type="text"
                  name="collaborators"
                  className="form-input with-bg flex-auto"
                  placeholder="Search for a user via email"
                  id="addContributorInput"
                  value={state.collaborators}
                  onChange={(e) => inputHandler(e)}
                />
              </div>
            </div>
            <div className=" mb-2">
              {autocomplete.length > 0 &&
                autocomplete.map((user) => (
                  <div
                    className="flex items-center p-4 bg-gray-100 mt-4 mb-4"
                    onClick={(e) => addContributorHandler(e, user)}
                  >
                    <i className="fas fa-user-circle mr-4 text-xl"></i>
                    <p
                      key={user.uuid}
                      className="cursor-pointer hover:underline"
                    >
                      {user.email}
                    </p>
                  </div>
                ))}
            </div>

            {collaborators.length > 0 && (
              <div className="mt-8">
                {collaborators.map((person, id) => (
                  <SmallCard
                    key={id}
                    text={person.email}
                    removeItem={(e) => removeContributorHandler(person, id)}
                  />
                ))}
              </div>
            )}
          </InfoBlock>
        </div>
      </div>

      <div className="mt-6 mb-6 w-1/4 mx-auto">
        <MainButton text="Save Changes" type="submit" />
      </div>
    </form>
  );
}

export default ProjectForm;
