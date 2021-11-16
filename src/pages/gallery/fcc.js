import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import Grid from "@material-ui/core/Grid"
import styled from "styled-components"
import ArrowBackIcon from "@material-ui/icons/ArrowBack"
import Gallery from "@browniebroke/gatsby-image-gallery"

const TitleContainer = styled.div`
  padding: 20px;
  display: flex;
  width: 95%;
  text-align: left;
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

const Fcc = () => {
  const data = useStaticQuery(graphql`
    query ImagesForFCCGallery {
      allFile(filter: { relativeDirectory: { eq: "gallery/FCC" } }) {
        edges {
          node {
            childImageSharp {
              thumb: gatsbyImageData(width: 270, height: 270)
              full: gatsbyImageData(layout: FULL_WIDTH)
            }
          }
        }
      }
    }
  `)

  return (
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
            <Title>Flavour Culture Catering</Title>
          </TitleContainer>
          <Gallery
            mdColWidth={33.33}
            images={data.allFile.edges.map(({ node }) => node.childImageSharp)}
          />
        </div>
      </Grid>
      <Grid item xs={false} sm={2} />
    </Grid>
  )
}

export default Fcc
