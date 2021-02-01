module.exports = {
  siteMetadata: {
    title: `Flavour Culture`,
    description: `Flavour Culture Catering, BRATHAUS Authentic German Sausages, Naan Stop Indian, UK`,
    url: "https://www.flavourculture.co.uk",
    image: "src/images/icon.png",
    titleLink: [
      {
        name: "Home",
        link: "/home",
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
      resolve: "gatsby-plugin-robots-txt",
      options: {
        host: "https://www.flavourculture.co.uk",
        sitemap: "https://www.flavourculture.co.uk",
        policy: [{ userAgent: "*", allow: "/" }],
      },
    },
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
    {
      resolve: "gatsby-plugin-anchor-links",
      options: {
        offset: -100,
      },
    },
  ],
}
