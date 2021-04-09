import React from "react"
import styled from "styled-components"
import { Grid, useMediaQuery } from "@material-ui/core/"

import SectionRight from "./SectionRight"
import SectionLeft from "./SectionLeft"

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

const content = [
  `THE STORY of Flavour Culture began during lockdown 1.0 in March 2020 with two school friends on a hot summer's day cycling along the London river Thames (we rode it so many times we renamed it “The Nile”) & the beautiful fields along the path. `,
  `After a scenic ride we decided to leave the gates to explore the local area for lunch. Obviously, most food outlets were shut. However, the only options we could find were fast food takeaways or a burger van. We saw a return to the streets in this market and wanted to be a part of it.`,
  `POST LOCKDOWN 2.0 and many months of planning, our catering venture began, “Flavour Culture Catering”. We started cooking from home to deliver breakfasts, lunches & dinners to the film & music industry. Many of our friends and family have told us the food is delicious but after some happy clients caught a buzz off our food it certified our mission.`,
  `
  SHORTLY AFTER, our first pop up ‘BRATHAUS’ was established, selling authentic German sausages, we handled the pressure of a christmas market & ultimately brought a Christmas spirit to the locals.
   `,
  `THE BEAUTY of mobile catering is that we are able to interact with guests on a personal level and express our passion for food to them. Although we have a combined experience of 15 years within the hospitality industry, as owners things feel a bit different. We love the challenges to face on a daily basis. Chefs often are stuck behind the scenes and don’t get the fulfillment from seeing a customer smile after that first bite. We came up with a plan to use our newly gained catering experience and our first pop up as a gateway to our main project, ‘Naan Stop’.    `,
]

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
            text1={content[0]}
            text2={content[1]}
            img={storyImg1}
          />
          <Divider src={divider} alt="" />
          {matches ? (
            <SectionLeft
              heading={"Heading"}
              text1={content[2]}
              img={storyImg2}
              hasButton
              mobRoseRight
            />
          ) : (
            <SectionRight
              heading={"Heading"}
              text1={content[2]}
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
            text1={content[3]}
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
              text1={content[4]}
              img={storyImg4}
              mobRoseRight
            />
          ) : (
            <SectionRight
              heading={"Heading"}
              text1={content[4]}
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
