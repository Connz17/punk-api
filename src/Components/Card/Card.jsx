import "./Card.scss"

import React from 'react'
import { Link } from "react-router-dom"

const Card = ({name, tag, pic, food, abv, date, ph, beer}) => {


  return (
    <div className="beer-card">
      <h2>{name}</h2>
      <h4 className="beer__tag">{tag}</h4>
      <Link to={`/beer/${beer.id}`}>  
        <img className="beer__image" src={pic} alt={name}/>
      </Link>
      <h5>{food}</h5>
      <div className="beer__info">
        <h5>{abv}%</h5>
        <h5>Brewed {date}</h5>
        <h5>{ph} pH</h5>
      </div>
      

    </div>
  )
}

export default Card