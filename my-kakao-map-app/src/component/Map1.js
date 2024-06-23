import React from 'react';
import {Map, MapMarker} from 'react-kakao-maps-sdk';

const Map1 = () => {
   return(
      <Map
      center={{ lat: 37.0614, lng: 127.0569 }}
      style={{ width: "100%", height: "360px" }}
      >
      <MapMarker position={{ lat: 37.0614, lng: 127.0569 }}>
        <div style={{color:"#000"}}>Hello World!</div>
      </MapMarker>
    </Map>
   )
};

export default Map1;