import React from 'react'
import { Path } from 'leaflet'
import '../styles/clear.scss'

export default function Clear({ map }: { map: L.Map | undefined }) {
  function clearMap() {
    if (map) {
      map.eachLayer((layer) => {
        if (layer instanceof Path) {
          map.removeLayer(layer)
        }
      })
    }
  }
  return (
    <button className="clear__wrapper" onClick={() => clearMap()}>
      Clear
    </button>
  )
}
