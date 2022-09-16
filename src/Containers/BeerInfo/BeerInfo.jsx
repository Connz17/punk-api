import "./BeerInfo.scss"
import React from 'react'
import { useParams } from "react-router";

const BeerInfo = ({beers}) => {

const {beerId} = useParams();
console.log(beerId);

const clickedBeer = beers.filter((beer) => beer.id == beerId)
  
console.log(clickedBeer[0].id);




  return (
    <>
  <section className="beer-page">   
    <div className="tips">
        <h2>Beer Tips:</h2>
          <h3>Brewers tips</h3>
          <p>{clickedBeer[0].brewers_tips}</p><br />
          <h3>Goes great with these foods:</h3>
          <p>{clickedBeer[0].food_pairing.join(". ")}</p><br />
          <h2>Beer Info:</h2>
          <p>ABV: {clickedBeer[0].abv}%</p>
          <p>pH: {clickedBeer[0].ph}</p>
          <p>IBU: {clickedBeer[0].ibu}</p>
          <p>SRM: {clickedBeer[0].srm}</p>
    </div>
    <div className="choice">
      <h1>{clickedBeer[0].name}</h1><br />
      <h3 className="tag">{clickedBeer[0].tagline}</h3><br />
      <img className="choice__image" src={clickedBeer[0].image_url} alt="" />
      
    </div>
    <div className="info">
      <h2>Beer description</h2>
      <p>{clickedBeer[0].description}</p> 
    </div>
  </section>
    </>
  )
}

export default BeerInfo