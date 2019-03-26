import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

const AboutPage = ({ data }) => {
  const { title, body, field_meta_tags, relationships } = data.nodePage

  return (
    <Layout>
      <SEO
        title={field_meta_tags.title}
        description={field_meta_tags.description}
        keywords={field_meta_tags.keywords}
      />
      <h1>{title}</h1>
      <div dangerouslySetInnerHTML={{ __html: body.processed }} />
      <Img
        fluid={relationships.field_main_image.localFile.childImageSharp.fluid}
      />
    </Layout>
  )
}

export default AboutPage
export const aboutPageQuery = graphql`
  query {
    nodePage(path: { alias: { eq: "/about" } }) {
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
