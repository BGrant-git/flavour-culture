import React from "react"
import Grid from "@material-ui/core/Grid"

import GalleryComponent from "./galleryComponent"
import LocationsComponent from "./locationsComponent"
import VendorInfo from "./vendorInfo"
import ShopBanner from "./shopBanner"

const Home = () => {
  return (
    <Grid container>
      <Grid item>
        <GalleryComponent />
      </Grid>
      <Grid item container style={{ margin: "70px 0 0" }}>
        <Grid item xs={false} md={1} />
        <Grid item xs={12} md={5}>
          <LocationsComponent />
        </Grid>
        <Grid item xs={12} md={5}>
          <VendorInfo />
        </Grid>
        <Grid item xs={false} md={1} />
      </Grid>
      <Grid item container>
        <Grid item xs={false} md={1} />
        <Grid item xs={12} md={10}>
          <ShopBanner />
        </Grid>

        <Grid item xs={false} md={1} />
      </Grid>
    </Grid>
  )
}

export default Home
