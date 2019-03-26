import React from "react"
import { useStaticQuery, graphql } from "gatsby"

function Image(props) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            drupalImagesUrl
          }
        }
      }
    `
  )
  return (
    //use ES6 template literals
    <img
      src={`${site.siteMetadata.drupalImagesUrl}${props.src}`}
      alt={props.alt}
    />
  )
}

export default Image
