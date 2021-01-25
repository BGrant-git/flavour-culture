import React from "react"
import ImageGallery from "react-image-gallery"
import { useBreakpoint } from "gatsby-plugin-breakpoints"
import styled from "styled-components"

const Caption = styled.p`
  font-size: 25px;
  text-align: right;
`

const GalleryComponent = () => {
  const breakpoints = useBreakpoint()

  const Image0 = () => (
    <div>
      <img
        className="image-gallery-image"
        src={require("../../images/carousel-images/image1.jpg")}
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
      />
      <Caption className="image-gallery-description">
        "Best curry outside of Hounslow mate was on the bog for a fornight"
        <br />
        <strong> - Taylor Swift </strong>
      </Caption>
    </div>
  )

  const images = () =>
    breakpoints.sm
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

  return (
    <ImageGallery
      items={images()}
      showThumbnails={false}
      showFullscreenButton={false}
      autoPlay={true}
      showPlayButton={false}
      showNav={false}
      slideInterval="6000"
      slideDuration="450"
      className="image-gallery-description"
    />
  )
}

export default GalleryComponent
