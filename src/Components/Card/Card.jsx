import "./Card.scss"

import React from 'react'

const Card = ({name, tag, pic, food, abv, ibu}) => {
  return (
    <div className="beer-card">
      <h3>{name}</h3>
      <h4>{tag}</h4>
      <img className="beer-card__image" src={pic} alt={name}/>
      <h5>{food}</h5>
      <h6>{abv} {ibu}</h6>

    </div>
  )
}

export default Card