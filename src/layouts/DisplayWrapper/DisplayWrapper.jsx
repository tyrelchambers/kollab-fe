import React from "react";
import Header from "../Header/Header";
import "./DisplayWrapper.css";

const DisplayWrapper = ({ children }) => {
  return (
    <div className="flex h-screen overflow-x-hidden">
      <Header />
      <div className="w-full wrapper-main bg-white overflow-auto p-4">
        {children}
      </div>
    </div>
  );
};

export default DisplayWrapper;
