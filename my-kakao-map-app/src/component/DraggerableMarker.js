import React, { useRef, useState } from 'react';
import { Map, MapMarker } from 'react-kakao-maps-sdk';

const DraggerableMarker = () => {
   const [pos, setPos] = useState({

   });

   return (
      <>
         <Map // 지도를 표시할 Container
         center={{
            // 지도의 중심좌표
            lat: 33.450701,
            lng: 126.570667,
         }}
         style={{
            // 지도의 크기
            width: "100%",
            height: "450px",
         }}
         level={3} // 지도의 확대 레벨
      >
         <MapMarker // 마커를 생성합니다
            position={{
            // 마커가 표시될 위치입니다
            lat: 33.450701,
            lng: 126.570667,
            }}

            onDragEnd={(map) => {
               setPos({
                  ...map.getPosition()
               })
            }}

            draggable={true} // 마커가 드래그 가능하도록 설정합니다
         />

      </Map>
      <p>{`위도 : ${pos.La}, 경도 : ${pos.Ma}`}</p>
      <h2>마커를 손으로 이동가능하게 함 또한 마커의 위도와 경도를 표현할 수 있음</h2>
   </>
     
   )
}

export default DraggerableMarker;