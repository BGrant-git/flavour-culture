import React from "react"
import styled from "styled-components"
import Grid from "@material-ui/core/Grid"
import { graphql, useStaticQuery } from "gatsby"

import ReviewItemComponent from "./reviewItemComponent"

const Container = styled.div`
  margin-bottom: 20px;
`

const Title = styled.div`
  text-align: center;
  padding-bottom: 20px;

  @media (max-width: 960px) {
    margin-top: 50px;
  }
`

const ReviewContainer = styled.div`
  width: 75%;
  margin: 10px auto;
  border: 2px solid lightgrey;
  border-radius: 10px;
  min-height: 320px;
  max-width: 400px;
`

const ReviewsComponent = () => {
  const data = useStaticQuery(graphql`
    query ReviewsQuery {
      googlePlacesPlace {
        childrenGooglePlacesReview {
          author_name
          text
          rating
          profile_photo_url
          relative_time_description
          author_url
        }
      }
    }
  `)

  const reviewsData = Object.entries(
    data.googlePlacesPlace.childrenGooglePlacesReview.map(i => i)
  )

  return (
    <Container>
      <Title>
        <h1>
          Check out our{" "}
          <a href="https://maps.app.goo.gl/zAfMGh18ESzfFq4NA">Google</a>{" "}
          reviews...
        </h1>
      </Title>
      <Grid container direction="row">
        <Grid container item justify="center">
          {reviewsData.map((item, i) => (
            <Grid item key={i}>
              <ReviewContainer>
                <ReviewItemComponent
                  userPhotoUrl={item[1].profile_photo_url}
                  authorName={item[1].author_name}
                  userRating={item[1].rating}
                  userText={item[1].text}
                  relativeTime={item[1].relative_time_description}
                  authorUrl={item[1].author_url}
                />
              </ReviewContainer>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Container>
  )
}

export default ReviewsComponent
