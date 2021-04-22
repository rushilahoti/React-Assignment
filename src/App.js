import React, { Component } from 'react';

import { BrowserRouter as Router, Link, Redirect, Route, Switch } from 'react-router-dom';
import Login from "./components/Login/login"
import Sidebar from "./components/Dashboard/Sidebar"
import Dashboard from "./components/Dashboard/Dashboard"

class App extends Component {
  render() {
    return (

      <Router>
        <>
          <Link to="/"></Link>
          <Link to="/dashboard"></Link>
          <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path="/dashboard" component={Dashboard} />
          </Switch>
        </>
      </Router>

    )
  }
}
export default App;



