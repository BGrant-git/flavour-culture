import React from "react"
import styled from "styled-components"
import Grid from "@material-ui/core/Grid"

import Layout from "../components/layout"
import OurStory from "../components/about/OurStory"
import BioCards from "../components/about/BioCards"

import bannerImg from "../images/story-images/banner1.jpg"

const BannerContainer = styled.div`
  height: 200px;
  overflow: hidden;
`

const Img = styled.img`
  width: 100vw;
`

const About = () => {
  return (
    <Layout>
      <Grid container>
        <Grid item xs={12}>
          <BannerContainer>
            <Img src={bannerImg} alt="" />
          </BannerContainer>
        </Grid>
        <Grid item xs={12}>
          <OurStory />
        </Grid>
        <Grid item xs={12}>
          <BioCards />
        </Grid>
      </Grid>
    </Layout>
  )
}

export default About
