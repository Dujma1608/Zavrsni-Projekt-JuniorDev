import React, { Component} from "react";
import { Map, GoogleApiWrapper, Marker, InfoWindow } from "google-maps-react";

const mapStyles = {
  width: "1000px",
  height: "400px",
};

export class MapContainer extends Component {
  render() {
    return (
      <Map
        style={mapStyles}
        google={this.props.google}
        zoom={16}
        initialCenter={{
          lat: 43.5046136,
          lng: 16.4458843,
        }}
        center={{
          lat: 43.5046136,
          lng: 16.4458843,
        }}
      >
        <Marker
          onClick={this.onMarkerClick}
          position={{ lat: 43.5046136, lng: 16.4458843 }}
        />
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyAp01DwDypzhtSbf1Gkj35vRfB1pIpM9Ak",
})(MapContainer);