import React from 'react'
import firstElipsImg from "../Assets/Ellipse 2063.png"
import quoteUp from "../Assets/noun-closed-quote-4376423 (1) 1.png"
import quoteDown from "../Assets/noun-closed-quote-4376423 (1) 6.png"
const ProfileCard = ({cardElipsImages, nameAndPlace}) => {
  return (
    <div style={{height : "300px", width : "15rem", background : "#f3f3f3", textAlign : "center", position : "relative"}}>
        <div style={{ position : "relative", top : "-70px"}}><img src={cardElipsImages} alt="img"/></div>
        <div style={{marginTop : "-60px"}}></div>
        <p style={{width : "75%" , margin : "auto", textAlign : "center"}}>{nameAndPlace}</p>
      <div style={{width : "85%", margin : "auto"}}> <p>The onboarding experience on Chhotastock was very simple.. I did my first investment in equity market in less than 2 minutes</p></div> 
      <img src={quoteUp} alt='img' style={{position : "absolute", top : "7.7em" , left : "1em"}}/>
      <img src={quoteDown} alt='img' style={{position : "absolute", bottom : "1em" , right : "1em"}}/>
    </div>
  )
}

export default ProfileCard