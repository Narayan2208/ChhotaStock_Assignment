import React from 'react'
import "./Formbody.css"
import imge1 from "../assets/imge1.png"
import imge2 from "../assets/imge2.png"
import imge3 from "../assets/imge3.png"
import imge4 from "../assets/imge4.png"
const Formbody = () => {
  return (
    <div className='formbody-main'>
      <div className='formbody-sub1'>
        <h1>How would you like to work with us?</h1>
        <p className='formbody-para'>Tell us more about yourself, and we’ll
        <br></br> reach out to you as soon as possible.</p>
        <label>Work email</label>
      
        <input placeholder='abc@xyz.com' className='inputs'></input>
        <br></br>
        <label>Company Name</label>
     
        <input className='inputs'></input>
        <br></br>
        <label>Mobile Number</label>
   
        <input className='inputs'></input>
      </div>



      <div className='formbody-sub2'>
    <p className='formbody-sub-para2'>Which products are you interested in?</p>
        <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:"20px"}}>
            <div className='div-card1'>
                <p className='common-heading'>Mutual Funds</p>
                <p className='common-para'>E2E infrastructure<br></br> for mutual fund<br></br> investing</p>
                <img src={imge1} className='div-card1-imgs'></img>
            </div>
            <div className='div-card1'>
                <p className='common-heading'>Indian Equity</p>
                <p className='common-para'>Stock gateway &<br></br>stock baskets</p>
                <img src={imge2} className='div-card1-imgs'></img>
            </div>
            <div className='div-card1'>
                <p className='common-heading'>Digital Gold</p>
                <p className='common-para'>Buy & Sell digital<br></br> gold hassle free</p>
                <img src={imge3} className='div-card1-imgs'></img>
            </div>
            <div className='div-card1'>
                <p className='common-heading'>Fixed Deposits</p>
                <p className='common-para'>Book FDs in 1click<br></br> w/o opening <br></br>
a bank ac</p>
                <img src={imge4} className='div-card1-imgs'></img>
            </div>
        </div>
        <button style={{position:"absolute",bottom:"-20px",right:"30px",background:"linear-gradient(90.9deg, #171E27 0.56%, #171E27 96.47%)",width:"107px",fontSize:"18px",height:"37px",borderRadius:"25px",color:"white",boxShadow:"0px 4px 4px 0px #00000040"}}>Submit</button>
      </div>
    </div>
  )
}

export default Formbody


