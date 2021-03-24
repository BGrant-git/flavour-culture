import React from "react"
import StarIcon from "@material-ui/icons/Star"

const RatingsComponent = props => {
  return (
    <>
      {props.userRating === 1 ? (
        <StarIcon />
      ) : props.userRating === 2 ? (
        <>
          <StarIcon />
          <StarIcon />
        </>
      ) : props.userRating === 3 ? (
        <>
          <StarIcon />
          <StarIcon />
          <StarIcon />
        </>
      ) : props.userRating === 4 ? (
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
