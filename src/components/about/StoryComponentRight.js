import React from "react"
import styled from "styled-components"
import Grid from "@material-ui/core/Grid"

const Container = styled.div`
  width: 100%;
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
  transition: 1s ease-in;

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
  font-size: 19px;

  @media (max-width: 960px) {
    text-align: center;
    padding-top: 20px;
  }
`

const Heading = styled.h1`
  padding-bottom: 20px;
`

const Text = styled.p`
  padding: 5px 0;
`

const Button = styled.button`
  width: 300px;
  padding: 15px;
  margin: 5px;
  align-self: center;
  font-size: 16px;
  cursor: pointer;
  color: white;
  background-image: linear-gradient(to bottom right, red, #8b0000);

  :hover {
    background-image: linear-gradient(to bottom right, #8b0000, red);
  }
`

const StoryComponentRight = props => {
  return (
    <Container>
      <Grid container>
        <TextContainer item sm={12} md={8}>
          <Heading>Heading</Heading>
          <Text>{props.text1}</Text>
          <Text>{props.text2}</Text>
          <Text>{props.text3}</Text>
          <Button>Make a booking now!</Button>
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
