import React from "react"
import styled from "styled-components"
import Grid from "@material-ui/core/Grid"
import ImageGallery from "react-image-gallery"

import image1 from "../../images/carousel-images/image1.jpg"
import image2 from "../../images/carousel-images/image2.jpg"
import image3 from "../../images/carousel-images/image3.jpg"

const ImgContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

const PlaceholdImg = styled.img`
  width: 100%;
`

const ImageGalleryComponent = () => {
  const images = [
    {
      original: `${image1}`,
      thumbnail: "",
    },
    {
      original: `${image2}`,
      thumbnail: "",
    },
    {
      original: `${image3}`,
      thumbnail: "",
    },
  ]

  return (
    <ImageGallery
      items={images}
      showThumbnails={false}
      showFullscreenButton={false}
      autoPlay={true}
      showPlayButton={false}
      showNav={false}
    />
  )
}

const HomeMobile = () => {
  return (
    <Grid container>
      <Grid item xs={12}>
        <ImgContainer>
          <ImageGalleryComponent />
        </ImgContainer>
      </Grid>

      <Grid item xs={12}>
        {" "}
        2
      </Grid>
      <Grid item xs={12}>
        {" "}
        3
      </Grid>
    </Grid>
  )
}

export default HomeMobile
