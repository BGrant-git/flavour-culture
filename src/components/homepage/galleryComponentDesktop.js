import React from "react"
import ImageGallery from "react-image-gallery"

import image1 from "../../../content/gallery/Indian/3.jpg"
import image2 from "../../../content/gallery/Indian/4.jpg"
import image3 from "../../../content/gallery/Brathaus/PXL_20201125_124046901.PORTRAIT~2.jpg"

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

export default ImageGalleryComponent
