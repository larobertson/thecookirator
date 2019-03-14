import React from 'react';
import ListItem from './ListItem.jsx';
import { CardDeck, Container } from 'react-bootstrap';


class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: '', 
      cookies: []
    }
  }
  
  componentDidUpdate (prevProps) {
    if (this.props.cookies !== prevProps.cookies) {
      console.log('it should rerender now?')
    }
  }
  
  render () {
    return (
      <div>
        <h4> List Component </h4>
        There are { this.props.cookies.length } cookies.
        <CardDeck>
          { this.props.cookies.map((cookie, key) => <ListItem cookie={cookie} key={key}/>)}
        </CardDeck>
      </div>
    )
  }
}

export default List;