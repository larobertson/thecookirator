import React from 'react';
import ReactDOM from 'react-dom';
import { Card, Elevation } from "@blueprintjs/core";
import { Container, Row, Col} from 'react-bootstrap';
import Axios from 'axios';
import Input from './components/Input';
import List from './components/List';
import Navc from './components/Nav';
import Map from './components/Map';
import Paginator from './components/Pagination';

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

  getEm(page) {
    Axios.get(`/cookies/${page}`)
    .then((data) => {
      this.setState({
        cookies: data.data.items,
        count: data.data.count,
        page: data.data.current,
        pageCount: data.data.pages
      })
    })
    .catch((err) => console.log('something went wrong', err))
  }

  componentDidMount() {
    this.getEm(this.state.page)
  }

  handleInput(formState, cb) {
    Axios.post('/newCookie', formState)
    .then(() => this.setState({
      toggle: !this.state.toggle
    }))
    .catch((err) => console.log(`Axios could not POST: ${err}`))
  }

  handleSearch(searchState) {
    //allow users to query cookie types
    Axios.get('/search', {
      params: {
        search: searchState,
        _page: this.state.page,
        _limit: 10
      }})
    .then((data) => {
      this.setState({
        cookies: data.data.items,
        count: data.data.count,
        page: data.data.current,
        pageCount: data.data.pages
       })
    })
    .catch((err) => console.log('could not perform search', err))
  }

  handlePage(page) {
    this.getEm(page)
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.toggle !== prevState.toggle) {
      this.getEm(this.state.page)
    }
  }

  render () {
    return (
    <div>
      <Navc handleSearch={this.handleSearch.bind(this)} />
      <Container>
        <Row className="justify-content-md-center">
          <Col lg={true}>
            <h1>Hello Cookies</h1>
            <List cookies={this.state.cookies} count={this.state.count} />
          </Col>
        </Row>
      </Container>

      <Row className="justify-content-md-center">
        <Col md="auto">
          <Paginator 
            page={this.state.page}
            pageCount={this.state.pageCount}
            handlePage={this.handlePage.bind(this)}
          />
        </Col>
      </Row>

      <div>
      <Container style={inputStyles}>
        <Row className="justify-content-md-center">
          <Col md="auto">
            <Card interactive={false} elevation={Elevation.THREE}>
              <Map cookies={this.state.cookies} />
            </Card>
          </Col>
          <Col md="auto">
            <Card interactive={false} elevation={Elevation.THREE}>
              <Input handleInput={this.handleInput.bind(this)} />
            </Card>
          </Col>
        </Row>
      </Container>
      </div>

      

    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));