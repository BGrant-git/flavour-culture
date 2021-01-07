import React from "react"
import styled from "styled-components"
import Grid from "@material-ui/core/Grid"

const Container = styled.div`
  width: 100%;
  background-color: white;
  margin: 20px 0;
`

const ImageContainer = styled.div`
  display: flex;
  height: 100%;

  @media (max-width: 960px) {
    justify-content: center;
  }
`

const StoryImage = styled.img`
  height: auto;
  min-width: 400px;

  @media (max-width: 960px) {
    width: 90%;
    height: auto;
  }
`

const TextContainer = styled(Grid)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  padding: 20px;
  margin: auto;
  background-color: white;

  @media (max-width: 960px) {
    text-align: center;
    padding-top: 20px;
  }
`

const StoryComponentRight = props => {
  return (
    <Container>
      <Grid container>
        <TextContainer item sm={12} md={8}>
          <p style={{ paddingBottom: 10 }}>{props.text1}</p>
          <p>{props.text2}</p>
        </TextContainer>
        <Grid item sm={12} md={4}>
          <ImageContainer>
            <StoryImage src={props.img} alt="" />
          </ImageContainer>
        </Grid>
      </Grid>
    </Container>
  )
}

export default StoryComponentRight
