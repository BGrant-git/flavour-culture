import React, { Fragment } from 'react';
import { Helmet } from "react-helmet";
import { StaticQuery, graphql } from 'gatsby'

import Navbar from './Navbar/navbar'
import Footer from './footer'

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
          title={'Flavour Culture'}
          meta={[
            { name: 'Flavour Culture', content: 'Food, Dining, Cuisine' },
          ]}
        >
        </Helmet>
        <Navbar titleLink={data.site.siteMetadata.titleLink} menuLinks={data.site.siteMetadata.menuLinks} />
        <div
          style={{
            margin: '0 auto'
          }}
        >
          {children}
        </div>
        <Footer style={{display:'flex'}} />
      </Fragment>
    )}
  />
)

export default Layout