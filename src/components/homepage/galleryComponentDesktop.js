import React from "react"
import ImageGallery from "react-image-gallery"

const ImageGalleryComponent = () => {
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
    />
  )
}

export default ImageGalleryComponent
