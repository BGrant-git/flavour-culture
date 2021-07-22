import React from "react"
import styled from "styled-components"
import Grid from "@material-ui/core/Grid"
import { useMediaQuery, Button } from "@material-ui/core"
import InstagramIcon from "@material-ui/icons/Instagram"

import rosemary from "../../images/rose.png"

const SectionContainer = styled.div`
  width: 95%;
  margin: 10px auto;
  border-radius: 50px;

  @media (max-width: 768px) {
    width: 100%;

    overflow: hidden;
  }
`

const SectionImageContainer = styled.div`
  display: flex;
  height: 100%;
  justify-content: center;
  align-items: center;
`

const SectionImage = styled.img`
  height: auto;
  width: 400px;
  overflow: hidden;
  padding: 1vw;
  border-radius: 30px;
  z-index: 1;

  @media (max-width: 960px) {
    width: 90%;
    height: auto;
  }
`

const SectionTextContainer = styled.div`
  padding: 20px;
`

const SectionHeading = styled.h1`
  font-size: 40px;
  padding-bottom: 10px;

  @media (max-width: 768px) {
    text-align: center;
  }
`

const SectionSubheading = styled.h2`
  padding: 5px 0;

  @media (max-width: 768px) {
    text-align: center;
  }
`

const SectionText = styled.p`
  padding: 10px 0;
  text-align: justify;
  font-size: 20px;
`

const ButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`

const Rosemary = styled.img`
  height: 600px;
  margin-left: -150px;
  margin-right: -100px;
  -webkit-transform: scaleX(-1);
  transform: scaleX(-1);
  z-index: 0;

  @media (max-width: 960px) {
    margin-top: -300px;
    margin-left: 80%;
    height: 300px;
  }
`

const RosemaryMob = styled.img`
  height: 300px;
  margin-top: -300px;
  margin-left: -50px;
`

const buttonStyles = {
  color: "white",
  backgroundColor: "var(--main-color)",
  margin: "0 auto",
  padding: "5px 15px",
  textTransform: "none",
  fontFamily: "inherit",
  fontSize: 19,
  "&:hover": {
    backgroundColor: "black",
  },
}

const VendorComponentRight = props => {
  const matches = useMediaQuery("(max-width: 960px)")

  return (
    <SectionContainer>
      <Grid container>
        <Grid item sm={12} md={8}>
          <SectionTextContainer>
            <SectionHeading>{props.heading}</SectionHeading>
            <SectionSubheading>{props.subheading}</SectionSubheading>
            {props.text.map((item, i) => (
              <SectionText index={i}>{item}</SectionText>
            ))}
            <ButtonWrapper>
              <a href={props.insta.url}>
                <Button
                  variant="contained"
                  size="large"
                  startIcon={<InstagramIcon />}
                  style={buttonStyles}
                >
                  {props.insta.name}
                </Button>
              </a>
            </ButtonWrapper>
          </SectionTextContainer>
        </Grid>
        <Grid item sm={12} md={4}>
          <SectionImageContainer>
            <SectionImage src={props.img} alt="" />
          </SectionImageContainer>
        </Grid>
        {matches ? <RosemaryMob src={rosemary} alt="" /> : null}
        <Rosemary src={rosemary} alt="" />
      </Grid>
    </SectionContainer>
  )
}

export default VendorComponentRight
