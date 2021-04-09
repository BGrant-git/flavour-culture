import React, { useState } from "react"
import styled from "styled-components"
import { Grid, useMediaQuery } from "@material-ui/core/"

import MapComponent from "./map"

import marketIcon from "src/images/home/marketicon.png"
import mapmarkerA from "src/images/home/map_marker_A.png"
import mapmarkerB from "src/images/home/map_marker_B.png"
import mapmarkerC from "src/images/home/map_marker_C.png"

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
  cursor: pointer;
  border-radius: 10px;
  transition: 0.1s ease-in-out;

  &:hover {
    background: #e4decb;
    padding: 10px;
  }

  @media (max-width: 960px) {
    &:hover {
      padding: 5px 0;
    }
  }
`

const Times = styled.p`
  font-size: 18px;
`

const VendorName = styled.h1`
  width: 100%;
  font-size: 42px;
  margin-bottom: -5px;
  text-align: center;
`

const VendorSubTitle = styled.p`
  text-align: center;
  padding-bottom: 10px;
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

const initialView = {
  loc: {
    lat: 51.47116539815708,
    lng: -0.204846863438927,
  },
  zoom: {
    z: 11,
  },
}

const handleLocClick = (setMapView, loc) => {
  switch (loc) {
    case 0:
      setMapView({
        loc: {
          lat: 51.48258,
          lng: -0.20022,
        },
        zoom: {
          z: 16,
        },
      })
      break
    case 1:
      setMapView({
        loc: {
          lat: 51.50799771795835,
          lng: -0.27228767069153964,
        },
        zoom: {
          z: 16,
        },
      })
      break
    case 2:
      setMapView({
        loc: {
          lat: 51.413216370457675,
          lng: -0.183425847287169,
        },
        zoom: {
          z: 18,
        },
      })
      break
  }

  setTimeout(() => {
    setMapView(initialView)
  }, 7000)
}

const mapStyles = matches => {
  if (matches) {
    return {
      width: "100%",
      height: "400px",
    }
  } else {
    return {
      width: "100%",
      height: "300px",
    }
  }
}

const LocationsComponent = () => {
  const matches = useMediaQuery("(max-width:960px)")

  const [mapView, setMapView] = useState(initialView)

  return (
    <Container>
      <MarketIcon src={marketIcon} alt="" />
      <Header>
        <h1>LOCATIONS</h1>
      </Header>
      <VendorContainer>
        <InfoContainer>
          <VendorName>BRATHAUS</VendorName>
          <VendorSubTitle>
            ({matches ? "tap" : "click"} on vendor to zoom)
          </VendorSubTitle>
          <InfoContainerGrid
            container
            onClick={() => handleLocClick(setMapView, 0)}
          >
            <Grid item xs={1}>
              <MapMarker src={mapmarkerA} alt="" />
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
                  Fulham SW6 1NW
                </p>
              </Address>
            </Grid>
          </InfoContainerGrid>
          <InfoContainerGrid
            container
            onClick={() => handleLocClick(setMapView, 1)}
          >
            <Grid item xs={1}>
              <MapMarker src={mapmarkerB} alt="" />
            </Grid>
            <Grid item xs={6} style={{ textAlign: "left" }}>
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
                  Acton W3 9NW
                </p>
              </Address>
            </Grid>
          </InfoContainerGrid>
          <InfoContainerGrid
            container
            onClick={() => handleLocClick(setMapView, 2)}
          >
            <Grid item xs={1}>
              <MapMarker src={mapmarkerC} alt="" />
            </Grid>
            <Grid item xs={6} style={{ textAlign: "left" }}>
              <strong>The Merton Apprentice</strong>
              <br />
              <Times>Friday - Saturday</Times>
              <Times>18.00 - 22.00</Times>
              <Times>Launched ---</Times>
            </Grid>
            <Grid item xs={5}>
              <Address>
                <p>
                  Merton Abbey Mills
                  <br />
                  SW19 2RD
                </p>
              </Address>
            </Grid>
          </InfoContainerGrid>
        </InfoContainer>

        <MapComponent mapStyles={mapStyles(matches)} mapView={mapView} />
      </VendorContainer>
    </Container>
  )
}

export default LocationsComponent
