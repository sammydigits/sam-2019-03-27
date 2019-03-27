import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Img from "gatsby-image"
import SEO from "../components/seo"

export default ({ data }) => {
  const post = data.nodeArticle

  function createMetaDescription() {
    // strip html and reduce string length to 150 chars (recommended for SEO)
    return post.body.value.replace(/<[^>]+>/g, "").substr(0, 150)
  }

  return (
    <Layout>
      <SEO title={post.title} description={createMetaDescription()} />
      <div className="article">
        <div className="image">
          <Img
            fluid={
              post.relationships.field_image.localFile.childImageSharp.fluid
            }
          />
        </div>
        <div className="content">
          <h2>{post.title}</h2>
          <small>
            <em>{post.created}</em>
          </small>
          <div dangerouslySetInnerHTML={{ __html: post.body.value }} />
        </div>
      </div>
    </Layout>
  )
}

//drupal_internal__nid is stored in Context by createPage function in gatsby-node.js
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
