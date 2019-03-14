import React from 'react';
import ListItem from './ListItem.jsx';
import { CardDeck, Container } from 'react-bootstrap';


const List = (props) => (
  <div>
    <h4> List Component </h4>
    There are { props.cookies.length } cookies.
    <CardDeck>
      { props.cookies.map((cookie, key) => <ListItem cookie={cookie} key={key}/>)}
    </CardDeck>
  </div>
)

export default List;