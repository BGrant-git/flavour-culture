import React from "react"
import styled from "styled-components"
import Grid from "@material-ui/core/Grid"

import OurStoryComponent from "../components/about/OurStoryComponent"

import bannerImg from "../images/about/storybanner.jpg"
import henna1 from "../images/henna/henna1.png"
import henna2 from "../images/henna/henna3.png"

const BannerImg = styled.img`
  width: 100%;
`

const TopHenna = styled.img`
  height: 200px;
  display: block;
  margin: 20px auto 0;
`

const BottomHenna = styled.img`
  margin: -40px auto 20px;
`

const About = () => {
  return (
    <Grid container>
      <BannerImg src={bannerImg} alt="" />
      <TopHenna src={henna1} atl="" />
      <Grid item xs={12}>
        <OurStoryComponent />
      </Grid>
      <BottomHenna src={henna2} alt="" />
    </Grid>
  )
}

export default About
