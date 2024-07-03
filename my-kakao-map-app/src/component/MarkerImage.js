import React, { useState } from 'react';
import { Map, MapMarker } from 'react-kakao-maps-sdk';

const MarkerImage = () => {
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

            image={{
               src: "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/marker_red.png", // 마커이미지의 주소입니다
               size: {
                 width: 64,
                 height: 69,
               }, // 마커이미지의 크기입니다
               options: {
                 offset: {
                   x: 27,
                   y: 69,
                 }, // 마커이미지의 옵션입니다. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정합니다.
               },
             }}
         />

      </Map>
      <p>{`위도 : ${pos.La}, 경도 : ${pos.Ma}`}</p>
      <h2>마커 이미지 바꿀 수 있음</h2>
   </>
     
   )
}

export default MarkerImage;

