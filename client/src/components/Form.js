import React, { Component } from "react";
import API from "../utils/API"

class Form extends Component {

    constructor(props){
        super(props)

        this.state = {
            projectName: "",
            primaryEmail: "",
            projectSlug: "",
            password: "",
            projectDescription: ""    
        }
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.nameSlug = this.nameSlug.bind(this);
    }

    onChange(event){
        event.preventDefault();
        this.setState({[event.target.name] : event.target.value})
        const Name = this.state.projectName;
        const slug = this.nameSlug(Name);
        this.setState({projectSlug: slug})  
    }

    nameSlug(text){
        return text.toString().toLowerCase()
              .replace(/\s+/g, '-')           // Replace spaces with -
              .replace(/[^\w\-]+/g, '')       // Remove all non-word chars
              .replace(/\-\-+/g, '-')         // Replace multiple - with single -
              .replace(/^-+/, '')             // Trim - from start of text
              .replace(/-+$/, '');            // Trim - from end of text
          
    }    
    
    onSubmit(event){
        event.preventDefault()
        
        const newProject = {
            projectName: this.state.projectName,
            projectSlug: this.state.projectSlug,
            primaryEmail: this.state.primaryEmail,
            password: this.state.password,
            projectDescription: this.state.projectDescription
        }

        console.log(newProject)

        API.createProject(newProject)
        .then( res => alert(res.data.id))
        .catch( err => console.error(err) )
    }

    render(){
        return(
    <div>
        <h1>Project Name: {this.state.projectName}</h1>
        <h2>Project Slug: {this.state.projectSlug}</h2>

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
                <input type="password" onChange={this.onChange} name="password" className="form-control" id="pwd" />
            </div>
            <div className="form-group">
                <label htmlFor="projectDescription">Project Description:</label>
                <input type="text" onChange={this.onChange} name="projectDescription" className="form-control" id="projectDescription" />
            </div>
            
            <button type="submit" className="btn btn-primary" onClick={this.onSubmit}>Submit</button>
        </form>
    </div>
    )

            }
         
}

export default Form;


