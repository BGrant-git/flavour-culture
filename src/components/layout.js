import React, { Fragment } from "react"
import { Helmet } from "react-helmet"
import { StaticQuery, graphql } from "gatsby"
import styled from "styled-components"

import Navbar from "./Navbar/navbar"
import Footer from "./footer"

const Site = styled.div`
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  min-width: 100%;
`

const SiteContent = styled.div`
  flex-grow: 1;
  min-width: 100%;
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
        />
        <Site>
          <Navbar
            titleLink={data.site.siteMetadata.titleLink}
            menuLinks={data.site.siteMetadata.menuLinks}
          />
          <SiteContent
            style={{
              margin: "0 auto",
            }}
          >
            {children}
          </SiteContent>
          <Footer />
        </Site>
      </Fragment>
    )}
  />
)

export default Layout
