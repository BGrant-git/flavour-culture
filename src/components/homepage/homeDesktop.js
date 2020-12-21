import React from "react"
import styled from "styled-components"
import ImageGallery from "react-image-gallery"
import Grid from "@material-ui/core/Grid"

import image1 from "../../images/carousel-images/image1.jpg"
import image2 from "../../images/carousel-images/image2.jpg"
import image3 from "../../images/carousel-images/image3.jpg"

const HeroTextCard = styled.div`
  height: 500px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  padding: 60px;
`

const HeroImgCard = styled.div`
  display: flex;
  min-width: 100%;
  max-height: 500px;
  overflow: hidden;
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

const HomeDesktop = () => {
  return (
    <Grid container>
      <Grid item xs={5}>
        <HeroTextCard>
          <h3>AWARD WINNING FOOD</h3>
          <h1>Lorem ipsum dolor sit, amet consectetur.</h1>
          <p>
            Dolore, consectetur? Culpa obcaecati velit magnam esse quod
            aspernatur, eos ut id sunt dicta.
          </p>
        </HeroTextCard>
      </Grid>
      <Grid item xs={7}>
        <HeroImgCard>
          <ImageGalleryComponent />
        </HeroImgCard>
      </Grid>
      <Grid item></Grid>
    </Grid>
  )
}

export default HomeDesktop
