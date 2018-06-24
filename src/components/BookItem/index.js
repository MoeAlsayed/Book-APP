import React from "react"

import "./style.css"

import {Image} from "../Image"
import {BookDescription} from "../BookDescription"
import {StarRating} from "../StarRating"

export const BookItem = props => (
  <div className={!props.layout ? "book-item" : "book-item " + props.layout}>

    <Image img={props.img} imageClass="book-image" />

    <BookDescription title={props.title} author={props.author} rating={props.rating}>
      <StarRating rating={props.rating} />
    </BookDescription>
  </div>
)