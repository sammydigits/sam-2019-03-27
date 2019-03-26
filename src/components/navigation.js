import React from "react"
import { graphql, StaticQuery } from "gatsby"

const Navigation = () => (
  <StaticQuery
    query={graphql`
      query {
        allNodePage {
          edges {
            node {
              title
              drupal_internal__nid
              path {
                alias
              }
            }
          }
        }
      }
    `}
    render={data => <p>{data.allNodePage.edges[0].node.title}</p>}
  />
)

export default Navigation
