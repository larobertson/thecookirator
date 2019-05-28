import React from 'react';
import CookieMarker from './Markers';


class ListMarker extends React.Component {
  constructor(props) {
    super(props);
  }
  
  componentDidUpdate (prevProps) {
    if (this.props.cookies !== prevProps.cookies) {
    }
  }
  
  render () {
    return (
      <div>
          { this.props.cookies.map((cookie, key) => <CookieMarker cookie={cookie} key={key}/>)}
      </div>
    )
  }
}

export default ListMarker;