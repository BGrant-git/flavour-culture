import React from "react"
import styled from "styled-components"
import Grid from "@material-ui/core/Grid"
import { AnchorLink } from "gatsby-plugin-anchor-links"

import SocialComponent from "./SocialComponent"

const rosemary = require("../../images/rose.png")

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

const RoseLeft = styled.img`
  height: 600px;
  margin-left: -150px;
  margin-right: -100px;

  @media (max-width: 960px) {
    display: none;
  }
`

const SectionLeft = props => (
  <SectionContainer style={props.background}>
    <Grid container>
      {props.hasRosemary ? <RoseLeft src={rosemary} alt="" /> : null}
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
        style={props.breakpoints.md ? null : { paddingRight: "50px" }}
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
    </Grid>
  </SectionContainer>
)

export default SectionLeft