import "./Card.scss"

import React from 'react'
import { Link } from "react-router-dom"

const Card = ({name, pic, abv, ibu, ph, beer}) => {


  return (
    <div className="beer-card">
      <h2 className="beer-name">{name}</h2> <br />
      <Link to={`/beer/${beer.id}`}>  
        <img className="beer__image" src={pic} alt={name}/>
      </Link> <br />
      <div className="beer__info">
        <h5>{abv}%</h5>
        <h5>IBU {ibu}</h5>
        <h5>{ph} pH</h5>
      </div>
      
    </div>
  )
}

export default Card