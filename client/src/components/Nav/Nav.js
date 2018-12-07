import React, { Component } from "react";
import { Redirect } from "react-router-dom"
import './Nav.css'
import API from "../../utils/API"
import Project from "./../../pages/project"
class Nav extends Component {

  constructor(props){
    super(props)

    this.state = {
      redirect: null,
      projectID: "",
      password: ""
    }
    this.onSubmit = this.onSubmit.bind(this)
  }

  //by writing it as a function, it automatically binds 'this'
  handleInput = event => {
    event.preventDefault()
    this.setState({[event.target.name] : event.target.value})
    console.log(this.state.password)
  }

  onSubmit(event){
    event.preventDefault()
    const projectLookupPacket = {
      projectID: this.state.projectID,
      password: this.state.password
    }
    console.log(projectLookupPacket, "<=projlookPack")

  API.projectLookUp(projectLookupPacket)
  .then( res => {
    if(res.data){
      this.setState({redirect: this.state.projectID})
    }}
  )
  .catch( err => console.error(err) )
}
  render(){
    if(this.state.redirect){
      return (<Redirect to={`/${this.state.redirect}`}/>)
    }
    return(
      
  <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <a className="navbar-brand NavLogo" href="/">W5</a>
    <span className="NavDescription">who what when where why</span>

    <form className="form-inline right">
      <label className="sr-only" htmlFor="inlineFormInput">ProjectID</label>
      <input type="text" className="form-control mb-2 mr-sm-2 mb-sm-0" onChange={this.handleInput} name="projectID" id="inlineFormInput" placeholder="projectID" />

      <label className="sr-only" htmlFor="inlineFormInputGroup">Password</label>
      <div className="input-group mb-2 mr-sm-2 mb-sm-0">
        <div className="input-group-addon">@</div>
        <input type="text" className="form-control" id="inlineFormInputGroup" onChange={this.handleInput} name="password" placeholder="password" />
      </div>
      <button type="submit" onClick={this.onSubmit} className="btn btn-primary">Submit</button>
    </form>
  </nav>
)}
}

export default Nav;
