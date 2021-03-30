import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
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
  margin-left: 25%;

  @media (max-width: 960px) {
    margin-left: auto;
  }
`

const BackButton = styled.button`
  margin: 20px 0 0 110px;
  background: white;

  @media (max-width: 960px) {
    margin: 50% 0 0 -50%;
  }
`

const Brathaus = () => {
  const data = useStaticQuery(graphql`
    query ImagesForBratGallery {
      allFile(filter: { relativeDirectory: { eq: "gallery/Brathaus" } }) {
        edges {
          node {
            childImageSharp {
              thumb: fluid(maxWidth: 500, maxHeight: 500, quality: 100) {
                ...GatsbyImageSharpFluid
                originalName
              }
              full: fluid(maxWidth: 2048, quality: 100) {
                ...GatsbyImageSharpFluid
                originalName
              }
            }
          }
        }
      }
    }
  `)

  // const images = data.allFile.edges.sort((a, b) => {
  //   const nameA = a.node.childImageSharp.full.originalName.toUpperCase()
  //   const nameB = b.node.childImageSharp.full.originalName.toUpperCase()

  //   if (nameA < nameB) {
  //     return -1
  //   }
  //   if (nameA > nameB) {
  //     return 1
  //   }
  //   return 0
  // })

  const captions = ["caption one", "caption two", "last caption"]

  const images = data.allFile.edges.map(({ node }, i) => ({
    ...node.childImageSharp,
    title: node.childImageSharp.thumb.originalName.replace(/\..+$/, ""),
    caption: `${i}`,
  }))

  return (
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
              <Title>Brathaus</Title>
            </TitleContainer>
            <Gallery images={images} captions={captions} />
          </div>
        </Grid>
        <Grid item xs={false} sm={2} />
      </Grid>
    </Layout>
  )
}

export default Brathaus
