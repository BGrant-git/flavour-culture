module.exports = {
  siteMetadata: {
    title: `Flavour Culture`,
    description: `Culture of Flavour`,
    author: `BenG`,
    titleLink: [
      {
        name: 'FLAVOUR CULTURE',
        link: ''
      },
    ],
    menuLinks: [      
      {
        name: 'Our Story',
        link: '/about'
      },
      {
        name: 'Contact',
        link: '/contact'
      },
      {
        name: 'Locations',
        link: '/locations'
      }
    ]
  },
  plugins: [
    `gatsby-plugin-breakpoints`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    }, {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/images/carousel-images`,
        name: "carousel",
      }
    }
  ],
}
