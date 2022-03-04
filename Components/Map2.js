import { useState } from 'react'
import ReactMapGL, { Marker, Popup } from 'react-map-gl'
import getCenter from 'geolib/es/getCenter'
const Map2 = ({ searchResults }) => {
  const [selectLocation, setSelectLocation] = useState({})
  const [viewport, setViewport] = useState({
    width: '100%',
    height: '100%',
  })
  console.log(viewport)
  // transforming search results into latitude and longitude
  const coordinates = searchResults?.map((res) => ({
    longitude: res.long,
    latitude: res.lat,
  }))
  console.log('coords')
  const center = getCenter(coordinates)
  return (
    <ReactMapGL
      className="z-50"
      mapStyle="mapbox://styles/a2dev/cl0bjy5yp001r14tffpv2j77x"
      mapboxAccessToken={process.env.mapbox_key}
      style={{ width: '100%', height: '100%' }}
      initialViewState={{
        longitude: center.longitude,
        latitude: center.latitude,
        zoom: 14,
      }}
      onViewportChange={(viewport) => setViewport(viewport)}
    >
      {searchResults.map((res) => (
        <div key={res.long}>
          <Marker longitude={res.long} latitude={res.lat}>
            <p
              onClick={() => setSelectLocation(res)}
              className="animate-bounce cursor-pointer text-2xl "
              aria-label="push-pin"
              anchor="bottom"
            >
              📍
            </p>
          </Marker>
          {selectLocation.long === res.long ? (
            <Popup
              onClose={() => setSelectLocation({})}
              closeOnClick={true}
              anchor="bottom"
              latitude={res.lat}
              longitude={res.long}
            >
              {res.title}
            </Popup>
          ) : (
            false
          )}
        </div>
      ))}
    </ReactMapGL>
  )
}

export default Map2
