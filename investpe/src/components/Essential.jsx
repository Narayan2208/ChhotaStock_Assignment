import React from 'react'
import Rectangle12 from "../assets/Rectangle12.png"
import graph1 from "../assets/graph1.png"
import graph2 from "../assets/graph2.png"
import graph3 from "../assets/graph3.png"
import coin from "../assets/coin.png"
import pie from "../assets/pie.png"
import essentialtxt1 from "../assets/essentialtxt1.png"
import essentialtxt2 from "../assets/essentialtxt2.png"
import bulb from "../assets/bulb.png"
import "./Essential.css"

const Essential = () => {
  return (
    <div className='essential-main'>

      <img style={{width:"90%",margin:"auto",display:'block'}}  src={Rectangle12}></img>
    <img className='graph1' src={graph1}></img>
    <img className='graph2' src={graph2}></img>
    <img className='graph3' src={graph3}></img>
    <img className='pie' src={pie}></img>
    <img className='coin' src={coin}></img>
    <img className='essentialtxt1' src={essentialtxt1}></img>
    <img className="essentialtxt2" src={essentialtxt2}></img>
    <img className='bulb' src={bulb}></img>

    <div className='essential-btn-text'>
<button>Get started now</button>
<p>See all features</p>
    </div>
    </div>
  )
}

export default Essential
