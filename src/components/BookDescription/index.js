import React from "react"

export const BookDescription = props => {
  return (!props.author && !props.rating && !props.title) ? (
    ""
  ) : (
    <div className="book-description">
      {!props.title  ? "" : <h3>{props.title}</h3>}
      {!props.author ? "" : <p>{props.author}</p>}
      {props.children}
    </div>
  )
}