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

      {data.allNodeArticle.edges.map(edge => (
        <div className="post">
          <h3>
            <Link to={`blog/${edge.node.drupal_internal__nid}`}>
              {edge.node.title}
            </Link>
          </h3>
          <small>
            <em>{edge.node.created}</em>
          </small>
          <div
            style={{
              maxWidth: `300px`,
              marginBottom: `1.45rem`,
              width: `100%`,
            }}
          >
            <Img
              fluid={
                edge.node.relationships.field_image.localFile.childImageSharp
                  .fluid
              }
            />
          </div>
        </div>
      ))}
    </Layout>
  )
}

export default Blog
export const blogQuery = graphql`
  query {
    allNodeArticle {
      edges {
        node {
          drupal_internal__nid
          title
          created(formatString: "MMMM DD, YYYY")
          relationships {
            field_image {
              localFile {
                childImageSharp {
                  fluid(maxWidth: 400, quality: 100) {
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
