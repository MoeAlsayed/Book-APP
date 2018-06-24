import React from "react"

import "./style.css"

export const BookList = props => (
  <section className="book-list">
    <div className="book-list-header">
      <h2>{props.title}</h2>
      <a href="">View all</a>
    </div>

    <div className="book-list-container">{props.children}</div>
  </section>  
)