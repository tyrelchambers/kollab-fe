import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "./assets/main.css";
import * as serviceWorker from "./serviceWorker";
import { Provider } from "mobx-react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home/Home";
import "normalize.css";
import "@fortawesome/fontawesome-free/css/all.css";
import Signup from "./pages/Signup/Signup";
import Basic from "./pages/ProfileSetup/Basic/Basic";
import Social from "./pages/ProfileSetup/Social/Social";
import Complete from "./pages/ProfileSetup/Complete/Complete";
import DashHome from "./pages/Dashboard/Home/DashHome";
import AuthProvider from "./Providers/AuthProvider";
import Login from "./pages/Login/Login";
import stores from "./stores/index";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Project from "./pages/Project/Project";
import ProjectController from "./controllers/ProjectController/ProjectController";
import Profile from "./pages/Profile/Profile";
import ModalContainer from "./layouts/ModalContainer/ModalContainer";
import About from "./pages/About/About";
const App = () => {
  return (
    
    <React.StrictMode>
      <Provider {...stores}>
        <AuthProvider>
          <Router>
            <ToastContainer />
            <ModalContainer />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/about" component={About} />
              <Route exact path="/signup" component={Signup} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/setup/basics" component={Basic} />
              <Route exact path="/setup/socials" component={Social} />
              <Route exact path="/setup/complete" component={Complete} />
              <Route exact path="/user/:username" component={DashHome} />
              <Route
                exact
                path="/user/:username/project/:action"
                component={ProjectController}
              />
              <Route
                exact
                path="/user/:username/project/:projectId/:action"
                component={ProjectController}
              />
              <Route exact path="/project/:projectId" component={Project} />
              <Route exact path="/profile/edit" component={Profile} />

              <Route
                exact
                path="/signout"
                render={() => {
                  window.localStorage.removeItem("token");
                  window.sessionStorage.removeItem("token");
                  window.location.pathname = "/";
                }}
              />
            </Switch>
          </Router>
        </AuthProvider>
      </Provider>
    </React.StrictMode>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
