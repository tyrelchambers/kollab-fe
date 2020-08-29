import React from "react";
import Header from "../Header/Header";
import "./DisplayWrapper.css";

const DisplayWrapper = ({ children, classNames }) => {
  return (
    <div className="flex h-screen overflow-x-hidden">
      <Header />
      <div
        className={`w-full wrapper-main bg-white overflow-auto ${
          classNames ? classNames : ""
        }`}
      >
        {children}
      </div>
    </div>
  );
};

export default DisplayWrapper;
