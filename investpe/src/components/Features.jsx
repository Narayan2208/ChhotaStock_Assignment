import React from 'react'
import "./Features.css"
import shield from "../assets/shield.png"
import updown from "../assets/updown.png"
import moli from "../assets/moli.png"
import circle from "../assets/circle.png"

const Features = () => {
  return (
    <div className='features-main'>
    <div className='features-child1'>
        <p style={{color:"#28B570"}}>FEATURES</p>
        <p className='heading-features'>Launch the most Engaging Invest-Tech Solutions</p>
        <p style={{color:"#777777",fontSize:"18px",fontWeight:"500"}}>We offer a suite of B2B Invest-tech solutions,<br></br> that are cost-effective way to offer an <br></br>engaging investment experience to your<br></br> customers, with a faster time to market</p>
    <div style={{display:"flex",alignItems:"center",gap:"40px",marginTop:"40px"}}>
        <button className='getstarted-btn'>Get Started</button>
        <p style={{textDecoration:"underline",fontWeight:"500"}}>Learn More</p>
    </div>
    </div>
    
    
    
    
    <div className='features-child2'>
        <div className='div1'>
            <p className='div1-head headings'>Protection</p>
            <img src={shield} className='div1-img imgs'></img>
            <p className='div1-para paras'>Data protection <br></br>guarentees</p>
        </div>
        <div className='div2'>
        <p className='div1-head headings-x'>Tracking</p>
            <img src={updown} className='div1-img imgs-x'></img>
            <p className='div1-para paras-x'>Track all your users’<br></br> financial transactions</p>
        </div>
        <div className='div3'>
        <p className='div1-head headings'>Flexibility</p>
            <img src={circle} className='div1-img imgs'></img>
            <p className='div1-para paras'>Custom made for your<br></br> requirements</p>
        </div>
        <div className='div4'>
        <p className='div1-head headings'>Easiness</p>
            <img src={moli} className='div1-img imgs'></img>
            <p className='div1-para paras'>Go-to market in less<br></br> than 7 days</p>
        </div>
    </div>  
    </div>
  )
}

export default Features
