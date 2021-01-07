// gallery index
import { Link } from "gatsby"
import React from "react"
import Grid from "@material-ui/core/Grid"
import styled from "styled-components"

import Layout from "../../components/layout"

import brathausThumb from "../../images/thumbnails/brat_thumb.jpg"
import btsThumb from "../../images/thumbnails/bts_thumb.jpg"
import naanThumb from "../../images/thumbnails/naan_thumb.jpg"

const GalleryContainer = styled.div`
  width: 100%;
  padding: 20px;
`

const Title = styled.h1`
  text-align: center;
  padding: 10px;
  font-size: 45px;
`

const AlbumsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const AlbumsLink = styled(Link)`
  width: 100%;
  text-decoration: none;
`

const AlbumsCard = styled.div`
  display: flex;
  justify-content: flex-start;
  height: 150px;
  background-color: white;
  width: 100%;
  margin-top: 15px;
  cursor: pointer;
  transition: all 0.1s ease-out;
  -moz-transition: -moz-transform all 0.1s ease-out;
  overflow: hidden;

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
  color: black;
  padding-left: 2vw;

  @media (max-width: 700px) {
    font-size: 25px;
  }
`

const GalleryPage = () => {
  return (
    <Layout>
      <Grid container>
        <Grid item sm={false} md={3} />
        <Grid item xs={12} sm={12} md={6}>
          <GalleryContainer>
            <Title>Gallery</Title>
            <AlbumsContainer>
              <AlbumsLink to="brathaus">
                <AlbumsCard>
                  <img src={brathausThumb} alt="" />
                  <CardTitle>Brathaus</CardTitle>
                </AlbumsCard>
              </AlbumsLink>
              <AlbumsLink to="naanstop">
                <AlbumsCard>
                  <img src={naanThumb} alt="" />
                  <CardTitle>Naan Stop</CardTitle>
                </AlbumsCard>
              </AlbumsLink>
              <AlbumsLink to="fc">
                <AlbumsCard>
                  <img src={btsThumb} alt="" />
                  <CardTitle>Behind The Scenes</CardTitle>
                </AlbumsCard>
              </AlbumsLink>
            </AlbumsContainer>
          </GalleryContainer>
        </Grid>
        <Grid item sm={false} md={3} />
        <Grid item sm={false} md={12}>
          <div style={{ height: 200 }}></div>
        </Grid>
      </Grid>
    </Layout>
  )
}

export default GalleryPage
