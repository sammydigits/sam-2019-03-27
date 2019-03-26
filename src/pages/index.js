import React from "react"
import { Link } from "gatsby"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
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
      <h1>{title}</h1>
      <div dangerouslySetInnerHTML={{ __html: body.processed }} />
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image src={relationships.field_main_image.uri.url} alt={title} />
      </div>
      <Link to="/page-2/">Go to page 2</Link>
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
          uri {
            url
          }
        }
      }
    }
  }
`
