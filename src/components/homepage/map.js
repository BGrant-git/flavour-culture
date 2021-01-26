import React from "react"
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api"

const API_KEY = process.env.API_KEY

const MapComponent = props => {
  return (
    <LoadScript googleMapsApiKey={API_KEY}>
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
