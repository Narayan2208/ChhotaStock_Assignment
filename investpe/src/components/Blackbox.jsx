import React from 'react'
import "./Blackbox.css";
import Rectangle12 from "../assets/Rectangle12.png";
import head1 from "../assets/head1.png";
import hand from "../assets/hand.png";
const Blackbg = () => {
  return (
    <div className='blackbg-main'>
      <img src={Rectangle12} className='blackbg-sub-bg'></img>
      <img src={head1} style={{width:"50%",left:"250px",top:"50px",zIndex:"5"}} className='head1'></img>
      <p className='para-black'>We help brokers, wealth managers, fund managers & other<br></br> businesses / startups server their customers better with our <br></br>suite of modern digital investment stack</p>
    <button className='button-x'>Try Investpe Now</button>
    <img src={hand} className={"hand"} style={{width:"450px",position:"absolute",top:"10px",right:"120px"}}></img>
    </div>
  )
}

export default Blackbg
