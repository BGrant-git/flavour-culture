// gallery index
import React from "react"
import { Link } from "gatsby"
import { Grid, useMediaQuery } from "@material-ui/core/"
import styled from "styled-components"

import brathausThumb from "../../images/thumbnails/brat_thumb.jpg"
import btsThumb from "../../images/thumbnails/bts_thumb.jpg"
import naanThumb from "../../images/thumbnails/naan_thumb.jpg"
import StockImg from "../../images/thumbnails/naan-stock-img.jpg"

const GalleryContainer = styled.div`
  width: 100%;
  padding: 20px;
`

const Title = styled.h1`
  text-align: center;
  padding: 10px;
  font-size: 45px;
  font-family: "Thunder";
`

const AlbumsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const AlbumsLink = styled(Link)`
  width: 100%;
`

const AlbumsCard = styled.div`
  display: flex;
  justify-content: flex-start;
  height: 150px;
  background-color: var(--main-color);
  width: 100%;
  margin-top: 15px;
  transition: all 0.1s ease-out;
  -moz-transition: -moz-transform all 0.1s ease-out;
  overflow: hidden;
  text-align: left;

  :hover {
    transform: scale(1.1);
    -o-transform: scale(1.1);
    transition: all 0.1s ease-in;
    -moz-transition: -moz-transform all 0.1s ease-in;
  }
`

const CardTitle = styled.h1`
  display: flex;
  align-items: center;
  color: white;
  padding: 2vw;

  @media (max-width: 700px) {
    font-size: 25px;
  }
`

const GalleryPage = () => {
  const matches = useMediaQuery("(max-width: 600px")

  return (
    <Grid container>
      <Grid item sm={false} md={3} />
      <Grid item xs={12} sm={12} md={6}>
        <GalleryContainer>
          <Title>Gallery</Title>
          <AlbumsContainer>
            <AlbumsLink to="brathaus">
              <AlbumsCard style={{ borderRadius: "10px 10px 0 0" }}>
                <img src={brathausThumb} alt="" />
                <CardTitle style={{ fontFamily: "Sonder" }}>BRATHAUS</CardTitle>
              </AlbumsCard>
            </AlbumsLink>
            <AlbumsLink to="#">
              <AlbumsCard style={{ fontFamily: "TAKOYAKI" }}>
                <img
                  style={{ height: "150px", width: "150px" }}
                  src={StockImg}
                  alt=""
                />

                <CardTitle
                  style={matches ? { fontSize: "40px" } : { fontSize: "60px" }}
                >
                  Naan Stop - Coming Soon
                </CardTitle>
              </AlbumsCard>
            </AlbumsLink>
            <AlbumsLink to="fcc">
              <AlbumsCard>
                <img src={naanThumb} alt="" />
                <CardTitle style={{ fontFamily: "Montserrat" }}>
                  Flavour Culture Catering
                </CardTitle>
              </AlbumsCard>
            </AlbumsLink>
            <AlbumsLink to="bts">
              <AlbumsCard style={{ borderRadius: "0 0 10px 10px" }}>
                <img src={btsThumb} alt="" />
                <CardTitle>Behind The Scenes</CardTitle>
              </AlbumsCard>
            </AlbumsLink>
          </AlbumsContainer>
        </GalleryContainer>
      </Grid>
      <Grid item sm={false} md={3} />
      {matches ? null : (
        <Grid item sm={false} md={12}>
          <div style={{ height: 100 }}></div>
        </Grid>
      )}
    </Grid>
  )
}

export default GalleryPage
