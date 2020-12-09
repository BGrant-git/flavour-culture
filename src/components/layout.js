import React from 'react';
import { Helmet } from "react-helmet";
import { StaticQuery, graphql } from 'gatsby'

import Header from './header'

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
      <React.Fragment>
        <Helmet
          title={'Flavour Culture'}
          meta={[
            { name: 'Flavour Culture', content: 'Food, Dining, Cuisine' },
          ]}
        >
        </Helmet>
        <Header titleLink={data.site.siteMetadata.titleLink} menuLinks={data.site.siteMetadata.menuLinks} />
        <div
          style={{
            margin: '0 auto'
          }}
        >
          {children}
        </div>
      </React.Fragment>
    )}
  />
)

export default Layout