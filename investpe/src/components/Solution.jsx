import React from 'react'
import "./Solution.css"
import profile from "../assets/profile.png"
import longimg from "../assets/longimg.png"
import Rectangle  from "../assets/Rectangle 149090.png"
import Rectangle22  from "../assets/rect 22.png"
import para22img1  from "../assets/para22img1.png"
import Dashboard  from "../assets/Dashboard.png"
import card33  from "../assets/card33.png"
const Solution = () => {
  return (
    <div className='solution-main'>
      
      <p className='solution-head'>SOLUTION</p>
      <p className='solution-para'>Stay ahead with our <br></br>
Wealth-tech as a service</p>

    <div style={{display:"flex",gap:"30px"}}>
        <div >
       <div className='flex1'>
    <div className='card11'>
        <img src={profile}></img>
        <p className='para11'>INVESTPE</p>
        <p className='big11'>Why does it<br></br> make sense to<br></br> start with us?</p>
    </div>
    <div className='card22'>
      <div>
<img src={para22img1}></img>
      </div>
      <div >
        <img src={Dashboard} style={{marginTop:"40px"}}></img>
      </div>
    </div>
       </div>
       <br></br>
       <div className='flex2'>
        
        {/* change this */}
        <img src={card33} style={{width:"400px",height:"350px"}} className=''></img>




        <img src={card33} style={{width:"400px",height:"350px"}}></img>
       </div>
        </div>
        
        
        
        
        <div>
            <img className='longimg' src={longimg} style={{width:"280px"}}></img>
        </div>
    </div>


<hr></hr>
    </div>
  )
}

export default Solution
