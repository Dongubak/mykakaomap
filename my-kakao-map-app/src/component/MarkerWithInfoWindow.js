import React from 'react';
import { Map, MapMarker } from "react-kakao-maps-sdk";

const MarkerWithInfoWindow = () => {
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
         <MapMarker // 인포윈도우를 생성하고 지도에 표시합니다
         position={{
            // 인포윈도우가 표시될 위치입니다
            lat: 33.450701,
            lng: 126.570667,
         }}
         >
         {/* MapMarker의 자식을 넣어줌으로 해당 자식이 InfoWindow로 만들어지게 합니다 */}
         {/* 인포윈도우에 표출될 내용으로 HTML 문자열이나 React Component가 가능합니다 */}
         <div style={{ padding: "5px", color: "#000" }}>
            Hello World! <br />
            <a
               href="https://map.kakao.com/link/map/Hello World!,33.450701,126.570667"
               style={{ color: "blue" }}
               target="_blank"
               rel="noreferrer"
            >
               큰지도보기
            </a>{" "}
            <a
               href="https://map.kakao.com/link/to/Hello World!,33.450701,126.570667"
               style={{ color: "blue" }}
               target="_blank"
               rel="noreferrer"
            >
               길찾기
            </a>
         </div>
         </MapMarker>
      </Map>
      <h2>원하는 마커에 인포윈도우 생성 및 큰 지도보기, 길찾기</h2>
      <p2>각각은 이동하는 링크에 이름을 지정할 수 있음</p2>
      </>
   )
}


export default MarkerWithInfoWindow;
