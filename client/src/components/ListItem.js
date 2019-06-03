import React from 'react';
import { Card } from 'react-bootstrap';
import StarRatingComponent from 'react-star-rating-component';




const ListItem = (props) => (
  <div>
    <Card border="info" text="black" style={{ width: '20rem', marginTop: '10px', marginBottom: '10px' }}>
    <Card.Header className="bg-info">
      <Card.Title>{props.cookie.type}</Card.Title>
    </Card.Header>
    <Card.Body style={{ height: '12rem' }}>
    <StarRatingComponent 
          name="rating" 
          starCount={10}
          value={props.cookie.rating}
        />
      <Card.Title>{props.cookie.location}</Card.Title>
      <Card.Text>
        {props.cookie.description}
      </Card.Text>
    </Card.Body>
  </Card>
  </div>
)

export default ListItem;