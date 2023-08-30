import React from 'react'
import reviews from "../assets/reviews.png"
import "./Reviews.css";
const Reviews = () => {
  return (
    <div className='reviews'>
      <img  src={reviews}></img>
      <div className='reviews-para1'>
      <p className='p1t1'>156k+</p>
      <p className='p2t2'>Registered Users</p>
      </div>
      <div className='reviews-para2'>
      <p className='p1t1'>$1.5Mn+</p>
      <p className='p2t2'>Worth investing done</p>
      </div>
    </div>
  )
}

export default Reviews
