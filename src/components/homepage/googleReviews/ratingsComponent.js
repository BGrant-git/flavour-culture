import React from "react"
import StarIcon from "@material-ui/icons/Star"

const RatingsComponent = ({ userRating }) => {
  return (
    <>
      {userRating === 1 ? (
        <StarIcon />
      ) : userRating === 2 ? (
        <>
          <StarIcon />
          <StarIcon />
        </>
      ) : userRating === 3 ? (
        <>
          <StarIcon />
          <StarIcon />
          <StarIcon />
        </>
      ) : userRating === 4 ? (
        <>
          <StarIcon />
          <StarIcon />
          <StarIcon />
          <StarIcon />
        </>
      ) : (
        <>
          <StarIcon />
          <StarIcon />
          <StarIcon />
          <StarIcon />
          <StarIcon />
        </>
      )}
    </>
  )
}

export default RatingsComponent
