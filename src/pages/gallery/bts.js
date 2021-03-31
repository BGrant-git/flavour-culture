import React from "react"
import { StaticQuery, graphql, Link } from "gatsby"
import Grid from "@material-ui/core/Grid"
import styled from "styled-components"
import ArrowBackIcon from "@material-ui/icons/ArrowBack"
import Gallery from "@browniebroke/gatsby-image-gallery"

import Layout from "../../components/layout"

const TitleContainer = styled.div`
  padding: 20px;
  display: flex;
  width: 95%;
`

const Title = styled.h1`
  font-size: 45px;
  margin: auto;
  margin-left: 25%;

  @media (max-width: 960px) {
    margin-left: auto;
  }
`

const BackButton = styled.button`
  margin: 20px -200px 0 110px;
  background: white;

  @media (max-width: 960px) {
    margin: 50% 0 0 -50%;
  }
`

const Bts = () => {
  return (
    <StaticQuery
      query={graphql`
        query ImagesForBTSGallery {
          allFile(filter: { relativeDirectory: { eq: "gallery/BTS" } }) {
            edges {
              node {
                childImageSharp {
                  thumb: fluid(maxWidth: 300, maxHeight: 300) {
                    ...GatsbyImageSharpFluid
                  }
                  full: fluid(maxWidth: 2048, quality: 100) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
        }
      `}
      render={data => (
        <Layout>
          <Grid container>
            <Grid item xs={false} sm={2} />
            <Grid item xs={12} sm={8}>
              <div style={{ paddingBottom: "10px" }}>
                <TitleContainer>
                  <Link to="/gallery">
                    <BackButton style={{ cursor: "pointer" }}>
                      <ArrowBackIcon />
                    </BackButton>
                  </Link>
                  <Title>Behind The Scenes</Title>
                </TitleContainer>
                <Gallery
                  images={data.allFile.edges.map(
                    ({ node }) => node.childImageSharp
                  )}
                />
              </div>
            </Grid>
            <Grid item xs={false} sm={2} />
          </Grid>
        </Layout>
      )}
    />
  )
}

export default Bts
