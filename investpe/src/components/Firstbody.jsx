import React from 'react'
import "./Firstbody.css"
import iphone from "../assets/iphone.png"
import bike from "../assets/bike.png"
import laptop from "../assets/laptop.png"
import laptop2 from "../assets/laptop2.png"
import featuresback from "../assets/featuresback.png"
import pepperfry from "../assets/pepperfry.png"
import apple from "../assets/apple.png"
import myntra from "../assets/myntra.png"
import bounce from "../assets/bounce.png"
import amazon from "../assets/amazon.png"
import chroma from "../assets/chroma.png"
import caratlane from "../assets/caratlane.png"
import easemytrip from "../assets/easemytrip.png"

const Firstbody = () => {
  return (
    <div className='firstbody-main' >
    <img src={featuresback} style={{position:"absolute",zIndex:"-1",top:"40px",width:"90%"}}></img>
    <div className='firstbosy-main-sub-1'>
        <p className='features-para1'>FEATURES</p>
        <p className='features-para2'>SAVE NOW. BUY LATER. SIMPLE & REALISTIC </p>
        <p className='features-para3'>Get what you love and save up over weeks or months to achieve it much lower price. Time & Flexibility on your side.</p>
        <div className='sub-1-sub'>
            <button className='getapp-btn'>Get the App</button>
            <p style={{textDecoration:"underline",fontWeight:"500"}}>Learn More</p>
        </div>
    </div>
    <div className='firstbosy-main-sub-2'>
    <img  className='brand-logo0' src={bounce}></img>
    <img  className='brand-logo1' src={apple}></img>
    <img  className='brand-logo2' src={myntra}></img>
    <img  className='brand-logo3' src={amazon}></img>
    <img  className='brand-logo4' src={chroma}></img>
    <img  className='brand-logo5' src={caratlane}></img>
    <img className='brand-logo6' src={easemytrip}></img>
    <img  className='brand-logo7' src={pepperfry}></img>
        <div className='sub-2-sub'>
        <img className='img1' src={bike}></img>
        <div  className='laptop-fix'>
    <img className='img2' src={laptop}></img>
    <img className='innerLaptop' src={laptop2}></img>
        </div>

    <img className='img3' src={iphone}></img>
        </div>
    </div>
    </div>
  )
}

export default Firstbody
