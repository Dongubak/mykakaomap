### yarn 설치안될 때

```terminal
brew install yarn --ignore-dependencies
```

물론 homebrew가 정상적으로 설치되어 있어야함

### styled-components임;;


# 6.22 react-kakao-maps-sdk

```terminal
npm install react-kakao-maps-sdk
# or
yarn add react-kakao-maps-sdk
```


## `map` 띄우기
```javascript
import React from 'react';
import {Map, MapMarker} from 'react-kakao-maps-sdk';

const App = () => {
  return (
    <Map
      center={{ lat: 33.5563, lng: 126.79581 }}
      style={{ width: "100%", height: "360px" }}
    >
    </Map>
  )
};

export default App;
```

### Map 컴포넌트 `center`에 객체를 전달해준다.
```javascript
{
  lat : 위도,
  lng : 경도,
}
```

![alt text](image-3.png)
  
## 특정 좌표에 `marker` 붙이기

```javascript
import React from 'react';
import {Map, MapMarker} from 'react-kakao-maps-sdk';

const App = () => {
  return (
    <Map
      center={{ lat: 33.5563, lng: 126.79581 }}
      style={{ width: "100%", height: "360px" }}
    >
      <MapMarker position={{ lat: 33.55635, lng: 126.795841 }}>
        <div style={{color:"#000"}}>Hello World!</div>
      </MapMarker>
    </Map>
  )
};

export default App;
```

### MapMarker Component에 position에 객체 받음
```javascript
{
  lat: '위도',
  lng: '경도',
}
```

### MapMarker컴포넌트 내에 감싸 특정 포지션에 원하는 요소를 추가할 수 있음

```javascript
<MapMarker position={{ lat: 33.55635, lng: 126.795841 }}>
  <div style={{color:"#000"}}>Hello World!</div>
</MapMarker>
```

![alt text](image-4.png)






### `App.js` 전체 코드
```jsx
import React, { useEffect, useRef } from 'react';
import './App.css';

function App() {
  const mapContainer = useRef(null);

  useEffect(() => {
    // Load the Kakao Map script
    const script = document.createElement('script');
    script.async = true;
    script.src = "//dapi.kakao.com/v2/maps/sdk.js?appkey=YOUR_APP_KEY&autoload=false";
    document.head.appendChild(script);

    script.onload = () => {
      window.kakao.maps.load(() => {
        const container = mapContainer.current;
        const options = {
          center: new window.kakao.maps.LatLng(33.450701, 126.570667),
          level: 3,
        };
        new window.kakao.maps.Map(container, options);
      });
    };

    return () => {
      // Clean up script when component unmounts
      script.remove();
    };
  }, []);

  return (
    <div className="App">
      <h1>Kakao Map Example</h1>
      <div
        ref={mapContainer}
        style={{ width: '100%', height: '500px' }}
      ></div>
    </div>
  );
}

export default App;
```

### 코드 설명

1. **리액트 및 CSS 파일 임포트**:
   ```jsx
   import React, { useEffect, useRef } from 'react';
   import './App.css';
   ```
   - React 라이브러리에서 `useEffect`와 `useRef` 훅을 임포트합니다.
   - 스타일링을 위한 CSS 파일을 임포트합니다.

2. **`App` 컴포넌트 정의**:
   ```jsx
   function App() {
     const mapContainer = useRef(null);
   ```
   - `App` 함수형 컴포넌트를 정의합니다.
   - `useRef` 훅을 사용하여 `mapContainer`라는 참조 객체를 생성합니다. 이 참조 객체는 이후에 맵을 렌더링할 `div` 요소를 참조하게 됩니다.

3. **카카오 맵 스크립트 로드 및 초기화**:
   ```jsx
   useEffect(() => {
     const script = document.createElement('script');
     script.async = true;
     script.src = "//dapi.kakao.com/v2/maps/sdk.js?appkey=YOUR_APP_KEY&autoload=false";
     document.head.appendChild(script);

     script.onload = () => {
       window.kakao.maps.load(() => {
         const container = mapContainer.current;
         const options = {
           center: new window.kakao.maps.LatLng(33.450701, 126.570667),
           level: 3,
         };
         new window.kakao.maps.Map(container, options);
       });
     };

     return () => {
       script.remove();
     };
   }, []);
   ```
   - `useEffect` 훅을 사용하여 컴포넌트가 처음 렌더링될 때 카카오 맵 스크립트를 동적으로 로드합니다.
   - `script` 태그를 생성하여 카카오 맵 API를 로드할 URL을 지정합니다.
   - 스크립트 로드가 완료되면 `onload` 이벤트 핸들러가 호출됩니다.
   - `window.kakao.maps.load` 메서드를 사용하여 맵을 초기화합니다.
     - `mapContainer.current`를 통해 맵이 렌더링될 `div` 요소를 참조합니다.
     - `options` 객체를 사용하여 맵의 초기 중심 위치와 줌 레벨을 설정합니다.
     - `new window.kakao.maps.Map` 생성자를 사용하여 맵을 초기화합니다.
   - `useEffect`의 클린업 함수에서 스크립트를 제거합니다.

