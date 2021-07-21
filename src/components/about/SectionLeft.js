import React from "react"
import styled from "styled-components"
import { Grid, useMediaQuery, Button } from "@material-ui/core/"
import { AnchorLink } from "gatsby-plugin-anchor-links"

import SocialComponent from "./SocialComponent"

import rosemary from "../../images/rose.png"

const SectionContainer = styled.div`
  width: 100%;
  margin: 10px auto;
  padding: 20px;
  border-radius: 50px;

  @media (max-width: 960px) {
    width: 100%;
  }
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

const Text = styled.p`
  padding-bottom: 15px;
`

const VendorButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 600px) {
    flex-direction: column;
  }
`

const RoseLeft = styled.img`
  height: 600px;
  margin-left: -150px;
  margin-right: -100px;
`

const RoseRight = styled.img`
  height: 300px;
  margin-top: 150px;
  margin-left: -20px;
  margin-right: -120px;
  -webkit-transform: scaleX(-1);
  transform: scaleX(-1);
  display: none;
`

const RoseRightMob = styled.img`
  height: 300px;
  margin: -650px 0 0 85%;
`

const RoseLeftMob = styled.img`
  height: 300px;
  margin: -725px 0 0 -55px;
  -webkit-transform: scaleX(-1);
  transform: scaleX(-1);
`

const vendorButtonStyles = {
  color: "white",
  backgroundColor: "var(--main-color)",
  maxWidth: "200px",
  height: "53px",
  fontFamily: "inherit",
  lineHeight: "16px",
  margin: "0 3px",
  borderRadius: "11px",
  fontSize: "16px",
  "&:hover": {
    backgroundColor: "black",
  },
  "@media (max-width: 600px)": {
    margin: "3px auto",
    fontSize: "18px",
    lineHeight: "18px",
  },
}

const buttonStyles = {
  color: "white",
  backgroundColor: "var(--main-color)",
  width: "200px",
  height: "53px",
  margin: "auto",
  fontFamily: "inherit",
  fontSize: 16,
  "&:hover": {
    backgroundColor: "black",
  },
}

const SectionLeft = props => {
  const matches = useMediaQuery("(max-width: 650px")
  const matchesSmall = useMediaQuery("(max-width: 675px")

  return (
    <SectionContainer>
      <Grid container>
        {matches ? (
          <RoseLeftMob src={rosemary} alt="" />
        ) : (
          <RoseLeft src={rosemary} alt="" />
        )}
        <Grid item sm={12} md={4}>
          <ImageContainer>
            <StoryImage
              src={props.img}
              alt=""
              style={props.imgBright ? { filter: "brightness(1.3)" } : null}
            />
          </ImageContainer>
        </Grid>
        <TextContainerGrid
          contianer
          item
          sm={12}
          md={8}
          style={matches ? null : { paddingRight: "50px" }}
        >
          <Text style={{ paddingBottom: 15 }}>{props.text1}</Text>
          <Text>{props.text2}</Text>
          {props.hasSocial ? <SocialComponent /> : null}
          {props.hasButton ? (
            <Button variant="contained" style={buttonStyles}>
              Make a booking
            </Button>
          ) : null}
          {props.hasVendorButtons ? (
            <>
              <h3 style={{ textAlign: "center" }}>Check Out Our Vendors:</h3>
              <VendorButtonsContainer>
                <AnchorLink to="/vendors#Flavour-Culture-Catering">
                  <Button variant="contained" style={vendorButtonStyles}>
                    Flavour Culture Catering
                  </Button>
                </AnchorLink>
                <AnchorLink to="/vendors#BRATHAUS">
                  <Button variant="contained" style={vendorButtonStyles}>
                    BRATHAUS
                  </Button>
                </AnchorLink>
                <AnchorLink to="/vendors#NaanStop">
                  <Button variant="contained" style={vendorButtonStyles}>
                    Naan Stop
                  </Button>
                </AnchorLink>
              </VendorButtonsContainer>
            </>
          ) : null}
        </TextContainerGrid>
        {matchesSmall ? (
          <RoseRightMob src={rosemary} alt="" />
        ) : (
          <RoseRight src={rosemary} alt="" />
        )}
      </Grid>
    </SectionContainer>
  )
}

export default SectionLeft
