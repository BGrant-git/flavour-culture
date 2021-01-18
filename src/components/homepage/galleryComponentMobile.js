import React from "react"
import ImageGallery from "react-image-gallery"

import image1 from "../../images/carousel-images/image1.jpg"
import image2 from "../../images/carousel-images/image2.jpg"
import image3 from "../../images/carousel-images/image3.jpg"

const GalleryComponentMobile = () => {
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

export default GalleryComponentMobile
