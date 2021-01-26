import React from "react"
import styled from "styled-components"
import Grid from "@material-ui/core/Grid"
import { useBreakpoint } from "gatsby-plugin-breakpoints"

import storyImg1 from "../../images/about/storydanny.jpg"
import storyImg2 from "../../images/about/storyjohnny.jpg"
import storyImg3 from "../../images/about/storyplate.jpg"
import FacebookIcon from "@material-ui/icons/Facebook"
import InstagramIcon from "@material-ui/icons/Instagram"

const StoryContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const MainTitle = styled.div`
  padding: 20px;
  padding-top: 35px;
  font-size: 45px;
  font-family: "Thunder";
`

const SectionContainer = styled.div`
  width: 100%;
  margin: 10px auto;
  padding: 20px;
  border-radius: 50px;
`

const ImageContainer = styled.div`
  display: flex;
  height: 100%;
  justify-content: center;
  align-items: center;
  overflow-x: hidden;

  @media (max-width: 960px) {
    justify-content: center;
  }
`

const StoryImage = styled.img`
  height: auto;
  width: 400px;
  overflow: hidden;
  border-radius: 60px;

  @media (max-width: 960px) {
    width: 90%;
    height: auto;
  }
`

const Heading = styled.h1`
  padding-bottom: 30px;
`

const TextContainer = styled(Grid)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  padding: 20px;
  margin: auto;
  font-size: 20px;

  @media (max-width: 960px) {
    text-align: center;
    padding-top: 20px;
  }
`

const Text = styled.p`
  padding-bottom: 15px;
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

const SocialContanier = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
`

const SocialTitle = styled.h2`
  font-size: 19px;
`

const IcontContainer = styled.div`
  display: inherit;
  flex-direction: row;
`

const Icon = styled.a`
  margin: 5px;
  color: #1d1d1b;
  transition: 0.1s ease-in;

  :hover {
    transform: translate(0, -5px);
    -webkit-transform: translate(0, -5px); /** Chrome & Safari **/
    -o-transform: translate(0, -5px); /** Opera **/
    -moz-transform: translate(0, -5px); /** Firefox **/
  }
`

const SocialComponent = () => (
  <SocialContanier>
    <SocialTitle>Check out our social media</SocialTitle>
    <IcontContainer>
      <Icon href="">
        <FacebookIcon style={{ height: "50px", width: "50px" }} />
      </Icon>
      <Icon href="">
        <InstagramIcon style={{ height: "50px", width: "50px" }} />
      </Icon>
    </IcontContainer>
  </SocialContanier>
)

const SectionLeft = props => (
  <SectionContainer>
    <Grid container style={props.background}>
      <Grid item sm={12} md={4}>
        <ImageContainer>
          <StoryImage src={props.img} alt="" />
        </ImageContainer>
      </Grid>
      <TextContainer item sm={12} md={8}>
        <Heading>{props.heading}</Heading>
        <Text style={{ paddingBottom: 15 }}>{props.text1}</Text>
        <Text>{props.text2}</Text>
        {props.hasSocial ? <SocialComponent /> : null}
        {props.hasButton ? <Button>Make a booking</Button> : null}
      </TextContainer>
    </Grid>
  </SectionContainer>
)

const SectionRight = props => (
  <SectionContainer style={props.background}>
    <Grid container>
      <TextContainer item sm={12} md={8}>
        <Heading>{props.heading}</Heading>
        <p style={{ paddingBottom: 15 }}>{props.text1}</p>
        <p>{props.text2}</p>
        {props.hasSocial ? <SocialComponent /> : null}
        {props.hasButton ? <Button>Make a booking</Button> : null}
      </TextContainer>
      <Grid item sm={12} md={4}>
        <ImageContainer>
          <StoryImage src={props.img} alt="" />
        </ImageContainer>
      </Grid>
    </Grid>
  </SectionContainer>
)

const OurStoryComponent = () => {
  const breakpoints = useBreakpoint()

  const storyBackground = { backgroundColor: "#1d1d1b", color: "white" }

  const content = [
    `We are two school friends with a passion for flavoursome food, we
      want to build a positive culture around authentic food cooked
      fresh to order with high quality ingredients.`,
    `During the Covid-19 lockdown we watched restaurants close & large
      events cancelled but noticed some food truck vendors were still
      trading. We wanted to be a part of this trend as we see a
      revolution in catering towards street food & deliveries.`,
    `The beauty of mobile catering is that we are able to interact with
      guests on a personal level and express our passion for food to
      them. We love the fast paced environment and challenges to face on
      a daily basis. In comparison to restaurants, chefs often are stuck
      behind the scenes and don’t get the fulfillment from seeing a
      customer smile after that first bite.`,
    `Our memories of home cooked food, travelling the world and working
      in London food events forged our passion & appreciation for the
      flavours of many great cuisines. We want to share these
      inspirations with others through our food.`,
    `As a business we aim to reduce our environmental impact by
      eliminating single use plastics & sourcing local produce, as well
      as introducing biodegradable packaging. The healthy aspect of our
      food and the good energy we bring creates an atmosphere that
      people want to be a part of. Our ultimate goal is for our guests
      to be completely satisfied.`,
  ]

  return (
    <Grid container>
      <Grid item sm={false} md={1} />
      <Grid item sm={12} md={10}>
        <StoryContainer>
          <MainTitle>OUR STORY</MainTitle>
          <SectionLeft
            heading={"Heading"}
            text1={content[0]}
            text2={content[1]}
            img={storyImg1}
          />
          {breakpoints.md ? (
            <SectionLeft
              heading={"Heading"}
              text2={content[2]}
              img={storyImg2}
              hasButton={true}
              background={storyBackground}
            />
          ) : (
            <SectionRight
              heading={"Heading"}
              text2={content[2]}
              img={storyImg2}
              hasButton
              background={storyBackground}
            />
          )}
          <SectionLeft heading={"Heading"} text2={content[2]} img={storyImg2} />
          {breakpoints.md ? (
            <SectionLeft
              heading={"Heading"}
              text2={content[3]}
              img={storyImg3}
              background={storyBackground}
            />
          ) : (
            <SectionRight
              heading={"Heading"}
              text2={content[4]}
              img={storyImg3}
              hasSocial
              background={storyBackground}
            />
          )}
        </StoryContainer>
      </Grid>
      <Grid item sm={false} md={1} />
    </Grid>
  )
}

export default OurStoryComponent
