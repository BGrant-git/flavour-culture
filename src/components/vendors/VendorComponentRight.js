import React from "react"
import styled from "styled-components"
import Grid from "@material-ui/core/Grid"
import { useMediaQuery } from "@material-ui/core"

const rosemary = require("../../images/rose.png")

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
  border-radius: 60px;
  z-index: 2;

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

const Rosemary = styled.img`
  height: 600px;
  margin-left: -150px;
  margin-right: -100px;
  -webkit-transform: scaleX(-1);
  transform: scaleX(-1);
  z-index: 1;

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
