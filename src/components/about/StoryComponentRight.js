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
  width: 400px;
  transition: 1s ease-in;
  border-radius: 60px;

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
  font-size: 20px;
  font-family: "Revans";
  text-align: justify;

  @media (max-width: 960px) {
    padding-top: 20px;
  }
`

const Heading = styled.h1`
  padding-top: 10p;

  @media (max-width: 960px) {
    text-align: center;
  }
`

const Text = styled.p`
  padding-bottom: 20px;
`

const Button = styled.button`
  width: 250px;
  padding: 15px;
  margin: 5px;
  align-self: center;
  font-size: 16px;
  cursor: pointer;
  color: white;
  background-image: linear-gradient(to bottom right, red, #8b0000);
  border-radius: 5px;

  :hover {
    background-image: linear-gradient(to bottom right, #8b0000, red);
  }
`

const StoryComponentRight = props => {
  return (
    <Container>
      <Grid container>
        <TextContainer item sm={12} md={8}>
          <Heading>{props.heading}</Heading>
          <Text>{props.text1}</Text>
          <Text>{props.text2}</Text>
          <Text>{props.text3}</Text>
          <Button>Make a booking</Button>
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
