import React, { Component } from "react"
// import API from "../../utils/API"
import { Col, Row, Container } from "../../components/Grid"
import { Link } from "react-router-dom"
import Jumbotron from "../../components/Jumbotron"
import Form from "../../components/Form"


class SetupProject extends Component {

constructor(props) {
    super(props)
    this.state = {
        nameGoesHere: ""
    }
}

render(){
    return(
        <Container fluid>
        <Row>
          <Col size="md-12">
            <Jumbotron bgURL="/images/beach.jpg">
              <Link to={"/setupProject"}>
              <h1>Set up Project!</h1>
              </Link>
            </Jumbotron>
            
          </Col>
        </Row>
        <Row>
        <Col size="md-12">


        <Form updateProjectList={this.props.updateProjectList} />
        <h1>OptLocation: </h1>
        <h2>{this.state.optLocation}</h2>
      </Col>
        </Row>
        </Container>
    )
}
}

export default SetupProject


