import React from "react"
import ImageGallery from "react-image-gallery"

import image1 from "../../../content/gallery/Indian/3.jpg"
import image2 from "../../../content/gallery/Indian/4.jpg"
import image3 from "../../../content/gallery/Brathaus/PXL_20201125_124046901.PORTRAIT~2.jpg"

const GalleryComponentDesktop = () => {
  const images = [
    {
      original: require("../../../content/gallery/Indian/3.jpg"),
      thumbnail: "",
    },
    {
      original: require("../../../content/gallery/Indian/4.jpg"),
      thumbnail: "",
    },
    {
      original: require("../../../content/gallery/Brathaus/PXL_20201125_124046901.PORTRAIT~2.jpg"),
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
      slideInterval="5000"
    />
  )
}

export default GalleryComponentDesktop
