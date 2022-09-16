import "./BottomBanner.scss"
import bannerRight from "../../assets/images/BDG_1920x800.webp"
import bannerLeft from "../../assets/images/AB-Breweries-BrewDog-News-20200215-BrewDog-Redesigns-Packaging-Leaves-Fans-Divided-Banner.webp"

import React from 'react'

const BottomBanner = () => {
  return (
    <>
    <img className="banner-image" src={bannerRight} alt="" />
    <img className="banner-image" src={bannerLeft} alt="" />
    </>
  )
}

export default BottomBanner

