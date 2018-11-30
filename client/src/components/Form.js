import React, { Component } from "react";
import API from "../utils/API"

class Form extends Component {

    constructor(props){
        super(props)
        this.state = {
            projectName: "",
            primaryEmail: "",
                optLocation: false,
                optTimeStamp: false,
                optPhoto: false,
                optText: false
        }
        this.onChange = this.onChange.bind(this)
        this.toggleOption = this.toggleOption.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    onChange(event){
        event.preventDefault();
        console.log(event.target.name);
        this.setState({[event.target.name] : event.target.value})  
    }

    toggleOption(e){
        const toggle = e.target.checked;
        const name = e.target.value

        console.log(toggle + "<-toggle")
        console.log(name + "<-name")
        if(!this.state[name]){
            console.log("toggle was true")
            this.setState({[name] : true })
            // this.state.selectedOptions.push(name)
        } else{
            // document.getElementById(e.target.id).checked = false
            console.log("toggle was false")
            this.setState({[name] : false })

        }
        console.log(this.state.selectedOptions);
    }
    
    
    onSubmit(event){
        event.preventDefault()
        const arr = []
        console.log(this.state.selectedOptions)
        if(this.state.optLocation) arr.push("optLocation")
        if(this.state.optTimeStamp) arr.push("optTimeStamp")
        if(this.state.optPhoto) arr.push("optPhoto")
        if(this.state.optText) arr.push("optText")

        const newProject = {
            projectName: this.state.projectName,
            primaryEmail: this.state.primaryEmail,
            optLocation: this.state.optLocation,
            optTimeStamp: this.state.optTimeStamp,
            optPhoto: this.state.optPhoto,
            optText: this.state.optText,
            options: arr
        }
        // console.log(newProject);
        API.createProject(newProject)
        .then( res => alert(res.data.id))
        .catch( err => console.error(err) )
    }

    render(){
        return(
        <form>
            <div className="form-group">
                <label htmlFor="projectName">Project Name</label>
                <input value={this.state.projectName}  onChange={this.onChange} className="form-control" name="projectName" id="projectName" />
            </div>
            <div className="form-group">
                <label htmlFor="projectEmail">Primary Email Address</label>
                <input type="email" value={this.state.primaryEmail}  onChange={this.onChange} className="form-control" name="primaryEmail" id="projectEmail" />
            </div>
            <div className="form-group">
                <label htmlFor="pwd">Password:</label>
                <input type="password" className="form-control" id="pwd" />
            </div>
            <div className="form-check">
                <input className="form-check-input" type="radio" name="optLocation" id="location" value="optLocation" onClick={this.toggleOption} checked={this.state.optLocation}  />
                <label className="form-check-label" htmlFor="location">
                    Location
                </label>
            </div>

             <div className="form-check">
                <input className="form-check-input" type="radio" name="timeStamp" id="timeStamp" value="optTimeStamp" onClick={this.toggleOption} checked={this.state.optTimeStamp}/>
                <label className="form-check-label" htmlFor="timeStamp">
                    TimeStamp
                </label>
            </div>

            <div className="form-check">
            <input className="form-check-input" type="radio" name="cameraInput" id="cameraInput" value="optPhoto" onClick={this.toggleOption} checked={this.state.optPhoto}/>
            <label className="form-check-label" htmlFor="cameraInput">
                Photo Input
            </label>
            </div>

            <div className="form-check">
            <input className="form-check-input" type="radio" name="textBox" id="textBox" value="optText" onClick={this.toggleOption}
            checked={this.state.optText}/>
            <label className="form-check-label" htmlFor="textBox">
                Text Box
            </label>
        </div> 

            <button type="submit" className="btn btn-primary" onClick={this.onSubmit}>Submit</button>
            </form>)
            }
         
}

export default Form;


