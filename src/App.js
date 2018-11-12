import React from 'react';
import { BrowserRouter as Router, Route, Switch  } from "react-router-dom"
import landingPage from "../src/pages/landingPage"
import Nav from "./components/Nav"
import noMatch from "./pages/noMatch"

const App = () => (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" component={landingPage} />

          <Route component={noMatch} />
        </Switch>
      </div>
    </Router>
)

export default App;

