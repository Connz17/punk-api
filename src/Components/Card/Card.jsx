import "./Card.scss"

import React from 'react'

const Card = ({name, tag, pic, food, abv, ibu}) => {


  return (
    <div className="beer-card">
      <h2>{name}</h2>
      <h4 className="beer__tag">{tag}</h4>
      <img className="beer__image" src={pic} alt={name}/>
      <h5>{food}</h5>
      <div className="beer__info">
        <h5>{abv}%</h5>
        <h5>{ibu} IBU</h5>
      </div>
      

    </div>
  )
}

export default Card