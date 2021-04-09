import React from "react"
import styled from "styled-components"
import Grid from "@material-ui/core/Grid"

import rosemary from "src/images/rose.png"

const SectionContainer = styled.div`
  width: 95%;
  margin: 10px auto;
  border-radius: 50px;

  @media (max-width: 768px) {
    width: 100%;
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

  @media (max-width: 960px) {
    display: none;
  }
`

const VendorComponentLeft = ({ img, heading, subheading, text }) => {
  return (
    <SectionContainer>
      <Grid container>
        <Rosemary src={rosemary} alt="" />
        <Grid item sm={12} md={4}>
          <SectionImageContainer>
            <SectionImage src={img} alt="" />
          </SectionImageContainer>
        </Grid>
        <Grid item sm={12} md={8}>
          <SectionTextContainer>
            <SectionHeading>{heading}</SectionHeading>
            <SectionSubheading>{subheading}</SectionSubheading>
            {text.map((item, i) => (
              <SectionText index={i}>{item}</SectionText>
            ))}
          </SectionTextContainer>
        </Grid>
      </Grid>
    </SectionContainer>
  )
}

export default VendorComponentLeft
