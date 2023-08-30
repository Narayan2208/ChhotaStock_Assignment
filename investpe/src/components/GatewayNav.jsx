import React from 'react'
import "./GatewayNav.css"
import InvestPe from "../assets/InvestPe.png"
import down from "../assets/down.png"
import { useNavigate } from 'react-router-dom'
const GatewayNav = ({setshownav,shownav}) => {
  let navigate=useNavigate();

  return (
    <div className='gateway-nav'>
      <div className='gatenav-sub1'>
        <div className='gatewaynav-child1'>
            <img src={InvestPe} onClick={()=>{
              navigate("/")
            }} style={{height:"80px",width:"250px", cursor: "pointer"}}></img>
        </div>
        <div className='gatewaynav-child2'>
            <div style={{display:"flex",alignItems:"center",textAlign:"center",fontSize:"18px",gap:"20px",padding:"0 10px",background:"white",borderRadius:"25px",height:"40px"}}>
                <p style={{color:"red"}}>gateway</p>
                <div style={{width:"15px",height:"15px",borderRadius:"50%",background:"#F05656",border:"2px solid yellow"}}></div>
            </div>
        </div>
      </div>





      <div className='gatenav-sub2'>
        <div className='gatewaynav-child3' style={{cursor : "pointer"}} onClick={()=>{
          setshownav(!shownav)
        }}>
            <p>Products</p>
            <img src={down}></img>
        </div>
        <div style={{cursor : "pointer"}} className='gatewaynav-child4'>
            <p>About Us</p>
        </div>
      </div>
    </div>
  )
}

export default GatewayNav
