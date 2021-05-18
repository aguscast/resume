import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Test from './Components/Test';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"

ReactDOM.render(
  
  <div>
    <Router>
    <Switch>
      <Route exact path="/">
        <App />
      </Route>
      <Route path="/test">
        <Test />
      </Route>
    </Switch>
    </Router>
  </div>
  ,
  document.getElementById('root')
);

