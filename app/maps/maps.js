import React, { Component } from "react";
import DeleteBtn from "../../components/DeleteBtn";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import { Input, TextArea, FormBtn } from "../../components/Form";

class Maps extends Component {
  state = {
    maps: [],
    latitude: "",
    longitude: ""
  };

  componentDidMount() {
    this.loadMaps();
  }

  loadMaps = () => {
    API.getMaps()
      .then(res =>
        this.setState({ Maps: res.data, longitude: "", latitude: "" })
      )
      .catch(err => console.log(err));
  };

  deleteBook = id => {
    API.deleteBook(id)
      .then(res => this.loadMaps())
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.latitude && this.state.latitude) {
      API.saveMap({
        latitude: this.state.latitude,
        longitude: this.state.longitude
      })
        .then(res => this.loadMaps())
        .catch(err => console.log(err));
    }
  };

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-6">
            <Jumbotron>
              <h1>What Maps Should I Read?</h1>
            </Jumbotron>
            <form>
              <Input
                value={this.state.latitude}
                onChange={this.handleInputChange}
                name="cc"
                placeholder="Axx"
              />
              <TextArea
                value={this.state.longitude}
                onChange={this.handleInputChange}
                name="xx"
                placeholder="xx"
              />
              <FormBtn
                disabled={!(this.state.author && this.state.title)}
                onClick={this.handleFormSubmit}
              >
                Submit Book
              </FormBtn>
            </form>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Maps;
