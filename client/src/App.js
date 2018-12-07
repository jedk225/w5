import React from 'react';
import { BrowserRouter as Router, Route, Switch  } from "react-router-dom"
import landingPage from "./pages/landingPage"
import SetupProject from "./pages/setupProject"
import Project from "./pages/project"
import Nav from "./components/Nav"
import noMatch from "./pages/noMatch"

class App extends React.Component {
  
  state = {
    projects: []
  }
  
  componentDidMount(){
    try{
        const json = localStorage.getItem('projects');
        const projects = JSON.parse(json);
        if (projects) {
            this.setState({ projects })
        }
    } catch (e){
        //do nothing
    }
    
}

// componentDidUpdate(prevProps, prevState){
//     if (prevState.projects.length !== this.state.projects.length){ 
//         const json = JSON.stringify(this.state.projects);
//         localStorage.setItem('projects', json);
//     console.log('Saving Data')
//     }
// }

updateProjectList = (project) => {
  let joined = this.state.projects.concat(project)
  let joinedString = JSON.stringify(joined)
  localStorage.setItem('projects', joinedString);
  console.log(joined, "<-joined")
            this.setState({projects: joined})
}
  
  render(){
  return(
    <Router>
    <div>
      <Nav />
      <Switch>
        <Route exact path="/" component={landingPage} />
        <Route exact path="/setup" render={ () => <SetupProject updateProjectList={this.updateProjectList} />} />
        <Route path="/:id" render={props => <Project {...props} /> } />
        <Route component={noMatch} />
      </Switch>
    </div>
    </Router>
  )
}
}

export default App;



