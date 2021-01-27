import React from "react"
import Grid from "@material-ui/core/Grid"

import GalleryComponent from "./galleryComponent"
import LocationsComponent from "./locationsComponent"
import VendorInfo from "./vendorInfo"

const Home = () => {
  return (
    <Grid container justify="center">
      <Grid item>
        <GalleryComponent />
      </Grid>
      <Grid item container style={{ margin: "70px 0 30px" }}>
        <Grid item xs={false} md={1} />
        <Grid item xs={12} md={5}>
          <LocationsComponent />
        </Grid>
        <Grid item xs={12} md={5}>
          <VendorInfo />
        </Grid>
        <Grid item xs={false} md={1} />
      </Grid>
    </Grid>
  )
}

export default Home
