import "./BottomBanner.scss"
import bannerRight from "../../assets/images/BDG_1920x800.webp"
import bannerLeft from "../../assets/images/AB.webp"

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

