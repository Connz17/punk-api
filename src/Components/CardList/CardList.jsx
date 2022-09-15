import "./CardList.scss"

import React from 'react'
import Card from "../Card/Card"


const CardList = ({searchedBeer}) => {

  const cardJSX = searchedBeer.map((beer, index)=> {
    return (
      <div key={index}>
        <Card beer={beer} ph={beer.ph} name={beer.name} tag={beer.tagline} pic={beer.image_url} abv={beer.abv} ibu={beer.ibu}/>
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