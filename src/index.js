import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './assets/main.css'
import * as serviceWorker from './serviceWorker';
import { Provider } from 'mobx-react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './pages/Home/Home';
import 'normalize.css'
import '@fortawesome/fontawesome-free/css/all.css'
import Signup from './pages/Signup/Signup';
import Basic from './pages/ProfileSetup/Basic/Basic';

ReactDOM.render(
  <React.StrictMode>
    <Provider>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/setup/basics" component={Basic}/>
        </Switch>
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
