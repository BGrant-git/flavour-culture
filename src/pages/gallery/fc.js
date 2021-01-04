import React from "react"
import { StaticQuery, graphql, Link } from "gatsby"
import Grid from "@material-ui/core/Grid"
import styled from "styled-components"
import ArrowBackIcon from "@material-ui/icons/ArrowBack"

import Layout from "../../components/layout"

import Gallery from "@browniebroke/gatsby-image-gallery"
import "@browniebroke/gatsby-image-gallery/dist/style.css"

const TitleContainer = styled.div`
  padding: 20px;
  display: flex;
  width: 95%;
`

const Title = styled.h1`
  font-size: 45px;
  margin: auto;
  text-align: center;
`

const BTS = () => {
  return (
    <StaticQuery
      query={graphql`
        query ImagesForBTSGallery {
          allFile(filter: { relativeDirectory: { eq: "BTS" } }) {
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
              <div>
                <TitleContainer>
                  <Link style={{ marginTop: 20 }} to="/gallery">
                    <button style={{ cursor: "pointer" }}>
                      <ArrowBackIcon />
                    </button>
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

export default BTS
