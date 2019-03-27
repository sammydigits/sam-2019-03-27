import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Img from "gatsby-image"

export default ({ data }) => {
  const post = data.nodeArticle
  return (
    <Layout>
      <div className="article">
        <div className="image">
          <Img
            fluid={
              post.relationships.field_image.localFile.childImageSharp.fluid
            }
          />
        </div>
        <div className="content">
          <h1>{post.title}</h1>
          <small>
            <em>{post.created}</em>
          </small>

          <div
            className="body"
            dangerouslySetInnerHTML={{ __html: post.body.value }}
          />
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($drupal_internal__nid: Int!) {
    nodeArticle(drupal_internal__nid: { eq: $drupal_internal__nid }) {
      drupal_internal__nid
      title
      body {
        value
      }
      created(formatString: "MMMM DD, YYYY")
      relationships {
        field_image {
          localFile {
            childImageSharp {
              fluid(maxWidth: 250, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
`
