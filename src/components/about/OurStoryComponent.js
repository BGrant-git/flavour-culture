import React from "react"
import styled from "styled-components"
import { Grid, useMediaQuery } from "@material-ui/core/"

import SectionRight from "./SectionRight"
import SectionLeft from "./SectionLeft"

const storyImg1 = require("../../images/about/storydanny.jpg")
const storyImg2 = require("../../images/about/storyjohnny.jpg")
const storyImg3 = require("../../images/about/storyplate.jpg")
const topHennna = require("../../images/henna/henna1.png")
const bottomHenna = require("../../images/henna/henna3.png")
const divider = require("../../images/henna/divider.png")

const StoryContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  overlfow: undefined;

  @media (max-width: 960px) {
    overflow: hidden;
  }
`

const MainTitle = styled.div`
  padding: 20px;
  padding-top: 35px;
  font-size: 45px;
  font-family: "Thunder";
  margin-bottom: -120px;

  @media (max-width: 960px) {
    margin-bottom: 0;
  }
`

const TopHenna = styled.img`
  height: 200px;
  width: auto;
  margin-top: 20px;
`

const BottomHenna = styled.img`
  padding-bottom: 10px;
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

  const storyBackground = {
    color: "black",
  }

  const content = [
    `THE STORY of Flavour Culture began during lockdown 1.0 in March 2020 with two school friends on a hot summer's day cycling along the London river Thames (we rode it so many times we renamed it “The Nile”) & the beautiful fields along the path. `,
    `After a scenic ride we decided to leave the gates to explore the local area for lunch. Obviously, most food outlets were shut. However, the only options we could find were fast food takeaways or a burger van. We saw a return to the streets in this market and wanted to be a part of it.`,
    `POST LOCKDOWN 2.0 and many months of planning, our catering venture began, “Flavour Culture Catering”. We started cooking from home to deliver breakfasts, lunches & dinners to the film & music industry. Many of our friends and family have told us the food is delicious but after some happy clients caught a buzz off our food it certified our mission.`,
    `
    SHORTLY AFTER, our first pop up ‘BRATHAUS’ was established, selling authentic German sausages, we handled the pressure of a christmas market & ultimately brought a Christmas spirit to the locals.
     `,
    `THE BEAUTY of mobile catering is that we are able to interact with guests on a personal level and express our passion for food to them. Although we have a combined experience of 15 years within the hospitality industry, as owners things feel a bit different. We love the challenges to face on a daily basis. Chefs often are stuck behind the scenes and don’t get the fulfillment from seeing a customer smile after that first bite. We came up with a plan to use our newly gained catering experience and our first pop up as a gateway to our main project, ‘Naan Stop’.    `,
  ]

  return (
    <Grid container>
      <Grid item xs={false} md={1}></Grid>
      <Grid item sm={12} md={10}>
        <StoryContainer>
          <TopHenna src={topHennna} alt="" />
          <MainTitle>OUR STORY</MainTitle>

          <SectionLeft
            heading={"Heading"}
            text1={content[0]}
            text2={content[1]}
            img={storyImg1}
            hasRosemary
          />
          <Divider src={divider} alt="" />
          {matches ? (
            <SectionLeft
              heading={"Heading"}
              text1={content[2]}
              img={storyImg2}
              hasButton
              background={storyBackground}
              mobRoseRight
            />
          ) : (
            <SectionRight
              heading={"Heading"}
              text1={content[2]}
              img={storyImg2}
              hasButton
              background={storyBackground}
            />
          )}
          <Divider
            src={divider}
            alt=""
            style={matches ? { marginBottom: "-20px" } : null}
          />
          <SectionLeft
            heading={"Heading"}
            text1={content[3]}
            img={storyImg2}
            hasVendorButtons
            hasRosemary
          />
          <Divider
            src={divider}
            alt=""
            style={matches ? { marginTop: "-70px" } : null}
          />
          {matches ? (
            <SectionLeft
              heading={"Heading"}
              text1={content[4]}
              img={storyImg3}
              background={storyBackground}
            />
          ) : (
            <SectionRight
              heading={"Heading"}
              text1={content[4]}
              img={storyImg3}
              hasSocial
              background={storyBackground}
            />
          )}
          <BottomHenna src={bottomHenna} alt="" />
        </StoryContainer>
      </Grid>
      <Grid item sm={false} md={1} />
    </Grid>
  )
}

export default OurStoryComponent
