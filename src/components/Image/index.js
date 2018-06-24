import React from "react"

export const Image = props => (
  <div className={props.imageClass}>
    <img src={props.img} alt="" />
  </div>
)