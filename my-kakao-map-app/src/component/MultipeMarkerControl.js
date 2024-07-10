import React, { useState } from 'react';
import { Map, MapMarker } from 'react-kakao-maps-sdk';


const MultipleMarkerControl = () => {
  const [markers, setMarkers] = useState([
    {
      position: {
        lat: 33.450701,
        lng: 126.570667,
      },
    },
    {
      position: {
        lat: 33.451701,
        lng: 126.570667,
      },
    },
    {
      position: {
        lat: 33.459701,
        lng: 126.570667,
      },
    },
  ])

  const [isVisible, setIsVisible] = useState(true)

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
        onClick={(_target, mouseEvent) => {
          setMarkers([
            ...markers,
            {
              position: {
                lat: mouseEvent.latLng.getLat(),
                lng: mouseEvent.latLng.getLng(),
              },
            },
          ])
        }}
      >
        {isVisible &&
          markers.map((marker, index) => (
            <MapMarker
              key={`${marker.position}-${index}`}
              position={marker.position} // 마커를 표시할 위치
            />
          ))}
      </Map>
      <div
        style={{
          display: "flex",
          gap: "10px",
        }}
      >
        <button onClick={() => setIsVisible(false)}>마커 감추기</button>
        <button onClick={() => setIsVisible(true)}>마커 보이기</button>
      </div>
    </>
  )
}

export default MultipleMarkerControl;