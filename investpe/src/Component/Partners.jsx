import React from 'react'
import kotak from '../Assets/image 12.png'
import angelOne from '../Assets/image 13.png'
import upstock from '../Assets/image 14.png'
import IMFIx from '../Assets/image 15.png'
import lendbox from '../Assets/image 16.png'
import liqui from '../Assets/image 17.png'
import siply from '../Assets/image 3.png'
import jupiter from '../Assets/image 4.png'
const Partners = () => {
  return (
  <>
  <div style={{display : "flex"}}>
    <div style={{display : "flex", flexDirection : "column", justifyContent : 'space-between', width : "25%", }}>
        <div><p>Some partners who make <br/> InvestPe products possible—</p></div>
        <div><p style={{color : "#777", fontWeight  : "500"}}>...and a few of the <br/> businesses  building some <br/> incredible solutions with <br/> InvestPe</p></div>
    </div>
    <div>
    <div style={{display : "grid",gridTemplateColumns : "repeat(3, 1fr)"}}>
       <div style={{width : "60%"}}><img src={kotak} alt="img"width = "100%" /> </div> 
       <div style={{width : "60%"}}><img src={angelOne} alt="img" width = "100%" /> </div> 
       <div style={{width : "50%"}}><img src={upstock} alt="img" width = "100%" /> </div> 
       <div style={{width : "25%"}}> <img src={IMFIx} alt="img" width = "100%" /></div> 
       <div style={{width : "30%"}}> <img src={lendbox} alt="img" width = "100%" /></div> 
       <div style={{width : "60%"}}>  <img src={liqui} alt="img" width = "100%" /></div>
       
    </div>
    <div style={{display : "flex", width : "32%", justifyContent : "space-between"}}>
        <div style={{background : "#B1B1B1",width : "25%", textAlign : "center" , padding : "15px", borderRadius : "30px" }}><img src={siply} alt="img" width={"100%"}/> </div> 
       <div style={{background : "#B1B1B1",width : "25%", textAlign : "center" , padding : "15px", borderRadius : "30px" }}><img src={jupiter} alt="img" width={"100%"}/> </div> </div>
    </div>
  </div>
  </>
  )
}

export default Partners