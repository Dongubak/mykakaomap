import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Map1 from './component/Map1';
import Map2 from './component/Map2';
import BasicMap from './component/BasicMap';
import MoveMap from './component/MoveMap';
import ChangeLevel from './component/ChangeLevel';
import MapInfo from './component/MapInfo';


const App = () => {
  return (
    <>
      <Routes>
        <Route path='/map1' element={<Map1></Map1>}></Route>
        <Route path='/map2' element={<Map2></Map2>}></Route>
        <Route path='/basicMap' element={<BasicMap></BasicMap>}></Route>
        <Route path='/moveMap' element={<MoveMap></MoveMap>}></Route>
        <Route path='/changeLevel' element={<ChangeLevel></ChangeLevel>}></Route>
        <Route path='/mapInfo' element={<MapInfo></MapInfo>}></Route>
      </Routes>
    </>
    
  )
};

export default App;