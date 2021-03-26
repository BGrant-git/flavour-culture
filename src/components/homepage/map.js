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
      {
        lat: 51.413216370457675,
        lng: -0.183425847287169,
        loc: "C",
      },
    ],
  ]

  const mapCenter = { lat: 51.47088816497439, lng: -0.2521988042378051 }

  return (
    <LoadScript googleMapsApiKey={process.env.GATSBY_GOOGLE_API_KEY}>
      <GoogleMap
        mapContainerStyle={props.mapStyles}
        zoom={11}
        center={mapCenter}
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
