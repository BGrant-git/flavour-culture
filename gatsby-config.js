require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

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
      {
        name: "Shop",
        link: "/shop",
      },
    ],
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "G-JZR3MHL4QT",
      },
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: [
          "G-JZR3MHL4QT", // Google Analytics / GA
        ],
        // This object gets passed directly to the gtag config command
        // This config will be shared across all trackingIds
        gtagConfig: {
          anonymize_ip: true,
          cookie_expires: 0,
        },
        // This object is used for configuration specific to this plugin
        pluginConfig: {
          // Puts tracking script in the head instead of the body
          head: true,
          // Setting this parameter is also optional
          respectDNT: true,
          // Avoids sending pageview hits from custom paths
          exclude: ["/preview/**", "/do-not-track/me/too/"],
        },
      },
    },
    `gatsby-plugin-breakpoints`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-anchor-links`,
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
      resolve: `gatsby-source-google-places`,
      options: {
        placeIds: ["ChIJC78FrtMPdkgRVNANhmuxKJ0"],
        apiKey: process.env.GATSBY_GOOGLE_API_KEY,
        language: "en-GB", // optional, defaults to en-US
      },
    },
  ],
}
