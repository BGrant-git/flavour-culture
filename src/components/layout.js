import React, { Fragment } from "react"
import { Helmet } from "react-helmet"
import { StaticQuery, graphql } from "gatsby"
import styled from "styled-components"

import Navbar from "./Navbar/navbar"
import Footer from "./footer"

export const ContentContainer = styled.div`
  margin: 0 auto;
  min-height: calc(100vh - 155px);
`

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            titleLink {
              name
              link
            }
            menuLinks {
              name
              link
            }
          }
        }
      }
    `}
    render={data => (
      <Fragment>
        <Helmet
          title={"Flavour Culture"}
          meta={[{ name: "Flavour Culture", content: "Food, Dining, Cuisine" }]}
        ></Helmet>
        <Navbar
          titleLink={data.site.siteMetadata.titleLink}
          menuLinks={data.site.siteMetadata.menuLinks}
        />
        <ContentContainer
          style={{
            margin: "0 auto",
          }}
        >
          {children}
        </ContentContainer>
        <Footer />
      </Fragment>
    )}
  />
)

export default Layout
