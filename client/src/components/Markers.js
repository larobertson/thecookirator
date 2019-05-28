import React from "react";
import Axios from 'axios';
import { Marker } from "react-google-maps";

class CookieMarker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lat: 30.267153,
      lng: -97.7430608
    }
  }
  //pass down props with the lat and lng for each cookie item
  componentDidMount() {
    let addressQ = (this.props.cookie.address).split(' ').join('+')
    Axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${addressQ}&key=AIzaSyCIoziGSeUQ7GQO6e7BAEbBPgnk95KHGEI`)
    .then((results) => {
      let lat = results.data.results[0].geometry.location.lat;
      let lng = results.data.results[0].geometry.location.lng;
      this.setState({
        lat: lat,
        lng: lng
      })
    })
    .catch((err) => console.log('this is what we err', err))
  }

  render(){
    return(
        <Marker
          position={ { lat: this.state.lat, lng: this.state.lng } } 
        />
    );
  }
};

export default CookieMarker;
