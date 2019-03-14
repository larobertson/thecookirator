import React from 'react';
import ReactDOM from 'react-dom';
import { Card, Elevation } from "@blueprintjs/core";
import { Container, Row, Col, Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';
import Axios from 'axios';
import Input from './components/Input.jsx';
import List from './components/List.jsx';
import Navc from './components/Nav.jsx'

const inputStyles= {
  marginTop: '20px'
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: '', 
      cookies: []
    }
  }

  componentDidMount() {
    Axios.get('/cookies')
    .then((data) => {
      this.setState({
        cookies: data.data
      })
    })
    .catch((err) => console.log('something went wrong', err))
  }

  handleInput(formState, cb) {
    console.log('this is the form state', formState)
    Axios.post('/newCookie', formState)
    .then(() => console.log('posted successfully!'))
    .catch((err) => console.log(`Axios could not POST: ${err}`))
  }

  handleSearch(searchState, cb) {
    //allow users to query cookie types
    console.log('is this the search state?', searchState)
    Axios.get('/search', {
      params: {
        search: searchState
      }})
    .then((data) => this.setState({
      cookies: data.data
    }))
    .catch((err) => console.log('could not perform search', err))
  }

  render () {
    return (
    <div>
      <Navc handleSearch={this.handleSearch.bind(this)}/>
      <Container>
        <Row className="justify-content-md-center">
          <Col lg={true}>
            <h1>Hello Cookies</h1>
            <List cookies={this.state.cookies}/>
          </Col>
        </Row>
      </Container>
      <div>
      <Container style={inputStyles}>
        <Row className="justify-content-md-center">
          <Col xs={7}>
            <Card interactive={false} elevation={Elevation.THREE}>
              <Input handleInput={this.handleInput.bind(this)}/>
            </Card>
          </Col>
        </Row>
      </Container>;
      </div>

    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));