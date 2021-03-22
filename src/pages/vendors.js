import React from "react"
import styled from "styled-components"
import Grid from "@material-ui/core/Grid"

import Layout from "../components/layout"
import VendorComponent from "../components/vendors/vendorComponent"

const banner = require("../images/vendors/vendor-banner.jpg")
const mandala = require("../images/henna/mandala1.png")
const henna = require("../images/henna/henna4.png")

const BannerImg = styled.img`
  width: 100%;
`

const MandalaStyle = styled.img`
  height: 250px;
  width: 250px;
  margin: 20px auto 0;
  display: block;
`

const BottomHenna = styled.img`
  height: 300px;
  -webkit-transform: scaleY(-1);
  transform: scaleY(-1);
  margin: auto;
  display: block;
  margin-top: -60px;
  margin-bottom: 20px;

  @media (max-width: 960px) {
    height: 250px;
    padding: 10px;
    margin-top: 0;
  }
`

const Vendors = () => {
  return (
    <Layout>
      <div style={{ overflowX: "hidden" }}>
        <BannerImg src={banner} alt="" />
        <MandalaStyle src={mandala} alt="" />
        <Grid container>
          <Grid item md={false} lg={1} />
          <Grid item md={12} lg={10}>
            <VendorComponent />
          </Grid>
          <Grid item md={false} lg={1} />
        </Grid>
        <BottomHenna src={henna} alt="" />
      </div>
    </Layout>
  )
}

export default Vendors
