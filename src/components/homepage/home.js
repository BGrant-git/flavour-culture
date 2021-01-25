import React from "react"
import Grid from "@material-ui/core/Grid"
import styled from "styled-components"

import GalleryComponent from "./galleryComponent"

// import MyDude from "../../images/home/iconfinder_batman_hero_avatar_comics_4043232.png"

const GalleryContainer = styled.div`
  margin-bottom: 20px;
`

const Home = () => {
  return (
    <Grid container justify="center">
      <Grid item>
        <GalleryContainer>
          <GalleryComponent />
        </GalleryContainer>
      </Grid>
    </Grid>
  )
}

export default Home
