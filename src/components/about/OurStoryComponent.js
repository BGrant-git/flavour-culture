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
  width: 350px;
  overflow: hidden;
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

  @media (max-width: 960px) {
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
  color: white;
  border-radius: 5px;
  background-image: linear-gradient(to bottom right, #8b0000, red);
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

const IconContainer = styled.div`
  display: inherit;
  flex-direction: row;
`

const Icon = styled.a`
  margin: 5px;
  color: white;
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
    <IconContainer>
      <Icon href="">
        <FacebookIcon style={{ height: "50px", width: "50px" }} />
      </Icon>
      <Icon href="https://www.instagram.com/flavour_culture">
        <InstagramIcon style={{ height: "50px", width: "50px" }} />
      </Icon>
    </IconContainer>
  </SocialContanier>
)

const SectionLeft = props => (
  <SectionContainer style={props.background}>
    <Grid container>
      <Grid item sm={12} md={4}>
        <ImageContainer>
          <StoryImage src={props.img} alt="" />
        </ImageContainer>
      </Grid>
      <TextContainer item sm={12} md={8}>
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
              text1={content[2]}
              img={storyImg2}
              hasButton={true}
              background={storyBackground}
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
          <SectionLeft heading={"Heading"} text1={content[3]} img={storyImg2} />
          {breakpoints.md ? (
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
        </StoryContainer>
      </Grid>
      <Grid item sm={false} md={1} />
    </Grid>
  )
}

export default OurStoryComponent
