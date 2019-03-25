import React from "react"
import { Link } from "gatsby"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = ({ data }) => {
  const { title, body } = data.nodePage

  return (
    <Layout>
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
      <h1>{title}</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>{body.processed}</p>
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image />
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
    }
  }
`
