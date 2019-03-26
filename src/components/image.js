import React from "react"

function Image(props) {
  return (
    <img
      src={`https://sam-2019-03-27-cms.sam-thompson.info${props.src}`}
      alt={props.alt}
    />
  )
}

export default Image
