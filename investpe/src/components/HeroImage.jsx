import React from 'react'
import Heroimage from "../assets/Heroimage.png"
import "./Heroimage.css"
const HeroImage = () => {
  return (
    <div >
      <img className='heroimage' src={Heroimage}></img>
    </div>
  )
}

export default HeroImage
