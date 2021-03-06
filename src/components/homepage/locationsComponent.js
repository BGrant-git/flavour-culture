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
  background-color: var(--eggshell);
  border-radius: 25px 25px 0 0;
  font-size: 22px;

  @media (max-width: 960px) {
    margin-right: 0;
  }
`

const Header = styled.div`
  border-radius: 25px 25px 0 0;
  background-color: var(--main-color);
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

const VendorContainer = styled.div`
  width: 100%;
`

const InfoContainer = styled.div`
  padding: 20px;
`

const InfoContainerGrid = styled(Grid)`
  padding: 5px 0;
`

const Times = styled.p`
  font-size: 18px;
`

const VendorName = styled.h1`
  width: 100%;
  font-size: 42px;
  margin-bottom: 10px;
  text-align: center;
`

const MapMarker = styled.img`
  height: 70px;
  margin-left: -5px;

  @media (max-width: 768px) {
    margin-left: -40%;
  }
`

const Address = styled.div`
  width: 100%;
  text-align: right;
`

const LocationsComponent = () => {
  const mapStyles = {
    width: "100%",
    height: "300px",
  }

  const bratLocation = {
    lat: 51.49868110373929,
    lng: -0.23894967099745187,
  }

  return (
    <Container>
      <MarketIcon src={require("../../images/home/marketicon.png")} alt="" />
      <Header>
        <h1>LOCATIONS</h1>
      </Header>
      <VendorContainer>
        <InfoContainer>
          <VendorName>BRATHAUS</VendorName>
          <InfoContainerGrid container>
            <Grid item xs={1}>
              <MapMarker
                src={require("../../images/home/map_marker_A.png")}
                alt=""
              />
            </Grid>
            <Grid item xs={6} style={{ textAlign: "left" }}>
              <strong>North End Rd. Market</strong>
              <br />
              <Times>Monday - Saturday</Times>
              <Times>10.00 - 16.00</Times>
              <Times>Launched 1st Feb 2021</Times>
            </Grid>
            <Grid item xs={5}>
              <Address>
                <p>
                  North End Road
                  <br />
                  Fulham SW6 1NS
                </p>
              </Address>
            </Grid>
          </InfoContainerGrid>
          <InfoContainerGrid container>
            <Grid item xs={1}>
              <MapMarker
                src={require("../../images/home/map_marker_B.png")}
                alt=""
              />
            </Grid>
            <Grid item xs={6}>
              <strong>Acton Market</strong>
              <br />
              <Times>Every Saturday</Times>
              <Times>10.00 - 16.00</Times>
              <Times style={{ color: "red" }}>Closed</Times>
            </Grid>
            <Grid item xs={5}>
              <Address>
                <p>
                  The Mount/King Street
                  <br />
                  Acton, W3 1NS
                </p>
              </Address>
            </Grid>
          </InfoContainerGrid>
        </InfoContainer>

        <MapComponent
          mapStyles={mapStyles}
          center={bratLocation}
          zoom={12}
          brat={bratLocation}
        />
      </VendorContainer>
    </Container>
  )
}

export default LocationsComponent
