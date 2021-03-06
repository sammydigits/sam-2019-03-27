module.exports = {
  siteMetadata: {
    title: `ABC Architects`,
    description: `Example project using Drupal, Gatsby and GraphQL`,
    author: `@sammydigits`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-source-drupal`,
      options: {
        baseUrl: `https://sam-2019-03-27-cms.sam-thompson.info/`,
        apiBase: `api`,
      },
    },
    `gatsby-plugin-sass`,
  ],
}
