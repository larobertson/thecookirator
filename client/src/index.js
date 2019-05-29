import React from 'react';
import ReactDOM from 'react-dom';
import { Card, Elevation } from "@blueprintjs/core";
import { Container, Row, Col} from 'react-bootstrap';
import Axios from 'axios';
import Input from './components/Input';
import List from './components/List';
import Navc from './components/Nav';
import Map from './components/Map';

const inputStyles= {
  marginTop: '20px'
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: '', 
      cookies: [],
      toggle: true,
      page: 1,
      pageCount: 1,
      count: 0
    }
  }

  getEm() {
    Axios.get(`/cookies/${this.state.page}`)
    .then((data) => {
      console.log('this is the new data', data)
      this.setState({
        cookies: data.data.items,
        count: data.data.count
      })
    })
    .catch((err) => console.log('something went wrong', err))
  }

  componentDidMount() {
    this.getEm()
  }

  handleInput(formState, cb) {
    console.log('this is the form state', formState)
    Axios.post('/newCookie', formState)
    .then(() => this.setState({
      toggle: !this.state.toggle
    }))
    .catch((err) => console.log(`Axios could not POST: ${err}`))
  }

  handleSearch(searchState, cb) {
    //allow users to query cookie types
    console.log('is this the search state?', searchState)
    Axios.get('/search', {
      params: {
        search: searchState,
        _page: this.state.page,
        _limit: 10
      }})
    .then((data) => {
      console.log('what have we here?', data)
      this.setState({
        cookies: data.data.items
       })
    })
    .catch((err) => console.log('could not perform search', err))
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.toggle !== prevState.toggle) {
      this.getEm()
    }
  }

  render () {
    return (
    <div>
      <Navc handleSearch={this.handleSearch.bind(this)}/>
      <Container>
        <Row className="justify-content-md-center">
          <Col lg={true}>
            <h1>Hello Cookies</h1>
            <List cookies={this.state.cookies} count={this.state.count}/>
          </Col>
        </Row>
      </Container>
      <div>
      <Container style={inputStyles}>
        <Row className="justify-content-md-center">
          <Col md="auto">
            <Card interactive={false} elevation={Elevation.THREE}>
              <Map cookies={this.state.cookies}/>
            </Card>
          </Col>
          <Col md="auto">
            <Card interactive={false} elevation={Elevation.THREE}>
              <Input handleInput={this.handleInput.bind(this)}/>
            </Card>
          </Col>
        </Row>
      </Container>
      </div>

      

    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));