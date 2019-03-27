import React from "react"
import Img from "gatsby-image"

function GenericContent(props) {
  return (
    <div className="generic">
      <div>
        <Img fluid={props.image} />
      </div>
      <div className="content">
        <h2>{props.title}</h2>
        <div dangerouslySetInnerHTML={{ __html: props.body }} />
      </div>
    </div>
  )
}

export default GenericContent
