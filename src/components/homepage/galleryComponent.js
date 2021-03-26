import React from "react"
import ImageGallery from "react-image-gallery"
import styled from "styled-components"
import { useMediaQuery } from "@material-ui/core"
import { AnchorLink } from "gatsby-plugin-anchor-links"

const Caption = styled.p`
  text-align: right;
  border-radius: 0 25px 25px 0;

  @media (max-width: 600px) {
    font-size: 100px;
  }
`

const AnchorLinkStyle = styled(AnchorLink)`
  color: white;
  font-size: 45px;
`

const GalleryComponent = () => {
  const matches = useMediaQuery("(max-width: 600px)")

  const Image0 = () => (
    <AnchorLinkStyle to="/vendors#NaanStop">
      <img
        className="image-gallery-image"
        src={require("../../images/home/carousel/mob/indian.jpg")}
        alt=""
      />
      <Caption className="image-gallery-description">Naan Stop</Caption>
    </AnchorLinkStyle>
  )

  const Image1 = () => (
    <AnchorLinkStyle to="/vendors#Flavour-Culture-Catering">
      <img
        className="image-gallery-image"
        src={require("../../images/home/carousel/mob/indian2.jpg")}
        alt=""
      />
      <Caption className="image-gallery-description">
        Flavour Culture Catering
      </Caption>
    </AnchorLinkStyle>
  )

  const Image2 = () => (
    <AnchorLinkStyle to="/vendors#BRATHAUS">
      <img
        className="image-gallery-image"
        src={require("../../images/home/carousel/mob/jondan.jpg")}
        alt=""
      />
      <Caption className="image-gallery-description">BRATHAUS</Caption>
    </AnchorLinkStyle>
  )

  const Image3 = () => (
    <AnchorLinkStyle to="/vendors#BRATHAUS">
      <img
        className="image-gallery-image"
        src={require("../../images/home/carousel/mob/sausage.jpg")}
        alt=""
      />
      <Caption className="image-gallery-description">BRATHAUS</Caption>
    </AnchorLinkStyle>
  )

  const Image4 = () => (
    <AnchorLinkStyle to="/vendors#BRATHAUS">
      <img
        className="image-gallery-image"
        src={require("../../images/home/carousel/desk/sausage-wide.jpg")}
        alt=""
      />
      <Caption className="image-gallery-description">BRATHAUS</Caption>
    </AnchorLinkStyle>
  )

  const Image5 = () => (
    <AnchorLinkStyle to="/vendors#Flavour-Culture-Catering">
      <img
        className="image-gallery-image"
        src={require("../../images/home/carousel/desk/indian1-wide.jpg")}
        alt=""
      />
      <Caption className="image-gallery-description">
        Flavour Culture Catering
      </Caption>
    </AnchorLinkStyle>
  )

  const Image6 = () => (
    <AnchorLinkStyle to="/vendors#NaanStop">
      <img
        className="image-gallery-image"
        src={require("../../images/home/carousel/desk/indian2-wide.jpg")}
        alt=""
      />
      <Caption className="image-gallery-description">Naan Stop</Caption>
    </AnchorLinkStyle>
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
          {
            original: "",
            thumbnail: "",
            renderItem: Image3,
          },
        ]
      : [
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
          {
            original: "",
            thumbnail: "",
            renderItem: Image6,
          },
        ]

  const randomIndex = Math.floor(Math.random() * 4)

  return (
    <div>
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
    </div>
  )
}

export default GalleryComponent
