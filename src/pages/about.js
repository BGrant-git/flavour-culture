import React from "react"
import styled from "styled-components"
import Grid from "@material-ui/core/Grid"

import OurStoryComponent from "../components/about/OurStoryComponent"
import ContactBar from "../components/contact/contactBar"

import instaPost from "../images/igpost.jpg"

const BannerImg = styled.img`
  width: 100%;
`

const IGpost = styled.div`
  width: 354px;
  margin: auto;
  padding: 20px 0;
`

const About = () => {
  return (
    <>
      <Grid container>
        <BannerImg src={require("../images/about/storybanner.jpg")} alt="" />
        <Grid item xs={12}>
          <OurStoryComponent />
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
        <Grid item xs={12}>
          <ContactBar />
        </Grid>
      </Grid>
    </>
  )
}

export default About
