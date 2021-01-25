import React from "react"
import styled from "styled-components"
import Grid from "@material-ui/core/Grid"

import Layout from "../components/layout"
import VendorComponent from "../components/vendors/vendorComponent"

const Title = styled.h1`
  padding: 30px;
  text-align: center;
  font-size: 50px;
  font-family: "Thunder";
`

const Vendors = () => {
  useEffect(() => {
    navigate("/coming-soon")
  }, [])
  return (
    <Layout>
      <Title>VENDORS</Title>
      <Grid container>
        <Grid item md={false} lg={1} />
        <Grid item md={12} lg={10}>
          <VendorComponent />
        </Grid>
        <Grid item md={false} lg={1} />
      </Grid>
    </Layout>
  )
}

export default Vendors
