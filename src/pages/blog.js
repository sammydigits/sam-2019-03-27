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
        <>
          <h3>
            <Link to={edge.node.id}>{edge.node.title}</Link>
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
        </>
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
          id
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
