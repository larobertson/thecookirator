import React from 'react';
import ReactDOM from 'react-dom';
import { Card, Elevation } from "@blueprintjs/core";
import { Container, Row, Col } from 'react-bootstrap';
import Input from './components/Input.jsx';
import List from './components/List.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      items: []
    }
  }

  componentDidMount() {
    
  }

  render () {
    return (
    <div>
      <h1>Hello Cookies</h1>
      <List items={this.state.items}/>
      <div>
      <Container>
        <Row className="justify-content-md-center">
          <Col xs={6}>
            <Card interactive={false} elevation={Elevation.THREE}>
              <Input />
            </Card>
          </Col>
        </Row>
      </Container>;
      </div>

    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));