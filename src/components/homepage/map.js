import React from "react"
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api"

const MapComponent = props => {
  return (
    <LoadScript googleMapsApiKey={process.env.GATSBY_GOOGLE_API_KEY}>
      <GoogleMap
        mapContainerStyle={props.mapStyles}
        zoom={props.zoom}
        center={props.center}
      >
        <Marker position={props.center} />
      </GoogleMap>
    </LoadScript>
  )
}

export default React.memo(MapComponent)
