import { Map, MapTypeId, useKakaoLoader } from "react-kakao-maps-sdk"

const AddRoadviewOverlay = () => {
  useKakaoLoader()

  return (
    <Map // 지도를 표시할 Container
      id="map"
      center={{
        // 지도의 중심좌표
        lat: 33.450701,
        lng: 126.570667,
      }}
      style={{
        // 지도의 크기
        width: "100%",
        height: "350px",
      }}
      level={3} // 지도의 확대 레벨
    >
      {/* 지도에 로드뷰 정보가 있는 도로를 표시하도록 지도타입을 추가합니다 */}
      <MapTypeId type={"ROADVIEW"} />
    </Map>
  )
}

export default AddRoadviewOverlay;