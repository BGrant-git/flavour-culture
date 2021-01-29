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
  margin-bottom: 72px;
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

const MarketIcon = styled.img`
  height: 70px;
  margin-top: -70px;
`

const Times = styled.p`
  font-size: 18px;
`

const VendorName = styled.h1`
  width: 100%;
  font-size: 28px;
`

const InfoText = styled.div`
  width: 100%;
  padding-top: 5px;
  font-size: 22px;
  text-align: right;
`

const LocationsComponent = () => {
  const mapStyles = {
    width: "100%",
    height: "200px",
  }

  const northLocation = {
    lat: 51.48258,
    lng: -0.20022,
  }

  const bratLocation = {
    lat: 51.50799771795835,
    lng: -0.27228767069153964,
  }
  return (
    <>
      <Container>
        <MarketIcon src={require("../../images/home/marketicon.png")} alt="" />
        <Header>
          <h1>LOCATIONS</h1>
        </Header>
        <div style={{ width: "100%" }}>
          <Grid container style={{ padding: "20px" }}>
            <Grid item xs={12} md={6}>
              <VendorName>BRATHAUS</VendorName>
              <Times>Monday - Saturday</Times>
              <Times>09.00 - 18.00</Times>
            </Grid>
            <Grid item xs={12} md={6}>
              <InfoText>
                <p>
                  <strong>North End Rd. Market</strong>
                  <br />
                  North End Road
                  <br />
                  Fulham SW6 1NS
                </p>
              </InfoText>
            </Grid>
          </Grid>

          <MapComponent
            mapStyles={mapStyles}
            center={northLocation}
            zoom={13}
            brat={bratLocation}
          />
        </div>

        <div style={{ width: "100%" }}>
          <Grid container style={{ padding: "20px" }}>
            <Grid item xs={12} md={6}>
              <VendorName>BRATHAUS</VendorName>
              <Times>Every Saturday</Times>
              <Times>10.00 - 16.00</Times>
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

          <MapComponent mapStyles={mapStyles} center={bratLocation} zoom={16} />
        </div>
      </Container>
    </>
  )
}

export default LocationsComponent
