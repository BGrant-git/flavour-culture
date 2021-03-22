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
    <div>
      <img
        className="image-gallery-image"
        src={require("../../images/home/carousel/mob/indian.jpg")}
        alt=""
      />
      <Caption className="image-gallery-description">
        <AnchorLinkStyle to="/vendors#NaanStop">Naan Stop</AnchorLinkStyle>
      </Caption>
    </div>
  )
  const Image1 = () => (
    <div>
      <img
        className="image-gallery-image"
        src={require("../../images/home/carousel/mob/indian2.jpg")}
        alt=""
      />
      <Caption className="image-gallery-description">
        <AnchorLinkStyle to="/vendors#NaanStop">Naan Stop</AnchorLinkStyle>
      </Caption>
    </div>
  )
  const Image2 = () => (
    <div>
      <img
        className="image-gallery-image"
        src={require("../../images/home/carousel/mob/jondan.jpg")}
        alt=""
      />
    </div>
  )
  const Image3 = () => (
    <div>
      <img
        className="image-gallery-image"
        src={require("../../images/home/carousel/mob/sausage.jpg")}
        alt=""
      />
      <Caption className="image-gallery-description">
        <AnchorLinkStyle to="/vendors#BRATHAUS">BRATHAUS</AnchorLinkStyle>
      </Caption>
    </div>
  )
  const Image4 = () => (
    <div>
      <img
        className="image-gallery-image"
        src={require("../../images/home/carousel/desk/sausage-wide.jpg")}
        alt=""
      />
      <Caption className="image-gallery-description">
        <AnchorLinkStyle to="/vendors#BRATHAUS">BRATHAUS</AnchorLinkStyle>
      </Caption>
    </div>
  )
  const Image5 = () => (
    <div>
      <img
        className="image-gallery-image"
        src={require("../../images/home/carousel/desk/indian1-wide.jpg")}
        alt=""
      />
      <Caption className="image-gallery-description">
        <AnchorLinkStyle to="/vendors#NaanStop">Naan Stop</AnchorLinkStyle>
      </Caption>
    </div>
  )
  const Image6 = () => (
    <div>
      <img
        className="image-gallery-image"
        src={require("../../images/home/carousel/desk/indian2-wide.jpg")}
        alt=""
      />
      <Caption className="image-gallery-description">
        <AnchorLinkStyle to="/vendors#NaanStop">Naan Stop</AnchorLinkStyle>
      </Caption>
    </div>
  )
  const Image7 = () => (
    <div>
      <img
        className="image-gallery-image"
        src={require("../../images/home/carousel/desk/jondan-wide.jpg")}
        alt=""
      />
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
          {
            original: "",
            thumbnail: "",
            renderItem: Image7,
          },
        ]

  const randomIndex = Math.floor(Math.random() * 3)

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
