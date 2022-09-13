import "./CardList.scss"

import React from 'react'
import Card from "../Card/Card"


const CardList = ({beers}) => {

  const cardJSX = beers.map((beer, index)=> {
    return (
      <div key={index}>
        <Card name={beer.name} tag={beer.tagline} pic={beer.image_url} food={beer.food_pairing.join(". ")} abv={beer.abv} ibu={beer.ibu}/>
      </div>
        
    )
   
})
  return (
    <div className="card-container">
        {cardJSX}
    </div>
  )
}

export default CardList