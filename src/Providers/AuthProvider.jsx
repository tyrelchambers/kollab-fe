import React, { useState, useEffect } from "react";
import getApi from "../api/getApi";
import { inject, observer } from "mobx-react";
import "react-toastify/dist/ReactToastify.css";
import Project from "../pages/Project/Project";
import ProjectController from "../controllers/ProjectController/ProjectController";
import Profile from "../pages/Profile/Profile";
import ModalContainer from "../layouts/ModalContainer/ModalContainer";
import About from "../pages/About/About";
import Explore from "../pages/Explore/Explore";
import Timeline from "../pages/Timeline/Timeline";
import { ToastContainer } from "react-toastify";
import Login from "../pages/Login/Login";
import Signup from "../pages/Signup/Signup";
import Basic from "../pages/ProfileSetup/Basic/Basic";
import Social from "../pages/ProfileSetup/Social/Social";
import Complete from "../pages/ProfileSetup/Complete/Complete";
import DashHome from "../pages/Dashboard/Home/DashHome";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

const AuthContext = React.createContext();

const PrivateRoute = ({ component: Component, ...rest }) => {
  let token = window.localStorage.getItem("token");
  return (
    <Route
      {...rest}
      render={(props) =>
        token ? (
          <Component {...props} />
        ) : (
          <React.Fragment>
            <Redirect
              to={{
                pathname: "/signup",
                state: { from: props.location },
              }}
            />
          </React.Fragment>
        )
      }
    />
  );
};

function AuthProvider({ children, UserStore }) {
  const [state, setState] = useState({
    status: "pending",
    error: null,
    user: null,
  });
  const token =
    window.localStorage.getItem("token") ||
    window.sessionStorage.getItem("token");

  useEffect(() => {
    if (UserStore.user) {
      setState({
        ...state,
        user: UserStore.user,
        status: "success",
      });
    }
  }, [UserStore.user]);

  useEffect(() => {
    const fn = async () => {
      if (token) {
        const user = await getApi({
          url: "/user/me",
        }).then((res) => {
          if (res) {
            return res;
          }
        });

        UserStore.setUser(user);
      }

      setState({
        status: "success",
      });
    };

    fn();
  }, []);

  if (state.status === "pending") return null;

  const AuthenticatedRoutes = () => {
    if (!state.user) return <Route exact path="/" component={Explore} />;

    return (
      <>
        <Route exact path="/" component={Timeline} />
        <PrivateRoute exact path="/setup/basics" component={Basic} />
        <PrivateRoute exact path="/setup/socials" component={Social} />
        <PrivateRoute exact path="/setup/complete" component={Complete} />
        <PrivateRoute exact path="/user/:username" component={DashHome} />
        <PrivateRoute
          exact
          path="/user/:username/project/:action"
          component={ProjectController}
        />
        <PrivateRoute
          exact
          path="/user/:username/project/:projectId/:action"
          component={ProjectController}
        />
        <PrivateRoute exact path="/project/:projectId" component={Project} />
        <PrivateRoute exact path="/profile/edit" component={Profile} />

        <PrivateRoute
          exact
          path="/signout"
          render={() => {
            window.localStorage.removeItem("token");
            window.sessionStorage.removeItem("token");
            window.location.reload();
            window.location.pathname = "/";
          }}
        />
      </>
    );
  };

  return (
    <AuthContext.Provider value={state}>
      <Router>
        <ToastContainer />
        <ModalContainer />
        <Switch>
          <Route exact path="/explore" component={Explore} />
          <Route exact path="/about" component={About} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/login" component={Login} />
          <AuthenticatedRoutes />
        </Switch>
      </Router>
    </AuthContext.Provider>
  );
}

export function useAuthState() {
  const state = React.useContext(AuthContext);
  const isPending = state.status === "pending";
  const isError = state.status === "error";
  const isSuccess = state.status === "success";
  const isAuthenticated = state.user && isSuccess;
  return {
    ...state,
    isPending,
    isError,
    isSuccess,
    isAuthenticated,
  };
}

export default inject("UserStore")(observer(AuthProvider));
