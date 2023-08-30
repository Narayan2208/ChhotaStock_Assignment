import React from 'react'
import fb from "../assets/facebook.png";
import play from "../assets/googlePlay.png"
import invest from "../assets/InvestPe.png"
import youtube from "../assets/youtube.png"
import insta from "../assets/insta.png"
import twitter from "../assets/twitter.png"
import "./Footer.css"

const Footer = () => {
  return (
    <div style={{background: "#171E27",height:"100vh",padding:"20px  0",marginTop:"30px"}}>
          <div className="App" style={{color:'white', padding:'0 120px'}}>
       <div className='div-1' style={{marginLeft:'-58px', marginBottom:"40px"}}>
        <img src={invest} alt="invest"/>
       </div>

       <div className='div-2' style={{display:"flex",justifyContent:"space-between"}}>
        <div>
          <p style={{marginBottom:"20px"}}>Contact Us</p>
          <p className='div-4'>8089225625</p>
          <p className='div-4'>contact@chhotastock.com</p>
        </div>

        <div>
          <p style={{marginBottom:"20px"}}>Company</p>
          <p className='div-4'>About Us</p> 
          <p className='div-4'>Privacy policy</p>
          <p className='div-4'>Terms and Conditions</p> 
        </div>

        <div>
          <p style={{marginBottom:"20px"}}>Quick Links</p>
          <p className='div-4'>Home </p>  
          <p className='div-4'>Gateway </p>
          <p className='div-4'>Blog</p>
        </div>

        <div style={{margin:"15px 0"}}>
           <img className='play' src={play} alt=""/>
        </div>
        <div>
          
        </div>
        
       </div>

       <div className='div-3' style={{ width:"400px", margin:"80px 0"}}>
         <p style={{margin:'20px 0'}}>Find Us On</p>
         <div className='logos' style={{display:"flex" ,gap:"30px",alignItems:"center"}}>
         <img src={fb} alt="fb"/>
         <img src={youtube} alt="y"/>
         <img src={insta} alt="i"/>
         <img src={twitter} alt="t"/>
         </div>
       </div>

       <div className='div-4'>
       
          <p>© 2022 Chhotastock Technologies Private Limited. All rights reserved. CIN - U74999WB2012PTC184187 Chhotastock Technologies Private Limited.</p>
          <p>Chhotastock Technologies builds platforms & investment products to invest better in Indian investment asset classes.</p>
          <p>Investing in Stocks/ETFs (Exchange Traded Funds) are subject to market risks. Read all the related documents before investing. Investors should consider all risk factors and consult their financial advisor before investing
          <br></br>
          Registered Office: L151, 3rd Floor, CK Pearl, 5th Main Road, HSR Layout Sector 6, Bengaluru, Karnataka - 560102, India</p>
          <p>For any query / feedback / clarifications, email at contact@chhotastock.com</p>
          <p>All Investment ideas, model portfolios & advisory are built by SEBI Registered Investment advisors (RIAs) & Chhotastock only facilitates investments
in such baskets, portfolios.</p>
       </div>
    </div>
    </div>
  )
}

export default Footer
