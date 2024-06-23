import React from 'react';
import { Map, useKakaoLoader } from 'react-kakao-maps-sdk';


const BasicMap = () => {
   useKakaoLoader();

   return (
      <Map // 지도를 표시할 Container
      id="map"
      center={{ lat: 37.0614, lng: 127.0569 }}
      style={{ width: "100%", height: "360px" }}
      level={3} // 지도의 확대 레벨
    />
   )
}

export default BasicMap;