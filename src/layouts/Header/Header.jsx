import React from "react";
import "./Header.css";
import Navbar from "../Navbar/Navbar";
import HeaderHidden from "../../layouts/HeaderHidden/HeaderHidden";
import { inject, observer } from "mobx-react";
import { useSpring, animated } from "react-spring";

function Header({ NavStore }) {
  const props = useSpring({
    width: NavStore.isOpen ? 740 : 0,
    opacity: NavStore.isOpen ? 1 : 0,
  });

  const toggleExtension = () => {
    NavStore.setIsOpen(!NavStore.isOpen);
  };
  return (
    <div className="flex bg-indigo-900">
      <div className="flex-col items-center p-3 pt-6 pb-6 header-wrapper ">
        <i
          className="fas fa-bars text-white text-2xl"
          onClick={toggleExtension}
        ></i>
        <Navbar />
      </div>
      <animated.div
        style={{
          ...props,
          overflow: "hidden",
        }}
      >
        <HeaderHidden />
      </animated.div>
    </div>
  );
}

export default inject("NavStore")(observer(Header));
