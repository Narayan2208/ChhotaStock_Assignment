import React from 'react'
import "./Partners.css";
 import kotak from "../assets/kotak.png"
 import liquiloans from "../assets/liquiloans.png"
 import angleone from "../assets/angleone.png"
 import upstox from "../assets/upstox.png"
 import amfi from "../assets/amfi.png"
 import lendbox from "../assets/lendbox.png"
 import jupiter from "../assets/jupiter.png"
 import siply from "../assets/siply.png"
const Partners = () => {
  return (
    <>
    <div className='partners-main'>
      <div className='partners-sub1'>
        <div>
            <p>Some partners who make<br></br> InvestPe products possible—</p>
        </div>
        <div>
            <p style={{marginTop:"170px"}}>...and a few of the<br></br> businesses building some<br></br> incredible solutions with<br></br> InvestPe</p>
        </div>
      </div>

      <div className='partners-sub2'>
        <div className='partners-banks'>
            <img className='bank1' src={kotak}></img>
            <img className='bank2' src={angleone}></img>
            <img className='bank3' src={upstox}></img>
</div>
    <div className='partners-banks'>
             <img className='bank4' src={amfi}></img>
            <img className='bank5' src={lendbox}></img>
            <img className='bank6' src={liquiloans}></img>
    </div>
    <div className='two-logos'>
        <img src={siply}></img>
        <img src={jupiter}></img>
    </div>
    
      </div>
    </div>
    <hr  className='horizontal-line2'></hr>
    </>
  )
}

export default Partners
