import React from "react"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Blog = ({ data }) => {
  return (
    <Layout>
      <SEO
        title="Blog"
        description="Our Company Blog"
        keywords="Drupal, React, Gatsby, GraphQL"
      />
      <h2>Our Company Blog</h2>
      <div className="blog">
        {data.allNodeArticle.edges.map(edge => (
          <div className="card">
            <small>
              <em>{edge.node.created}</em>
            </small>
            <h3>
              <Link to={`blog/${edge.node.drupal_internal__nid}`}>
                {edge.node.title}
              </Link>
            </h3>
            <Link to={`blog/${edge.node.drupal_internal__nid}`}>
              <Img
                fluid={
                  edge.node.relationships.field_image.localFile.childImageSharp
                    .fluid
                }
              />
            </Link>
          </div>
        ))}
      </div>
    </Layout>
  )
}

export default Blog
export const blogQuery = graphql`
  query {
    allNodeArticle(sort: { fields: [created], order: DESC }) {
      edges {
        node {
          drupal_internal__nid
          title
          created(formatString: "MMMM DD, YYYY")
          relationships {
            field_image {
              localFile {
                childImageSharp {
                  fluid(maxWidth: 600, quality: 100) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`
