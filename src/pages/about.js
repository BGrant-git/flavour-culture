import React from "react"
import styled from "styled-components"
import Grid from "@material-ui/core/Grid"

import Layout from "../components/layout"
import OurStoryComponent from "../components/about/OurStoryComponent"
import ContactBar from "../components/contact/contactBar"

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
    <Layout>
      <Grid container>
        <BannerImg src={require("../images/about/storybanner.jpg")} alt="" />
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
