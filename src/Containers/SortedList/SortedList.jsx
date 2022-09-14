import "./SortedList.scss";
import Card from "../../Components/Card/Card";
import "../../Components/CardList/CardList.scss"

import React from 'react'

const SortedList = ({beers}) => {

const sortedJSX = beers.map((beer, index)=> {
    return (
        <div key={index}>
            <Card beer={beer} name={beer.name} tag={beer.tagline} pic={beer.image_url} food={beer.food_pairing.join(". ")} abv={beer.abv} date={beer.first_brewed} ph={beer.ph}/>
        </div>
        )
    })

  return (
    <div className="card-container">
        {sortedJSX}
    </div>
  )
}

export default SortedList