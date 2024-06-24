import { useState } from "react";
import { Map, MapTypeControl, ZoomControl, useKakaoLoader } from "react-kakao-maps-sdk"


const AddMapControl = () => {
  useKakaoLoader()
  const [state, setState] = useState({
      // 지도의 초기 위치
      center: { lat: 37.0614, lng: 127.0569 },
      // 지도 위치 변경시 panto를 이용할지에 대해서 정의
      isPanto: false,
   });

   const [draggable, setDraggable] = useState(true);

   const onClick = () => {
      setDraggable((state) => {
         return !state;
      });
   }

  return (
    <>
      <Map // 지도를 표시할 Container
        id="map"
        center={state.center}
        style={{
          width: "100%",
          height: "350px",
        }}
        level={3} // 지도의 확대 레벨
        draggable={draggable}
      >
        <MapTypeControl position={"TOPRIGHT"} />
        <ZoomControl position={"RIGHT"} />
      </Map>

      <button onClick={onClick}>지도이동막기</button>
    </>
  )
}

export default AddMapControl;