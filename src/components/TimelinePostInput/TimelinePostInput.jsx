import React from "react";
import { inject, observer } from "mobx-react";
import { useState } from "react";
import { MainButton } from "../Buttons/Buttons";
import { toast } from "react-toastify";
import getApi from "../../api/getApi";

const TimelinePostInput = () => {
  const [state, setstate] = useState({
    text: "",
  });

  const submitHandler = () => {
    if (!state.text) {
      return toast.error("Check post input and try again");
    }

    getApi({
      url: "/timeline/save",
      data: {
        ...state,
      },
      method: "post",
    });
  };

  return (
    <div className="bg-indigo-900 rounded-lg box-shadow flex-col p-4">
      <div className="flex">
        <input
          type="text"
          name="timelinePost"
          className="form-input for-dark flex-1 mr-4"
          placeholder="Share a status update or a thought"
          value={state.text}
          onChange={(e) => setstate({ ...state, text: e.target.value })}
        />

        <div style={{ width: "150px" }}>
          <MainButton
            text="Post"
            className="for-dark"
            onClick={submitHandler}
          />
        </div>
      </div>
    </div>
  );
};

export default TimelinePostInput;
