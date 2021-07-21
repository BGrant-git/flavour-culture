import React from "react"
import styled from "styled-components"
import { Grid, useMediaQuery } from "@material-ui/core/"

import SectionRight from "./SectionRight"
import SectionLeft from "./SectionLeft"

import { aboutText } from "../../text-files/aboutText"
import storyImg1 from "../../images/about/storydanny.jpg"
import storyImg2 from "../../images/about/storyjohnny.jpg"
import storyImg3 from "../../images/vendors/jondan.jpg"
import storyImg4 from "../../images/vendors/storyplate.jpg"
import divider from "../../images/henna/divider.png"

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
  margin-bottom: -75px;

  @media (max-width: 690px) {
    margin-bottom: 0;
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
          <SectionLeft
            heading={"Heading"}
            text1={aboutText[0]}
            text2={aboutText[1]}
            img={storyImg1}
          />
          <Divider src={divider} alt="" />
          {matches ? (
            <SectionLeft
              heading={"Heading"}
              text1={aboutText[2]}
              img={storyImg2}
              hasButton
              mobRoseRight
            />
          ) : (
            <SectionRight
              heading={"Heading"}
              text1={aboutText[2]}
              img={storyImg2}
              hasButton
            />
          )}
          <Divider
            src={divider}
            alt=""
            style={matches ? { marginBottom: "-20px" } : null}
          />
          <SectionLeft
            heading={"Heading"}
            text1={aboutText[3]}
            img={storyImg3}
            imgBright
            hasVendorButtons
          />
          <Divider
            src={divider}
            alt=""
            style={matches ? { marginTop: "-30px" } : null}
          />
          {matches ? (
            <SectionLeft
              heading={"Heading"}
              text1={aboutText[4]}
              img={storyImg4}
              mobRoseRight
              hasSocial
            />
          ) : (
            <SectionRight
              heading={"Heading"}
              text1={aboutText[4]}
              img={storyImg4}
              hasSocial
            />
          )}
        </StoryContainer>
      </Grid>
      <Grid item sm={false} md={1} />
    </Grid>
  )
}

export default OurStoryComponent
