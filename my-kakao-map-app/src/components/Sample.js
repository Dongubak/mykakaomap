import React, { useState, useEffect } from "react";
import { Map, MapMarker, CustomOverlayMap, useKakaoLoader } from "react-kakao-maps-sdk";

const {kakao} = window;

const Sample = ({keyword}) => {
  const [info, setInfo] = useState()
  const [markers, setMarkers] = useState([])
  const [map, setMap] = useState()

  const [state, setState] = useState({
   center: {
     lat: 33.450701,
     lng: 126.570667,
   },
   errMsg: null,
   isLoading: true,
 })

 useEffect(() => {
   if (navigator.geolocation) {
     // GeoLocation을 이용해서 접속 위치를 얻어옵니다
     navigator.geolocation.getCurrentPosition(
       (position) => {
         setState((prev) => ({
           ...prev,
           center: {
             lat: position.coords.latitude, // 위도
             lng: position.coords.longitude, // 경도
           },
           isLoading: false,
         }))
       },
       (err) => {
         setState((prev) => ({
           ...prev,
           errMsg: err.message,
           isLoading: false,
         }))
       }
     )
   } else {
     // HTML5의 GeoLocation을 사용할 수 없을때 마커 표시 위치와 인포윈도우 내용을 설정합니다
     setState((prev) => ({
       ...prev,
       errMsg: "geolocation을 사용할수 없어요..",
       isLoading: false,
     }))
   }
 }, [])
  
  useEffect(() => {
    if (!map) return;
    const ps = new kakao.maps.services.Places();
    
    const center = new kakao.maps.LatLng(35.942026, 126.6812637); // 군산대 중심
    const radius = 5000; // 5km 반경

    ps.keywordSearch(keyword, (data, status, _pagination) => {
      if (status === kakao.maps.services.Status.OK) {
        const bounds = new kakao.maps.LatLngBounds();
        let markers = [];

        for (let i = 0; i < data.length; i++) {
          markers.push({
            position: {
              lat: data[i].y,
              lng: data[i].x,
            },
            content: data[i].place_name,
          });
          bounds.extend(new kakao.maps.LatLng(data[i].y, data[i].x));
        }
        setMarkers(markers);
        map.setBounds(bounds);
      }
    }, { location: center, radius: radius }); // 추가된 옵션 객체
  }, [map, keyword]);

  return (
    <Map
      center={{
        lat: 37.566826,
        lng: 126.9786567,
      }}
      style={{
        width: "100%",
        height: "700px",
      }}
      level={3}
      onCreate={setMap}
    >
      {markers.map((marker) => (
        <MapMarker
          key={`marker-${marker.content}-${marker.position.lat},${marker.position.lng}`}
          position={marker.position}
          onClick={() => setInfo(marker)}
        >
          {info && info.content === marker.content && (
            <div style={{ padding: "5px", color: "#000" }}>
            {marker.content}<br />
            {/* <h>{marker.position.lat}</h> */}
            <a
               href={`https://map.kakao.com/link/map/${marker.content}!,${marker.position.lat},${marker.position.lng}`}

               style={{ color: "blue" }}
               target="_blank"
               rel="noreferrer"
            >
               큰지도보기
            </a>{" "}
            <a
               href={`https://map.kakao.com/link/to/${marker.content}!,${marker.position.lat},${marker.position.lng}`}
               style={{ color: "blue" }}
               target="_blank"
               rel="noreferrer"
            >
               길찾기
            </a>
         </div>
          )}
          {/* {
            console.log(marker)
          } */}

         
        </MapMarker>
      ))}

   {!state.isLoading && (
           <MapMarker position={state.center}>
             <div style={{ padding: "5px", color: "#000" }}>
               {state.errMsg ? state.errMsg : "여기에 계신가요?!"}
             </div>
           </MapMarker>
         )}
    </Map>
  );
};

export default Sample;
