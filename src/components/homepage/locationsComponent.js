import React from "react"
import styled from "styled-components"
import Grid from "@material-ui/core/Grid"

import MapComponent from "./map"

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-right: 20px;
  background-color: #f0ead6;
  border-radius: 25px 25px 0 0;

  @media (max-width: 960px) {
    margin-right: 0;
  }
`

const Header = styled.div`
  border-radius: 25px 25px 0 0;
  background-color: #1d1d1b;
  width: 100%;
  color: white;
  text-align: center;
  padding: 5px;
  font-size: 22px;
  font-family: "thunder";
`

const Times = styled.p`
  font-size: 18px;
`

const VendorName = styled.h1`
  width: 100%;
  font-size: 38px;
`

const InfoText = styled.div`
  width: 100%;
  font-size: 22px;
`

const LocationsComponent = () => {
  const mapStyles = {
    width: "100%",
    height: "200px",
  }

  const bratLocation = {
    lat: 51.50799771795835,
    lng: -0.27228767069153964,
  }

  const otherLocation = {
    lat: 51.50449154072763,
    lng: -0.17036255857814045,
  }
  return (
    <Container>
      <Header>
        <h1>LOCATIONS</h1>
      </Header>
      <div style={{ width: "100%" }}>
        <Grid container style={{ padding: "10px" }}>
          <Grid item xs={12} md={6}>
            <VendorName>BRATHAUS</VendorName>
            <Times>Every Saturday</Times>
            <Times>10.00 - 17000</Times>
          </Grid>
          <Grid item xs={12} md={6}>
            <InfoText>
              <p>
                <strong>Acton Market</strong>
                <br />
                The Mount/King Street
                <br />
                Acton W3 9NW
              </p>
            </InfoText>
          </Grid>
        </Grid>

        <MapComponent mapStyles={mapStyles} center={bratLocation} />
      </div>

      <div style={{ width: "100%" }}>
        <Grid container style={{ padding: "10px" }}>
          <Grid item xs={12} md={6}>
            <VendorName>BRATHAUS</VendorName>
            <Times>Every Saturday</Times>
            <Times>10.00 - 17000</Times>
          </Grid>
          <Grid item xs={12} md={6}>
            <InfoText>
              <p>
                <strong>Acton Market</strong>
                <br />
                The Mount/King Street
                <br />
                Acton W3 9NW
              </p>
            </InfoText>
          </Grid>
        </Grid>

        <MapComponent mapStyles={mapStyles} center={otherLocation} />
      </div>
    </Container>
  )
}

export default LocationsComponent
