import React from 'react';
import {Map, CustomOverlayMap, useKakaoLoader} from 'react-kakao-maps-sdk';
import {styled} from 'styled-components';

const Box = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;

   width: 100px;
   height: 100px;

   background-color: white;
   opacity: 0.8;
   border-radius: 10px;

   border: 1px solid rgba(0,0,0, 0.1);
`;



const Map2 = () => {
   return (
      <Map 
      center={{ lat: 37.0614, lng: 127.0569 }}
      style={{ width: "100%", height: "360px" }}
      >
         <CustomOverlayMap
            position={{ lat: 37.0614, lng: 127.0569 }}
         >
            <Box>hello</Box>
         </CustomOverlayMap>   
      </Map>
   )
}

export default Map2;