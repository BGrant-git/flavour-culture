import React from "react"
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api"

const MapComponent = props => {
  const markerLocations = [
    [
      {
        lat: 51.50799771795835,
        lng: -0.27228767069153964,
        loc: "B",
      },

      {
        lat: 51.48258,
        lng: -0.20022,
        loc: "A",
      },
    ],
  ]

  return (
    <LoadScript googleMapsApiKey={process.env.GATSBY_GOOGLE_API_KEY}>
      <GoogleMap
        mapContainerStyle={props.mapStyles}
        zoom={props.zoom}
        center={props.center}
        clickableIcons={false}
      >
        {markerLocations[0].map((item, i) => (
          <Marker key={i} position={item} label={item.loc} />
        ))}
      </GoogleMap>
    </LoadScript>
  )
}

export default React.memo(MapComponent)
