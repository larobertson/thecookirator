import React from 'react';
import ListItem from './ListItem';
import { CardDeck, Container } from 'react-bootstrap';


class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      cookies: []
    }
  }
  
  componentDidUpdate (prevProps) {
    if (this.props.cookies !== prevProps.cookies) {
    }
  }
  
  render () {
    return (
      <div>
        There are { this.props.count } cookies.
        <CardDeck>
          { this.props.cookies.map((cookie, key) => <ListItem cookie={cookie} key={key}/>) }
        </CardDeck>
      </div>
    )
  }
}

export default List;