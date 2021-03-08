import React from "react"
import styled from "styled-components"
import Grid from "@material-ui/core/Grid"

import Layout from "../components/layout"
import OurStoryComponent from "../components/about/OurStoryComponent"
import ContactBar from "../components/contact/contactBar"

const henna1 = require("../images/henna/henna1.png")

const BannerImg = styled.img`
  width: 100%;
`

const TopHenna = styled.img`
  height: 200px;
  display: block;
  margin
`

const About = () => {
  return (
    <Layout>
      <Grid container>
        <BannerImg src={require("../images/about/storybanner.jpg")} alt="" />
        <TopHenna src={henna1} atl="" />
        <Grid item xs={12}>
          <OurStoryComponent />
        </Grid>
        <Grid item xs={12}>
          <ContactBar />
        </Grid>
      </Grid>
    </Layout>
  )
}

export default About
