import React from "react"
import styled from "styled-components"
import Grid from "@material-ui/core/Grid"

import StoryComponentLeft from "./StoryComponentLeft"
import StoryComponentRight from "./StoryComponentRight"

import storyImg1 from "../../../content/gallery/Brathaus/4_5956130633137785202.jpg"
import storyImg2 from "../../../content/gallery/Brathaus/Photo from Daniel(2).jpg"

const StoryContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const MainTitle = styled.div`
  padding: 20px;
  font-size: 40px;
`

const OurStory = () => {
  const content = [
    [
      `We are two school friends with a passion for flavoursome food, we
      want to build a positive culture around authentic food cooked
      fresh to order with high quality ingredients.`,
    ],
    [
      `During the Covid-19 lockdown we watched restaurants close & large
      events cancelled but noticed some food truck vendors were still
      trading. We wanted to be a part of this trend as we see a
      revolution in catering towards street food & deliveries.`,
    ],
    [
      `The beauty of mobile catering is that we are able to interact with
      guests on a personal level and express our passion for food to
      them. We love the fast paced environment and challenges to face on
      a daily basis. In comparison to restaurants, chefs often are stuck
      behind the scenes and don’t get the fulfillment from seeing a
      customer smile after that first bite.`,
    ],
    [
      `Our memories of home cooked food, travelling the world and working
      in London food events forged our passion & appreciation for the
      flavours of many great cuisines. We want to share these
      inspirations with others through our food.`,
    ],
    [
      `As a business we aim to reduce our environmental impact by
      eliminating single use plastics & sourcing local produce, as well
      as introducing biodegradable packaging. The healthy aspect of our
      food and the good energy we bring creates an atmosphere that
      people want to be a part of. Our ultimate goal is for our guests
      to be completely satisfied.`,
    ],
  ]

  return (
    <Grid container>
      <Grid item sm={false} md={1} />
      <Grid item sm={12} md={10}>
        <StoryContainer>
          <MainTitle>OUR STORY</MainTitle>
          <StoryComponentLeft
            text1={content[0]}
            text2={content[1]}
            img={storyImg1}
          />
          <StoryComponentRight
            text1={content[2]}
            text2={content[3]}
            text3={content[4]}
            img={storyImg2}
          />
        </StoryContainer>
      </Grid>
      <Grid item sm={false} md={1} />
    </Grid>
  )
}

export default OurStory
