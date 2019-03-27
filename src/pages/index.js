import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = ({ data }) => {
  const { title, body, field_meta_tags, relationships } = data.nodePage

  return (
    <Layout>
      <SEO
        title={field_meta_tags.title}
        description={field_meta_tags.description}
        keywords={field_meta_tags.keywords}
      />
      <div className="generic">
        <div>
          <Img
            fluid={
              relationships.field_main_image.localFile.childImageSharp.fluid
            }
          />
        </div>
        <div className="content">
          <h2>{title}</h2>
          <div dangerouslySetInnerHTML={{ __html: body.processed }} />
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage
export const indexPageQuery = graphql`
  query {
    nodePage(path: { alias: { eq: "/" } }) {
      id
      title
      path {
        alias
        langcode
      }
      body {
        processed
      }
      field_meta_tags {
        title
        description
        keywords
      }
      relationships {
        field_main_image {
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
