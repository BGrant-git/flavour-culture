module.exports = {
  siteMetadata: {
    title: `Flavour Culture`,
    description: `Culture of Flavour`,
    author: `BenG`,
    titleLink: [
      {
        name: "Home",
        link: "/",
      },
    ],
    menuLinks: [
      {
        name: "Vendors",
        link: "/vendors",
      },
      {
        name: "Our Story",
        link: "/about",
      },
      {
        name: "Gallery",
        link: "/gallery/",
      },

      {
        name: "Contact",
        link: "/contact",
      },
    ],
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
        path: `${__dirname}/content/`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Flavour Culture`,
        short_name: `FlavourCulture`,
        start_url: `/`,
        display: `standalone`,
        icon: `src/images/icon.png`,
      },
    },
  ],
}
