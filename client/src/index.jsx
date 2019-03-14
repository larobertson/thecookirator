import React from 'react';
import ReactDOM from 'react-dom';
import { Card, Elevation } from "@blueprintjs/core";
import { Container, Row, Col, Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';
import Axios from 'axios';
import Input from './components/Input.jsx';
import List from './components/List.jsx';

const inputStyles= {
  marginTop: '20px'
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
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

  handleSearch() {
    //allow users to query cookie types
  }

  render () {
    return (
    <div>
      <Navbar bg="info" variant="light" fixed="top">
        <Navbar.Brand href="#home">The Cookierator</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features">Features</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-light">Search</Button>
        </Form>
      </Navbar>
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