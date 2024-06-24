import { Map, MapMarker, useKakaoLoader, useMap } from "react-kakao-maps-sdk";
import { useMemo, useState, useEffect } from "react";

const SetBounds = () => {
  useKakaoLoader();
  const [points, setPoints] = useState([
    { lat: 33.452278, lng: 126.567803 },
    { lat: 33.452671, lng: 126.574792 },
    { lat: 33.451744, lng: 126.572441 },
  ]);

  return (
    <>
      <Map
        id="map"
        center={{
          lat: 33.450701,
          lng: 126.570667,
        }}
        style={{
          width: "100%",
          height: "350px",
        }}
        level={3}
      >
        {points.map((point) => (
          <MapMarker
            key={`marker__${point.lat}-${point.lng}`}
            position={point}
          />
        ))}
        <ReSetttingMapBounds points={points} />
      </Map>
    </>
  );
}

const ReSetttingMapBounds = ({ points }) => {
  const map = useMap();
  const bounds = useMemo(() => {
    const bounds = new window.kakao.maps.LatLngBounds();

    points.forEach((point) => {
      bounds.extend(new window.kakao.maps.LatLng(point.lat, point.lng));
    });
    return bounds;
  }, [points]);

  return (
    <p>
      <button onClick={() => map.setBounds(bounds)}>
        지도 범위 재설정 하기
      </button>
    </p>
  );
}

export default SetBounds;
