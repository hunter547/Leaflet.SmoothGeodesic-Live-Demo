import React, { useEffect, useState } from 'react'
import { MapContainer, TileLayer } from 'react-leaflet'
import { getPathOptions } from '../utils'
import '../styles/map.scss'
import L from 'leaflet'
import '../smooth.geodesic'
export default function Map() {
  const [map, setMap] = useState<L.Map | undefined>()

  useEffect(() => {
    if (map) {
      const sourceToDestandColorArray = [
        {
          sourceLat: 39.828175,
          sourceLong: -98.5795,
          destLat: 27,
          destLong: 30,
          color: 'teal'
        },
        {
          sourceLat: 60,
          sourceLong: 100,
          destLat: 40,
          destLong: -4,
          color: 'green'
        },
        {
          sourceLat: 24,
          sourceLong: -76,
          destLat: 31,
          destLong: 36,
          color: 'orange'
        },
        {
          sourceLat: 64,
          sourceLong: 26,
          destLat: 28,
          destLong: 84,
          color: 'darkslateblue'
        }
      ]
      sourceToDestandColorArray.forEach(
        ({ sourceLat, sourceLong, destLat, destLong, color }, i) => {
          const pathOptions = getPathOptions(color, i * 3000)
          L?.smoothGeodesic(
            [sourceLat, sourceLong],
            [destLat, destLong],
            5,
            pathOptions
          ).addTo(map)
        }
      )
    }
  }, [map])
  if (typeof window !== undefined) {
    return (
      <MapContainer
        className="map__wrapper"
        center={[0, 0]}
        zoom={2}
        whenCreated={(map: L.Map | undefined) => setMap(map)}
      >
        <TileLayer
          url="https://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}{r}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
        />
      </MapContainer>
    )
  }
  return null
}
