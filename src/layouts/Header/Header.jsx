import React from "react";
import "./Header.css";
import Navbar from "../Navbar/Navbar";
import HeaderHidden from "../../layouts/HeaderHidden/HeaderHidden";
import { inject, observer } from "mobx-react";
import { useSpring, animated } from "react-spring";
import UserWidget from "../UserWidget/UserWidget";

function Header({ NavStore, UserStore }) {
  const props = useSpring({
    width: NavStore.isOpen ? 740 : 0,
    opacity: NavStore.isOpen ? 1 : 0,
  });

  const toggleExtension = () => {
    NavStore.setIsOpen(!NavStore.isOpen);
  };
  return (
    <div className="flex bg-indigo-900">
      <div className="flex-col items-center justify-between p-3 pt-6 pb-6 header-wrapper ">
        <div className=" items-center header-wrapper">
          <i
            className="fas fa-bars text-white text-2xl"
            onClick={toggleExtension}
          ></i>
          <Navbar />
        </div>

        {UserStore.user && <UserWidget />}
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

export default inject("NavStore", "UserStore")(observer(Header));
