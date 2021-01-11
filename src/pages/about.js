import React from "react"
import styled from "styled-components"
import Grid from "@material-ui/core/Grid"

import Layout from "../components/layout"
import OurStory from "../components/about/OurStory"

import bannerImg from "../images/about/storybannerlarge.jpg"
import instaPost from "../images/igpost.jpg"

const BannerContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100vw;
  overflow: hidden;
  margin: auto;
`

const BannerImg = styled.img`
  @media (max-width: 960px) {
    width: 100vw;
  }
`

const IGpost = styled.div`
  width: 354px;
  margin: auto;
  padding: 20px 0;
`

const About = () => {
  return (
    <Layout>
      <Grid container>
        <Grid item xs={12}>
          <BannerContainer>
            <BannerImg src={bannerImg} alt="" />
          </BannerContainer>
        </Grid>
        <Grid item xs={12}>
          <OurStory />
        </Grid>
        <Grid container item xs={12} justify="center">
          <Grid item sm={12} md={4}>
            <IGpost>
              <img src={instaPost} alt="" />
            </IGpost>
          </Grid>
          <Grid item sm={12} md={4}>
            <IGpost>
              <img src={instaPost} alt="" />
            </IGpost>
          </Grid>
          <Grid item sm={12} md={4}>
            <IGpost>
              <img src={instaPost} alt="" />
            </IGpost>
          </Grid>
        </Grid>
      </Grid>
    </Layout>
  )
}

export default About
