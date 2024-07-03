import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Map1 from './component/Map1';
import Map2 from './component/Map2';
import BasicMap from './component/BasicMap';
import MoveMap from './component/MoveMap';
import ChangeLevel from './component/ChangeLevel';
import MapInfo from './component/MapInfo';
import AddMapControl from './component/AddMapControl';
import AddMapCustomControl from './component/AddMapCustomControl';
import DisableMapDragMove from './component/DisableMapDragMove';
import EnableDisableZoomInOut from './component/EnableDisableZoomInOut';
import AddTrafficOverlay from './component/AddTrafficOverlay';
import AddRoadviewOverlay from './component/AddLoadViewOverlay';
import AddTerrainOverlay from './component/AddTerrainOverlay';
import ChangeOverlay1 from './component/ChangeOverlay1';
import ChangeOverlay2 from './component/ChangeOverlay2';
import SetBounds from './component/SetBounds';
import CNav from './component/CNav';
import AddTilesloadedEvent from './component/AddTilesloadedEvent';
import DraggerableMarker from './component/DraggerableMarker';
import MarkerImage from './component/MarkerImage';
import InfoWindow from './component/InfoWindow';
import MarkerWithInfoWindow from './component/MarkerWithInfoWindow';


const App = () => {
  
  return (
    <>
      <Routes>
        <Route path='/' element={<CNav></CNav>}>
          <Route path='/map1' element={<Map1></Map1>}></Route>
          <Route path='/map2' element={<Map2></Map2>}></Route>
          <Route path='/basicMap' element={<BasicMap></BasicMap>}></Route>
          <Route path='/moveMap' element={<MoveMap></MoveMap>}></Route>
          <Route path='/changeLevel' element={<ChangeLevel></ChangeLevel>}></Route>
          <Route path='/mapInfo' element={<MapInfo></MapInfo>}></Route>
          <Route path='/addMapControl' element={<AddMapControl></AddMapControl>}></Route>
          <Route path='/disableMapDragMove' element={<DisableMapDragMove></DisableMapDragMove>}></Route>
          <Route path='/enableDisableZoomInOut' element={<EnableDisableZoomInOut></EnableDisableZoomInOut>}></Route>
          <Route path='/addTrafficOverlay' element={<AddTrafficOverlay></AddTrafficOverlay>}></Route>
          <Route path='/addLoadViewOverlay' element={<AddRoadviewOverlay></AddRoadviewOverlay>}></Route>
          <Route path='/addTerrainOverlay' element={<AddTerrainOverlay></AddTerrainOverlay>}></Route>
          <Route path='/changeOverlay1' element={<ChangeOverlay1></ChangeOverlay1>}></Route>
          <Route path='/changeOverlay2' element={<ChangeOverlay2></ChangeOverlay2>}></Route>
          <Route path='/setBounds' element={<SetBounds></SetBounds>}></Route>
          <Route path='/addTilesloadedEvent' element={<AddTilesloadedEvent></AddTilesloadedEvent>}></Route>
          <Route path='/draggerableMarker' element={<DraggerableMarker></DraggerableMarker>}></Route>
          <Route path='/markerImage' element={<MarkerImage></MarkerImage>}></Route>
          <Route path='/infoWindow' element={<InfoWindow></InfoWindow>}></Route>
          <Route path='/markerWithInfoWindow' element={<MarkerWithInfoWindow></MarkerWithInfoWindow>}></Route>

        </Route>
        {/* <Route path="/addMapCustomControl" element={<AddMapCustomControl></AddMapCustomControl>}></Route> */}
      </Routes>
    </>
    
  )
};

export default App;