import React from "react"
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api"

const MapComponent = ({ mapStyles, mapView }) => {
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

  return (
    <LoadScript googleMapsApiKey={process.env.GATSBY_GOOGLE_API_KEY}>
      <GoogleMap
        mapContainerStyle={mapStyles}
        zoom={mapView.zoom.z}
        center={mapView.loc}
        clickableIcons={false}
      >
        {markerLocations[0].map((item, i) => (
          <div key={i}>
            <Marker position={item} label={item.loc} />
          </div>
        ))}
      </GoogleMap>
    </LoadScript>
  )
}

export default React.memo(MapComponent)
