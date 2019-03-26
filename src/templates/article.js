import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Img from "gatsby-image"

export default ({ data }) => {
  const post = data.nodeArticle
  return (
    <Layout>
      <div>
        <h1>{post.title}</h1>
        <small>
          <em>{post.created}</em>
        </small>
        <div
          style={{ maxWidth: `900px`, marginBottom: `1.45rem`, width: `100%` }}
        >
          <Img
            fluid={
              post.relationships.field_image.localFile.childImageSharp.fluid
            }
          />
        </div>
        <div dangerouslySetInnerHTML={{ __html: post.body.value }} />
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
              fluid(maxWidth: 400, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
`
