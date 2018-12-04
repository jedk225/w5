import React, { Component } from "react"
import { Col, Row, Container } from "../../components/Grid"
import Jumbotron from "../../components/Jumbotron"
import axios from "axios";

class Project extends Component {

  constructor(props){
        super(props)
        this.state = {
            projectName: "Project 1",
            entries: [{name: "entry1",
                        timeStamp: "wrong o'clock",
                        location: "Who knows"},
                    {name: "entry2",
                    timeStamp: "now",
                    location: "ever"}]
        }
    } 

  componentDidMount(){
      try{
       //1 - make an API call w/ axios.
       API.grabData(projectId)
       .then( res => {
           console.log(res)
       })
      }
      catch(err){
          console.error(err)
      } 
      }
  }

  render(){
    console.log(this.props.match.params.id)
    return(
      <Container fluid>
        <Row>
          <Col size="md-12">
          <Jumbotron>{this.state.project}
          </Jumbotron>
          </Col>
        </Row>
        <Entries details={this.state}/>
      </Container>
    )
  }

}

const Entries = (props) =>{ 
    return(
        <Row>
            <Col size="md-12">
                <ol>
                {props.details.entries.length === 0 && <p>"No Entries for this Project"</p>}
                {props.details.entries.map( (entry) => (
                    <Entry
                        key={entry.name}
                        entryName={entry.name}
                        entryTime={entry.timeStamp}
                        entryLocation={entry.location}
                    />
                ))}
                </ol>
            </Col>
        </Row>
    )
}

const Entry = (props) =>{
    return(
        <div>
            <li><h1>{props.entryName}</h1>
            <span />{props.entryTime}
            <span />{props.entryLocation}
            <br />
            {props.entryDescription}
            </li>
        </div>
    )

}

export default  Project 
