import React from "react"
import styled from "styled-components"
import { Grid, useMediaQuery } from "@material-ui/core/"

import SectionLeft from "./SectionLeft"
import ResponsiveSection from "./ResponsiveSection"

import { aboutText } from "src/flavour-culture-text/about-text"
import storyImg1 from "src/images/about/storydanny.jpg"
import storyImg2 from "src/images/about/storyjohnny.jpg"
import storyImg3 from "src/images/vendors/jondan.jpg"
import storyImg4 from "src/images/vendors/storyplate.jpg"
import divider from "src/images/henna/divider.png"

const StoryContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: undefined;

  @media (max-width: 960px) {
    overflow: hidden;
  }
`

const TitleContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;

  @media (min-width: 1000px) {
    margin-bottom: -75px;
  }
`

const Title = styled.h1`
  padding: 30px;
  text-align: center;
  font-size: 50px;
  font-family: "Thunder";
`

const TitleRule = styled.div`
  height: 5px;
  background: black;
  width: 20%;
  border-radius: 4px;
`

const Divider = styled.img`
  margin: -100px 0;

  @media (max-width: 960px) {
    width: 100%;
    margin: 0;
  }
`

const OurStoryComponent = () => {
  const matches = useMediaQuery("(max-width: 960px)")

  return (
    <Grid container>
      <Grid item xs={false} md={1}></Grid>
      <Grid item sm={12} md={10}>
        <StoryContainer>
          <TitleContainer>
            <TitleRule />
            <Title>OUR STORY</Title>
            <TitleRule />
          </TitleContainer>
          <SectionLeft text={aboutText[0]} img={storyImg1} />
          <Divider src={divider} alt="" />
          <ResponsiveSection
            matches={matches}
            content={aboutText[1]}
            image={storyImg2}
            hasSocial
          />
          <Divider
            src={divider}
            alt=""
            style={matches ? { marginBottom: "-20px" } : null}
          />
          <SectionLeft
            text={aboutText[2]}
            img={storyImg3}
            imgBright
            hasVendorButtons
          />
          <Divider
            src={divider}
            alt=""
            style={matches ? { marginTop: "-30px" } : null}
          />
          <ResponsiveSection
            matches={matches}
            content={aboutText[3]}
            image={storyImg4}
            hasButton
          />
        </StoryContainer>
      </Grid>
      <Grid item sm={false} md={1} />
    </Grid>
  )
}

export default OurStoryComponent
