import { graphql } from "gatsby"
import React from "react"
import Grid from "@material-ui/core/Grid"
import styled from "styled-components"

import Gallery from "@browniebroke/gatsby-image-gallery"
import "@browniebroke/gatsby-image-gallery/dist/style.css"

import Layout from "../components/layout"

const GalleryContainer = styled.div`
  width: 100%;
  margin: auto;
  padding: 20px;
`

const Title = styled.h1`
  text-align: center;
  padding: 15px;
  font-size: 45px;
`

const GalleryPage = ({ data }) => {
  const images = data.allFile.edges.map(({ node }) => node.childImageSharp)
  // `images` is an array of objects with `thumb` and `full`
  return (
    <Layout>
      <Grid container>
        <Grid item xs={false} sm={2} />
        <Grid item xs={12} sm={8}>
          <GalleryContainer>
            <Title>Gallery</Title>
            <Gallery images={images} />
          </GalleryContainer>
        </Grid>
        <Grid item xs={false} sm={2} />
      </Grid>
    </Layout>
  )
}

export const query = graphql`
  query ImagesForGallery {
    allFile {
      edges {
        node {
          childImageSharp {
            thumb: fluid(maxWidth: 300, maxHeight: 300) {
              ...GatsbyImageSharpFluid
            }
            full: fluid(maxWidth: 1024) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`

export default GalleryPage
