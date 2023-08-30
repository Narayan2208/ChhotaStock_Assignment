import React from 'react'
import stack from "../assets/stack.png";
import backframe from "../assets/backframe.png";

import "./Investstack.css";
const Investstack = () => {
  return (
    <div className='investstack-main'>
      <img style={{width:"100%"}} src={backframe}></img>
      <img src={stack} className='groupimg'></img>
    </div>
  )
}

export default Investstack
