import React from "react"
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api"

const MapComponent = props => {
  return (
    <LoadScript googleMapsApiKey="">
      <GoogleMap
        mapContainerStyle={props.mapStyles}
        zoom={16}
        center={props.center}
      >
        <Marker position={props.center} />
      </GoogleMap>
    </LoadScript>
  )
}

export default React.memo(MapComponent)
