import * as React from "react";
import Map, { Marker } from "react-map-gl";

import carMarker from "../template/images/carMarker.svg";
import "mapbox-gl/dist/mapbox-gl.css";
import Skeleton from "./Skeleton";

function MapboxMap() {
  const [loaded, setLoaded] = React.useState(false);
  return (
    <>
      {loaded ? <div></div> : <Skeleton className="bg-blue-50 py-5 px-6 flex justify-between rounded-lg w-full h-full" width={'100%'} height={'100%'}/>}
      <Map
        initialViewState={{
          longitude: -122.4,
          latitude: 37.8,
          zoom: 16,
        }}
        mapStyle="mapbox://styles/mapbox/streets-v9"
        style={{ borderRadius: "0.5rem" }}
        mapboxAccessToken={import.meta.env.VITE_MAPBOX_TOKEN}
        onLoad={() => {
          setLoaded(true);
        }}
      >
        <Marker longitude={-122.4} latitude={37.8}>
          
        </Marker>
      </Map>
    </>
  );
}

export default MapboxMap;
