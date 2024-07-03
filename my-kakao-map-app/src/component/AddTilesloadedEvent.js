import React, { useState } from 'react';
import { Map, MapMarker } from 'react-kakao-maps-sdk';

const AddTilesloadedEvent = () => {
   const [position, setPosition] = useState()
   return (
      <>
         <Map // 지도를 표시할 Container
         center={{
            // 지도의 중심좌표
            lat: 35.94204406035107,
            lng: 126.68093675328618,
         }}
         style={{
            width: "100%",
            height: "450px",
         }}
         level={3} // 지도의 확대 레벨
         onTileLoaded={(map) => setPosition({
            lat: map.getCenter().getLat(),
            lng: map.getCenter().getLng(),
         })}
         >
         {!!position && <MapMarker position={position} />}
         </Map>

         <h2>로딩이 끝난 뒤에 화면 중앙에 마커 표시하기</h2>
      </>
   )
}

export default AddTilesloadedEvent;