import React from 'react'
import firstElipsImg from "../Assets/Ellipse 2063.png"
import quoteUp from "../Assets/noun-closed-quote-4376423 (1) 1.png"
import quoteDown from "../Assets/noun-closed-quote-4376423 (1) 6.png"
const ProfileCard2 = ({cardElipsImagesSec, nameAndPlaceSec}) => {
  return (
    <div style={{height : "300px", width : "15rem", background : "#f3f3f3", textAlign : "center", position : "relative"}}>
        {/* <div style={{marginTop : "-60px"}}></div> */}
      <div style={{width : "85%", margin : "auto", fontSize : "16px"}}> <p>Chhotastock has cool investment ideas, looking forward to see how the green energy basket does</p></div> 
        <p style={{width : "75%" , margin : "auto", textAlign : "center"}}>{nameAndPlaceSec}</p>
      <img src={quoteUp} alt='img' style={{position : "absolute", top : "0em" , left : "1em"}}/>
      <img src={quoteDown} alt='img' style={{position : "absolute", bottom : "10.6em" , right : "0.5em"}}/>
        <div style={{ position : "relative", bottom : "-20px"}}><img src={cardElipsImagesSec} alt="img"/></div>
    </div>
  )
}

export default ProfileCard2