import React from "react"
import { useMediaQuery } from "@material-ui/core/"

import SectionRight from "./SectionRight"
import SectionLeft from "./SectionLeft"

const buttonChecker = val => {
  if (val) {
    return { val }
  } else {
    return null
  }
}

const ResponsiveSection = ({ content, image, hasButton, hasSocial }) => {
  const matches = useMediaQuery("(max-width: 690px")

  return (
    <>
      {matches ? (
        <SectionLeft
          text={content}
          img={image}
          hasButton={buttonChecker(hasButton)}
          hasSocial={buttonChecker(hasSocial)}
        />
      ) : (
        <SectionRight
          text={content}
          img={image}
          hasButton={buttonChecker(hasButton)}
          hasSocial={buttonChecker(hasSocial)}
        />
      )}
    </>
  )
}

export default ResponsiveSection
