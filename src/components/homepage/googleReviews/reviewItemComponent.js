import React from "react"
import styled from "styled-components"

import RatingsComponent from "./ratingsComponent"

import googleIcon from "../../../images/home/Google_'G'_Logo.svg.webp"

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  text-align: center;
  font-family: Roboto;
  height: 100%;
`

const UserImg = styled.img`
  padding: 20px 0;
  width: 80px;
`

const AuthorName = styled.h2`
  font-size: 28px;
`

const UserRating = styled.div`
  padding: 5px 0;
  color: gold;
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
          <GoogleIconStyles src={googleIcon} alt="" />
          <p>{props.relativeTime}</p>
        </RelativeTime>
      </Container>
    </a>
  )
}

export default ReviewItemComponent
