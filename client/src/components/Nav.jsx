import React from 'react';
import { Container, Row, Col, Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';

class Navc extends React.Component {
  constructor(props) {
    super(props);
 
    this.state = {
      search: ''
    };
  }

  handleSearchChange(event) {
    this.setState({search: event.target.value});
  }
 
  render() {

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
            <FormControl type="text" placeholder="Search" className="mr-sm-2" onChange={this.handleSearchChange.bind(this)}/>
            <Button variant="outline-light" type="submit" value="Submit" onClick={() => this.props.handleSearch(this.state.search)}>Search</Button>
          </Form>
        </Navbar>
      </div>
    );
  }
}

export default Navc;