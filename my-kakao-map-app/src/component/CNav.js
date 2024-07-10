import React from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

const CNav = () => {
   const navigate = useNavigate();
   const links = [
     'map1', 'map2', 'basicMap', 'moveMap', 'changeLevel', 
     'mapInfo', 'addMapControl', 'disableMapDragMove', 
     'enableDisableZoomInOut', 'addTrafficOverlay', 
     'addLoadViewOverlay', 'addTerrainOverlay', 
     'changeOverlay1', 'changeOverlay2', 'setBounds', 'addTilesloadedEvent',
      'draggerableMarker', 'markerImage', 'infoWindow', 'markerWithInfoWindow','addMarkerClickEvent',
      'addDraggerableMarker', 'gelocationMarker', 'multipleMarkerControl'
   ];
 
   return (
     <div>
       {links.map((link, index) => (
         <button key={index} onClick={() => navigate(`/${link}`)}>
           {link}
         </button>
       ))}

       <Outlet></Outlet>
     </div>
   );
 };

export default CNav;