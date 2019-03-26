/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require(`path`)

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  return graphql(`
    {
      allNodeArticle {
        edges {
          node {
            drupal_internal__nid
          }
        }
      }
    }
  `).then(result => {
    result.data.allNodeArticle.edges.forEach(({ node }) => {
      createPage({
        path: `/blog/${node.drupal_internal__nid}/`,
        component: path.resolve(`./src/templates/article.js`),
        context: {
          drupal_internal__nid: node.drupal_internal__nid,
        },
      })
    })
  })
}
