import React from "react"

import "./style.css"

export const StarRating = props => (
  <p className="star-rating">
    {!props.rating ? "" : starGenerator(props.rating)}
  </p>
)

function starGenerator(rating) {
  let totalStars = [];
  let inactiveStars = 5 - rating;

  for (let i = 0; i < rating; i++ ) {
    totalStars.push(
      <span className="active">★</span>
    )
  }

  for (let i = 0; i < inactiveStars; i++ ) {
    totalStars.push(
      <span className="inactive">★</span>
    )
  }

  return totalStars;
}