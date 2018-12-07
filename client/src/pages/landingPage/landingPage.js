import React, { Component } from "react"
// import API from "../../utils/API"
import { Col, Row, Container } from "../../components/Grid"
import { Link } from "react-router-dom"
import Jumbotron from "../../components/Jumbotron"
// import { Input, TextArea, FormBtn } from "../../components/Form";
// import { List, ListItem } from "../../components/List"
// import DeleteBtn from "../../components/DeleteBtn"
import './landingPage.css';
class landingPage extends Component {




  render() {
    return (
      <Container fluid>

        <Row>
          <Col size="md-12">
            <Jumbotron bgURL="/images/whale.jpg">
              <Link to={"/setup"}>
                <h1 className="landingPageHeader">Sign Up for W5 project!</h1>
              </Link>
            </Jumbotron>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default landingPage