4. **JSX 반환 및 맵 컨테이너 설정**:
   ```jsx
   return (
     <div className="App">
       <h1>Kakao Map Example</h1>
       <div
         ref={mapContainer}
         style={{ width: '100%', height: '500px' }}
       ></div>
     </div>
   );
   ```
   - `return` 문에서 JSX를 반환합니다.
   - `mapContainer` 참조를 `div` 요소에 할당하여 이 요소가 맵을 렌더링할 컨테이너가 되도록 합니다.
   - 스타일 속성을 사용하여 `div` 요소의 너비와 높이를 설정합니다.

### 요약
- **스크립트 로드**: 카카오 맵 API 스크립트를 동적으로 로드합니다.
- **맵 초기화**: 스크립트가 로드된 후, 맵을 초기 위치와 줌 레벨로 초기화합니다.
- **참조 사용**: `useRef` 훅을 사용하여 맵 컨테이너를 참조합니다.
- **클린업**: `useEffect`의 클린업 함수를 사용하여 스크립트를 제거합니다.

이 코드를 사용하여 초기 위치를 설정한 카카오 맵을 간단하게 출력할 수 있습니다. `YOUR_APP_KEY`를 실제 카카오 맵 API 키로 교체하여 사용하면 됩니다.



맞습니다. 리액트에서는 스크립트가 로드되는 시간과 컴포넌트가 렌더링되는 시간이 일치하지 않을 수 있기 때문에, 스크립트가 완전히 로드된 후에 초기화 작업을 수행해야 합니다. 이 때문에 `onload` 핸들러를 사용하여 스크립트가 로드된 후에 카카오맵을 초기화하는 코드를 실행하게 됩니다.

### 바닐라 자바스크립트와 리액트의 차이점

#### 바닐라 자바스크립트
바닐라 자바스크립트에서는 HTML 파일에서 스크립트 태그를 직접 작성하고, 이 스크립트 태그가 HTML 파일에 포함되어 있기 때문에 스크립트가 로드된 후에 바로 실행됩니다.

```html
<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8"/>
	<title>Kakao 지도 시작하기</title>
</head>
<body>
	<div id="map" style="width:500px;height:400px;"></div>
	<script type="text/javascript" src="//dapi.kakao.com/v2/maps/sdk.js?appkey=YOUR_APP_KEY"></script>
	<script>
		var container = document.getElementById('map');
		var options = {
			center: new kakao.maps.LatLng(33.450701, 126.570667),
			level: 3
		};

		var map = new kakao.maps.Map(container, options);
	</script>
</body>
</html>
```

#### 리액트
리액트에서는 컴포넌트가 렌더링될 때마다 라이프사이클이 존재하며, 스크립트 로드는 비동기로 처리됩니다. 따라서 스크립트가 완전히 로드되기 전에는 `kakao` 객체가 존재하지 않을 수 있습니다. 이를 해결하기 위해 `onload` 핸들러를 사용하여 스크립트가 로드된 후에 코드를 실행합니다.

```jsx
import React, { useEffect, useRef } from 'react';
import './App.css';

function App() {
  const mapContainer = useRef(null);

  useEffect(() => {
    // Load the Kakao Map script
    const script = document.createElement('script');
    script.async = true;
    script.src = "//dapi.kakao.com/v2/maps/sdk.js?appkey=YOUR_APP_KEY&autoload=false";
    document.head.appendChild(script);

    script.onload = () => {
      window.kakao.maps.load(() => {
        const container = mapContainer.current;
        const options = {
          center: new window.kakao.maps.LatLng(33.450701, 126.570667),
          level: 3,
        };
        new window.kakao.maps.Map(container, options);
      });
    };

    return () => {
      // Clean up script when component unmounts
      script.remove();
    };
  }, []);

  return (
    <div className="App">
      <h1>Kakao Map Example</h1>
      <div
        ref={mapContainer}
        style={{ width: '100%', height: '500px' }}
      ></div>
    </div>
  );
}

export default App;
```

