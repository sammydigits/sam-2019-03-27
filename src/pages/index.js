import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import GenericContent from "../components/generic-content"

const IndexPage = ({ data }) => {
  const { title, body, field_meta_tags, relationships } = data.nodePage

  return (
    <Layout>
      <SEO
        title={field_meta_tags.title}
        description={field_meta_tags.description}
        keywords={field_meta_tags.keywords}
      />
      <GenericContent
        image={relationships.field_main_image.localFile.childImageSharp.fluid}
        title={title}
        body={body.processed}
      />
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
