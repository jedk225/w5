import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch  } from "react-router-dom"
import logo from './logo.svg';
import landingPage from "../src/pages/landingPage"
import setupProject from "../src/pages/setupProject"
import project from "../src/pages/project"
import './App.css';

const App = () => (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" component={landingPage} />
          <Route exact path="/project" component={setupProject} />
          <Route exact path="/project/:id" component={project} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
)

export default App;

