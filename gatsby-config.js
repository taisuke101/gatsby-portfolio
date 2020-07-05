/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: "Taisuke's Portfolio Site",
    description: "このサイトは山本泰佑のエンジニアとしての能力、活動などを公開していくサイトです",
    author: "@山本 泰佑",
    twitterUsername: "@たいたい@元海上自衛官のフロントエンジニア志望",
    image: "/projects-3.jpg",
    siteUrl: "https://uwattotaitai-portfolio.netlify.app",
  },
  plugins: [
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: `${__dirname}/src/assets/`,
      },
    },
    {
      resolve: `gatsby-source-strapi`,
      options: {
        apiURL: `http://localhost:1337`,
        queryLimit: 1000, // Default to 100
        //   contentTypes : `jobs`, `projects`, `blogs`,
        //   singleType : `about`
        //  ONLY ADD TO ARRAY IF YOU HAVE DATA IN STRAPI !!!!
        contentTypes: [`jobs`, `projects`, `blogs`],
        singleTypes: [`about`],
      },
    },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Roboto`,
            variants: [`400`, `700`],
          },
          {
            family: `Open Sans`,
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Taisuke Portfolio Site`,
        short_name: `TPS`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#2c8dba`,
        display: `standalone`,
        icon: `src/assets/favicon.png`
      }
    },
    `gatsby-plugin-offline`
  ],
}
