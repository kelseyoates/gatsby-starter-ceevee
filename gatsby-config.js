module.exports = {
  siteMetadata: {
    title: "South Shore Laboratory Consultants",
    author: "Kelsey Oates",
    description: "SSLC provides lab consulting for point of care testing, doctors' offices, and biotechs."
  },
  pathPrefix: "/",
  plugins: [
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography.js`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`
      }
    },

    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-87569401-3",
        // Setting this parameter is optional
        anonymize: true,
      },
    },
    
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`muli`, `lato`]
      }
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 630
            }
          },
          "gatsby-remark-copy-linked-files"
        ]
      }
    },

    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`
    
  ]
};
