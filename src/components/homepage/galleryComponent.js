import React from "react"
import ImageGallery from "react-image-gallery"
import styled from "styled-components"
import { useMediaQuery } from "@material-ui/core"

const Container = styled.div`
  max-height: 500px;
  overflow: hidden;

  @media (max-width: 720px) {
    height: 400px;
  }
`

const Caption = styled.p`
  font-size: 25px;
  text-align: right;
  border-radius: 0 25px 25px 0;
`

const GalleryComponent = () => {
  const matches = useMediaQuery("(max-width: 600px)")

  const Image0 = () => (
    <div>
      <img
        className="image-gallery-image"
        src={require("../../images/carousel-images/image1.jpg")}
        alt=""
      />
      <Caption className="image-gallery-description">
        "Catering was so good everyone fell asleep after lunch. Gohilton know
        whats up"
        <br />
        <strong> - Barney Gee (Monastery Productions) </strong>
      </Caption>
    </div>
  )
  const Image1 = () => (
    <div>
      <img
        className="image-gallery-image"
        src={require("../../images/carousel-images/image2.jpg")}
        alt=""
      />
      <Caption className="image-gallery-description">
        "These guys make good food. Best sausage that's been in me mouth in all
        of 2020"
        <br />
        <strong> - John Foodman </strong>
      </Caption>
    </div>
  )
  const Image2 = () => (
    <div>
      <img
        className="image-gallery-image"
        src={require("../../images/carousel-images/image3.jpg")}
        alt=""
      />
      <Caption className="image-gallery-description">
        "Best curry outside of Hounslow mate was on the bog for a fornight"
        <br />
        <strong> - Taylor Swift </strong>
      </Caption>
    </div>
  )
  const Image3 = () => (
    <div>
      <img
        className="image-gallery-image"
        src={require("../../images/carousel-images/test.jpg")}
        alt=""
      />
      <Caption className="image-gallery-description">
        "Catering was so good everyone fell asleep after lunch. Gohilton know
        whats up" <br />
        <strong> - Barney Gee (Monastery Productions) </strong>
      </Caption>
    </div>
  )
  const Image4 = () => (
    <div>
      <img
        className="image-gallery-image"
        src={require("../../images/carousel-images/test2.jpg")}
        alt=""
      />
      <Caption className="image-gallery-description">
        "These guys make good food. Best sausage that's been in me mouth in all
        of 2020"
        <br />
        <strong> - John Foodman </strong>
      </Caption>
    </div>
  )
  const Image5 = () => (
    <div>
      <img
        className="image-gallery-image"
        src={require("../../images/carousel-images/test3.jpg")}
        alt=""
      />
      <Caption className="image-gallery-description">
        "Best curry outside of Hounslow mate was on the bog for a fornight"
        <br />
        <strong> - Taylor Swift </strong>
      </Caption>
    </div>
  )

  const images = () =>
    matches
      ? [
          {
            original: "",
            thumbnail: "",
            renderItem: Image0,
          },
          {
            original: "",
            thumbnail: "",
            renderItem: Image1,
          },
          {
            original: "",
            thumbnail: "",
            renderItem: Image2,
          },
        ]
      : [
          {
            original: "",
            thumbnail: "",
            renderItem: Image3,
          },
          {
            original: "",
            thumbnail: "",
            renderItem: Image4,
          },
          {
            original: "",
            thumbnail: "",
            renderItem: Image5,
          },
        ]

  const randomIndex = Math.floor(Math.random() * 3)

  return (
    <Container>
      <ImageGallery
        items={images()}
        startIndex={randomIndex}
        showThumbnails={false}
        showFullscreenButton={false}
        autoPlay={true}
        showPlayButton={false}
        showNav={false}
        slideInterval={5000}
        slideDuration={450}
        className="image-gallery-description"
      />
    </Container>
  )
}

export default GalleryComponent
