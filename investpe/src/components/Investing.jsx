import React from 'react'
import "./Investing.css";
import invest1 from "../assets/invest1.png"
import invest2 from "../assets/invest2.png"
import invest3 from "../assets/invest3.png"
import invest4 from "../assets/invest4.png"
const Investing = () => {
  return (
    <div className='invest-main'>
      <p className='invest-para1'>STOCK INVESTING, SIMPLIFIED</p>
      <p className='invest-para2'>Online trading and investing in the market 
does not have to be boring. </p>

<p className='invest-para3'>
While we adopt a technology-led approach in <br></br>
building our product, we are keeping our users-investors <br></br>
and traders even before that</p>

<div className='invest-cards'>
<img src={invest1}></img>
<img src={invest2}></img>


<svg className='svg-invest-bar' width="35" height="41" viewBox="0 0 35 41" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.32825 30.5898H1.04447C0.467624 30.5898 0 31.0557 0 31.6303V39.24C0 39.8146 0.467624 40.2805 1.04447 40.2805H6.32825C6.90509 40.2805 7.37272 39.8146 7.37272 39.24V31.6303C7.37272 31.0557 6.90509 30.5898 6.32825 30.5898Z" fill="white"/>
<path d="M15.5441 21.5312H10.2603C9.68344 21.5312 9.21582 21.9971 9.21582 22.5717V38.9336C9.21582 39.5082 9.68344 39.974 10.2603 39.974H15.5441C16.1209 39.974 16.5885 39.5082 16.5885 38.9336V22.5717C16.5885 21.9971 16.1209 21.5312 15.5441 21.5312Z" fill="#D0CCCC"/>
<path d="M24.7395 25.5715H19.4557C18.8789 25.5715 18.4113 26.0374 18.4113 26.612V39.2608C18.4113 39.8354 18.8789 40.3013 19.4557 40.3013H24.7395C25.3163 40.3013 25.784 39.8354 25.784 39.2608V26.612C25.784 26.0374 25.3163 25.5715 24.7395 25.5715Z" fill="white"/>
<path d="M33.9553 13.9426H28.6715C28.0947 13.9426 27.6271 14.4085 27.6271 14.9831V39.2607C27.6271 39.8353 28.0947 40.3011 28.6715 40.3011H33.9553C34.5322 40.3011 34.9998 39.8353 34.9998 39.2607V14.9831C34.9998 14.4085 34.5322 13.9426 33.9553 13.9426Z" fill="#D0CCCC"/>
<path d="M3.97263 19.0828L3.41968 18.4911L12.4513 9.94298L22.302 14.7169L33.0129 2.76172L33.6069 3.29215L22.4863 15.6962L12.5946 10.9018L3.97263 19.0828Z" fill="#3F3F3F"/>
<path d="M2.43709 22.2251C3.78306 22.2251 4.87418 21.1382 4.87418 19.7974C4.87418 18.4566 3.78306 17.3696 2.43709 17.3696C1.09112 17.3696 0 18.4566 0 19.7974C0 21.1382 1.09112 22.2251 2.43709 22.2251Z" fill="#D0CCCC"/>
<path d="M12.5133 13.596C13.8592 13.596 14.9504 12.509 14.9504 11.1682C14.9504 9.82742 13.8592 8.74048 12.5133 8.74048C11.1673 8.74048 10.0762 9.82742 10.0762 11.1682C10.0762 12.509 11.1673 13.596 12.5133 13.596Z" fill="#D0CCCC"/>
<path d="M22.4046 17.6351C23.7506 17.6351 24.8417 16.5481 24.8417 15.2073C24.8417 13.8665 23.7506 12.7795 22.4046 12.7795C21.0587 12.7795 19.9675 13.8665 19.9675 15.2073C19.9675 16.5481 21.0587 17.6351 22.4046 17.6351Z" fill="#D0CCCC"/>
<path d="M32.5423 5.45537C33.8883 5.45537 34.9794 4.36842 34.9794 3.02761C34.9794 1.6868 33.8883 0.599854 32.5423 0.599854C31.1963 0.599854 30.1052 1.6868 30.1052 3.02761C30.1052 4.36842 31.1963 5.45537 32.5423 5.45537Z" fill="#D0CCCC"/>
</svg>

<img src={invest3}></img>
<img src={invest4}></img>
</div>

<hr className='horizontal-line1'></hr>
    </div>
  )
}

export default Investing
