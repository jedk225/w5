import React from 'react';
import { BrowserRouter as Router, Route, Switch  } from "react-router-dom"
import landingPage from "./pages/landingPage"
import SetupProject from "./pages/setupProject"
import Nav from "./components/Nav"
import noMatch from "./pages/noMatch"

const App = () => {
  return(
    <Router>
    <div>
      <Nav />
      <Switch>
        <Route exact path="/" component={landingPage} />
        <Route exact path="/setup" component={SetupProject} />
        <Route component={noMatch} />
      </Switch>
    </div>
    </Router>
  )
}

export default App;


