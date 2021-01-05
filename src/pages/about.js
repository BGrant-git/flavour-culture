import React from "react"
import styled from "styled-components"
import Grid from "@material-ui/core/Grid"

import Layout from "../components/layout"
import OurStory from "../components/about/OurStory"

import bannerImg from "../images/story-images/banner1.jpg"
import instaPost from "../images/igpost.jpg"

const BannerContainer = styled.div`
  height: 200px;
  overflow: hidden;
`

const BannerImg = styled.img`
  width: 100vw;
`

const IGpost = styled.div`
  width: 354px;
  height: 512px;
  background-color: red;
  margin: 50px auto;
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
        <Grid container item xs={12}>
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