### 요약
- **바닐라 자바스크립트**: 스크립트 태그를 직접 HTML에 포함하고, 로드되자마자 실행합니다.
- **리액트**: 스크립트를 비동기로 로드하기 때문에 `onload` 핸들러를 사용하여 스크립트가 완전히 로드된 후에 초기화 코드를 실행합니다.




### 리액트의 `useRef` 훅과 DOM 접근

`useRef` 훅은 자바스크립트 객체를 반환하며, 이 객체는 컴포넌트의 전체 생애주기 동안 유지됩니다. 초기값으로 `null`을 할당할 수 있습니다. 하지만 리액트가 DOM 요소를 렌더링한 후에 `ref` 객체의 `current` 속성이 해당 DOM 요소를 가리키게 됩니다.

### 렌더링 순서

1. **초기 렌더링**:
   - `useRef` 훅이 호출되면 `mapContainer`는 `{ current: null }` 객체를 반환합니다.
   - 리액트는 JSX에서 `<div ref={mapContainer} />`를 렌더링합니다.
   - 이 시점에서는 `mapContainer.current`가 아직 `null`입니다.

2. **컴포넌트가 마운트된 후**:
   - 컴포넌트가 마운트되면 리액트는 `ref`가 설정된 DOM 요소를 `mapContainer.current`에 할당합니다.
   - 이제 `mapContainer.current`는 해당 `<div>` 요소를 가리킵니다.

3. **스크립트 로드 후**:
   - 스크립트가 로드되고 `onload` 핸들러가 실행됩니다.
   - 이 시점에서 `mapContainer.current`는 실제 DOM 요소를 가리키고 있으므로, `new window.kakao.maps.Map(container, options)`에서 `container`는 `null`이 아닌 해당 DOM 요소가 됩니다.

### 예제 코드 설명

```jsx
import React, { useEffect, useRef } from 'react';
import './App.css';

function App() {
  const mapContainer = useRef(null); // 지도 컨테이너에 대한 참조
  const mapInstance = useRef(null); // 맵 객체를 저장할 참조

  useEffect(() => {
    // 카카오 맵 스크립트 로드
    const script = document.createElement('script');
    script.async = true;
    script.src = "//dapi.kakao.com/v2/maps/sdk.js?appkey=YOUR_APP_KEY&autoload=false";
    document.head.appendChild(script);

    script.onload = () => {
      window.kakao.maps.load(() => {
        const container = mapContainer.current;
        const options = {
          center: new window.kakao.maps.LatLng(33.450701, 126.570667), // 지도의 중심좌표
          level: 3, // 지도의 확대 레벨
        };
        mapInstance.current = new window.kakao.maps.Map(container, options); // 지도 생성 및 객체 저장
      });
    };

    return () => {
      script.remove();
    };
  }, []);

  // 지도 중심 이동 함수
  const setCenter = () => {
    if (mapInstance.current) {
      const moveLatLon = new window.kakao.maps.LatLng(33.452613, 126.570888);
      mapInstance.current.setCenter(moveLatLon);
    }
  };

  // 지도 중심 부드럽게 이동 함수
  const panTo = () => {
    if (mapInstance.current) {
      const moveLatLon = new window.kakao.maps.LatLng(33.450580, 126.574942);
      mapInstance.current.panTo(moveLatLon);
    }
  };

  return (
    <div className="App">
      <h1>Kakao Map Example</h1>
      <div ref={mapContainer} style={{ width: '100%', height: '500px' }}></div>
      <button onClick={setCenter}>중심 이동</button>
      <button onClick={panTo}>부드럽게 이동</button>
    </div>
  );
}

export default App;
```

### 요약

- `useRef` 훅으로 생성된 `mapContainer`는 `{ current: null }` 형태로 초기화됩니다.
- 리액트가 컴포넌트를 마운트한 후, `mapContainer.current`는 실제 `<div>` DOM 요소를 가리킵니다.
- 카카오 맵 스크립트가 로드되고 `onload` 핸들러가 호출되면, 이 시점에서 `mapContainer.current`는 이미 초기화된 상태입니다.
- 따라서 `new window.kakao.maps.Map(mapContainer.current, options)`는 `null`이 아닌 실제 DOM 요소를 사용하여 맵 객체를 생성하게 됩니다.

이렇게 하면 맵이 올바르게 초기화되고 렌더링됩니다.