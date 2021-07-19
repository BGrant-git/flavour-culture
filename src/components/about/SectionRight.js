import React from "react"
import styled from "styled-components"
import Grid from "@material-ui/core/Grid"

import SocialComponent from "./SocialComponent"

import rosemary from "../../images/rose.png"

const SectionContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 20px;
  border-radius: 50px;
`

const ImageContainer = styled.div`
  display: flex;
  height: 100%;
  justify-content: center;
  align-items: center;

  @media (max-width: 960px) {
    justify-content: center;
  }
`

const StoryImage = styled.img`
  height: auto;
  width: 350px;
  overflow: hidden;
  border-radius: 30px;

  @media (max-width: 960px) {
    width: 90%;
    height: auto;
  }
`

const TextContainerGrid = styled(Grid)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  padding: 20px;
  margin: auto;
  font-size: 20px;

  @media (max-width: 960px) {
    padding-top: 20px;
  }
`

const Button = styled.button`
  width: 250px;
  padding: 15px;
  margin: 5px;
  align-self: center;
  font-size: 16px;
  color: white;
  border-radius: 5px;
  background-image: linear-gradient(to bottom right, #8b0000, red);
`

const RoseRight = styled.img`
  height: 600px;
  margin-left: -130px;
  margin-right: -120px;
  -webkit-transform: scaleX(-1);
  transform: scaleX(-1);
  z-index: -1;

  @media (max-width: 960px) {
    margin: auto;
  }
`

const SectionRight = props => (
  <SectionContainer>
    <Grid container>
      <TextContainerGrid item sm={12} md={8}>
        <p style={{ paddingBottom: 15 }}>{props.text1}</p>
        <p>{props.text2}</p>
        {props.hasSocial ? <SocialComponent /> : null}
        {props.hasButton ? <Button>Make a booking</Button> : null}
      </TextContainerGrid>
      <Grid item sm={12} md={4}>
        <ImageContainer>
          <StoryImage src={props.img} alt="" />
        </ImageContainer>
      </Grid>

      <RoseRight src={rosemary} alt="" />
    </Grid>
  </SectionContainer>
)

export default SectionRight
