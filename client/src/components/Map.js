import React, { Component } from 'react';
import { Marker, withGoogleMap, GoogleMap } from 'react-google-maps';
import CookieMarker from './Markers';
import ListMarker from './ListMarker';

class Map extends Component {
  constructor(props) {
    super(props);
  }

   render() {
   const GoogleMapExample = withGoogleMap(props => (
      <GoogleMap
        defaultCenter = { { lat: 30.267153, lng: -97.7430608 } }
        defaultZoom = { 13 }
      >
        <ListMarker cookies={this.props.cookies}/>
      </GoogleMap>
   ));
   return(
      <div>
        <GoogleMapExample
          containerElement={ <div style={{ height: `500px`, width: '500px' }} /> }
          mapElement={ <div style={{ height: `100%` }} /> }
        />
      </div>
   );
   }
};
export default Map;