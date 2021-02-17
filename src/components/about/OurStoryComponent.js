import React from "react"
import styled from "styled-components"
import Grid from "@material-ui/core/Grid"
import { useBreakpoint } from "gatsby-plugin-breakpoints"
import { AnchorLink } from "gatsby-plugin-anchor-links"
import FacebookIcon from "@material-ui/icons/Facebook"
import InstagramIcon from "@material-ui/icons/Instagram"
const storyImg1 = require("../../images/about/storydanny.jpg")
const storyImg2 = require("../../images/about/storyjohnny.jpg")
const storyImg3 = require("../../images/about/storyplate.jpg")
const rosemary = require("../../images/rose.png")

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

const TopHenna = styled.img`
  height: 200px;
  width: auto;
  margin: -20px 0 -40px;

  @media (max-width: 960px) {
    margin: 0;
  }
`

const BottomHenna = styled.img``

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

const VendorButtonsContainer = styled.div`
  display: flex;
  justify-content: center;

  @media (max-width: 600px) {
    flex-direction: column;
  }
`

const VendorButton = styled.button`
  background-color: var(--main-color);
  color: white;
  padding: 10px;
  font-size: 22px;
  margin: 3px;
  border-radius: 11px;

  @media (max-width: 600px) {
    width: 100%;
    height: undefined;
    text-align: center;
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

const RoseLeft = styled.img`
  height: 600px;
  margin-left: -150px;
  margin-right: -100px;

  @media (max-width: 960px) {
    display: none;
  }
`

const RoseRight = styled.img`
  height: 600px;
  margin-left: -100px;
  margin-right: -150px;
  -webkit-transform: scaleX(-1);
  transform: scaleX(-1);

  @media (max-width: 960px) {
    display: none;
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
      <RoseLeft src={rosemary} alt="" />
      <Grid item sm={12} md={4}>
        <ImageContainer>
          <StoryImage src={props.img} alt="" />
        </ImageContainer>
      </Grid>
      <TextContainerGrid
        contianer
        item
        sm={12}
        md={8}
        style={{ paddingRight: "50px" }}
      >
        <Text style={{ paddingBottom: 15 }}>{props.text1}</Text>
        <Text>{props.text2}</Text>
        {props.hasSocial ? <SocialComponent /> : null}
        {props.hasButton ? <Button>Make a booking</Button> : null}
        {props.hasVendorButtons ? (
          <>
            <h3 style={{ textAlign: "center" }}>Check Out Our Vendors:</h3>
            <VendorButtonsContainer>
              <AnchorLink to="/vendors#FCC">
                <VendorButton>Flavour Culture Catering</VendorButton>
              </AnchorLink>
              <AnchorLink to="/vendors#BRATHAUS">
                <VendorButton>BRATHAUS</VendorButton>
              </AnchorLink>
              <AnchorLink to="/vendors#NaanStop">
                <VendorButton>Naan Stop</VendorButton>
              </AnchorLink>
            </VendorButtonsContainer>
          </>
        ) : null}
      </TextContainerGrid>
      <RoseRight src={rosemary} alt="" />
    </Grid>
  </SectionContainer>
)

const SectionRight = props => (
  <SectionContainer style={props.background}>
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
    </Grid>
  </SectionContainer>
)

const OurStoryComponent = () => {
  const breakpoints = useBreakpoint()

  const storyBackground = {
    backgroundColor: " var(--main-color)",
    color: "white",
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
          <MainTitle>OUR STORY</MainTitle>
          <TopHenna src={require("../../images/henna/henna1.png")} alt="" />
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
              hasButton
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
          <SectionLeft
            heading={"Heading"}
            text1={content[3]}
            img={storyImg2}
            hasVendorButtons
          />
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
          <BottomHenna src={require("../../images/henna/henna3.png")} alt="" />
        </StoryContainer>
      </Grid>
      <Grid item sm={false} md={1} />
    </Grid>
  )
}

export default OurStoryComponent
