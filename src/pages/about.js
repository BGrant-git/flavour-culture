import React from "react"
import styled from "styled-components"
import Grid from "@material-ui/core/Grid"

import Layout from "../components/layout"
import OurStoryComponent from "../components/about/OurStoryComponent"

const henna1 = require("../images/henna/henna1.png")
const henna2 = require("../images/henna/henna3.png")

const BannerImg = styled.img`
  width: 100%;
`

const TopHenna = styled.img`
  height: 200px;
  display: block;
  margin: 20px auto 0;
`

const BottomHenna = styled.img`
  margin: -40px 0 20px;
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
        <BottomHenna src={henna2} alt="" />
      </Grid>
    </Layout>
  )
}

export default About
