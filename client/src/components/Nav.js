import React from 'react';
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';

const cookieImg = {
  width: '30px',
  height: '30px',
  marginRight: '20px'
}

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
          <Navbar.Brand href="http://localhost:3000">
          <img src="http://cdn.onlinewebfonts.com/svg/img_568622.png" style={cookieImg}/>
          The Cookierator
          </Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="http://localhost:3000">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" onChange={this.handleSearchChange.bind(this)}/>
            <Button variant="outline-light" type="submit" value="Submit" onClick={(e) => {e.preventDefault()
              this.props.handleSearch(this.state.search)}}>Search</Button>
          </Form>
        </Navbar>
      </div>
    );
  }
}

export default Navc;