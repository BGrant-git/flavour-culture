import React from "react"
import Grid from "@material-ui/core/Grid"

import GalleryComponent from "./galleryComponent"
import LocationsComponent from "./locationsComponent"
import VendorInfo from "./vendorInfo"
import ReviewsComponent from "./googleReviews/reviewsComponent"

const Home = () => {
  return (
    <Grid container>
      <Grid item style={{ margin: "auto" }}>
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
          <ReviewsComponent />
        </Grid>
        <Grid item xs={false} md={1} />
      </Grid>
    </Grid>
  )
}

export default Home
