import React, { Component } from "react"
import { Col, Row, Container } from "../../components/Grid"
import Jumbotron from "../../components/Jumbotron"
import API from "../../utils/API"


class Project extends Component {

  constructor(props){
        super(props)
        this.state = {
            projectName: this.props.match.params.id,
            entries: []
        }
    } 

  componentDidMount(){
      try{
        let ProjectName = this.props.match.params.id
        console.log(ProjectName, "try successful")
        //1 - make an API call w/ axios.
       API.grabData(ProjectName)
       .then( res => {
           console.log("got the response to project.js")
           console.log(res)
           this.setState({entries: res.data})
           
       })
       .then( res => {
           console.log("2nd Then")
           console.log(this.state.entries)
       })
      }
      catch(err){
          console.error(err)
      } 
      }


  render(){
    console.log(this.props.match.params.id)
    let ProjectName = this.props.match.params.id
    return(
      <Container fluid>
        <Row>
          <Col size="md-12">
          <Jumbotron>{ProjectName}
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
            {props.details.entries.length === 0 && <p>"No Entries for this Project"</p>}
            <table className="table">
            <thead>
              <tr>
                <th scope="col">id</th>
                <th scope="col">date</th>
                <th scope="col">location</th>
                <th scope="col">comment</th>
              </tr>
            </thead>
            <tbody>
            {props.details.entries.map( (entry) => (
                <Entry
                    key={entry._id}
                    uniqueName={entry._id}
                    entryName={entry.projectName}
                    entryTime={entry.timeStamp}
                    entryLocation={entry.coordinates[0] + ", " + entry.coordinates[1]}
                    text={entry.text}
                />
            ))}
            </tbody>
          </table>


           
            </Col>
        </Row>
    )
}



const Entry = (props) =>{
    console.log(props.entryTime, "<--entryTime")
    const date = new Date(props.entryTime).toString()
    console.log(date, "<--date")

    return(
        <tr>
            <td>{props.uniqueName}</td>
            <td>{date}</td>
            <td>{props.entryLocation}</td>
            <td>{props.text}</td>
        </tr>
    )

}

export default  Project 
