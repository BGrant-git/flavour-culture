import React from "react"
import styled from "styled-components"
import Grid from "@material-ui/core/Grid"

import Layout from "../components/layout"
import OurStory from "../components/about/OurStory"

import bannerImg from "../images/about/storybanner.jpg"
import instaPost from "../images/igpost.jpg"

const BannerContainer = styled.div`
  max-width: 650px;
  height: 200px;
  overflow: hidden;
  margin: auto;
`

const IGpostContainer = styled(Grid)`
  margin: 0;
  @media (max-width: 960px) {
    margin: auto;
  }
`

const IGpost = styled.div`
  width: 354px;
  height: 512px;
  margin: 50px auto;
`

const About = () => {
  return (
    <Layout>
      <Grid container>
        <Grid item xs={12}>
          <BannerContainer>
            <img src={bannerImg} alt="" />
          </BannerContainer>
        </Grid>
        <Grid item xs={12}>
          <OurStory />
        </Grid>
        <IGpostContainer container item xs={12}>
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
        </IGpostContainer>
      </Grid>
    </Layout>
  )
}

export default About
