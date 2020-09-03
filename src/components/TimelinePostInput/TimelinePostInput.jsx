import React from "react";
import { inject, observer } from "mobx-react";
import { useState } from "react";
import { MainButton } from "../Buttons/Buttons";

const TimelinePostInput = ({ UserStore }) => {
  const [state, setstate] = useState({
    update: "",
  });

  return (
    <div className="bg-indigo-900 rounded-lg box-shadow flex-col p-4">
      <div className="flex">
        <input
          type="text"
          name="timelinePost"
          className="form-input for-dark flex-1 mr-4"
          placeholder="Share a status update or a thought"
          value={state.update}
          onChange={(val) => setstate({ ...state, update: val })}
        />

        <div style={{ width: "150px" }}>
          <MainButton text="Post" className="for-dark" />
        </div>
      </div>
    </div>
  );
};

export default inject("UserStore")(observer(TimelinePostInput));
