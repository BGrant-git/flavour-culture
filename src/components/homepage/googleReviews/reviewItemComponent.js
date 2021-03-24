import React from "react"
import styled from "styled-components"

import RatingsComponent from "./ratingsComponent"

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 20px;
  text-align: center;
  font-family: Roboto;
`

const UserImg = styled.img`
  padding: 20px 0;
  width: 85px;
`

const AuthorName = styled.h2`
  font-size: 28px;
`

const UserRating = styled.div`
  padding: 5px 0;
  color: yellow;
`

const UserText = styled.p`
  font-size: 18px;
`

const RelativeTime = styled.div`
  padding: 20px 0 10px;
  display: inherit;
  flex-direction: row;
  align-items: center;
  color: grey;
`

const GoogleIconStyles = styled.img`
  height: 35px;
  padding-right: 10px;
`

const ReviewItemComponent = props => {
  return (
    <a href={props.authorUrl}>
      <Container>
        <UserImg src={props.userPhotoUrl} alt="" />
        <AuthorName>{props.authorName}</AuthorName>
        <UserRating>
          <RatingsComponent userRating={props.userRating} />
        </UserRating>
        <UserText>{props.userText}</UserText>
        <RelativeTime>
          <GoogleIconStyles
            src={require("../../../images/home/Google_'G'_Logo.svg.webp")}
            alt=""
          />
          <p>{props.relativeTime}</p>
        </RelativeTime>
      </Container>
    </a>
  )
}

export default ReviewItemComponent
