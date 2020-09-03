import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "./assets/main.css";
import * as serviceWorker from "./serviceWorker";
import { Provider } from "mobx-react";
import { BrowserRouter as Route, Redirect } from "react-router-dom";
import "normalize.css";
import "@fortawesome/fontawesome-free/css/all.css";

import AuthProvider from "./Providers/AuthProvider";
import stores from "./stores/index";


const App = () => {
  return (
    <React.StrictMode>
      <Provider {...stores}>
        <AuthProvider/>
      </Provider>
    </React.StrictMode>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
