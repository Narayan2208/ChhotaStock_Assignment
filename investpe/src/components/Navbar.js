import React from "react";
import InvestPe from "../assets/InvestPe.png";
import "./Navbar.css";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  let navigate=useNavigate();

  return (
    <div>
      <div className="nav">
      <div style={{position:"relative"}}>
        <img src={InvestPe} style={{height:"70px"}}></img>
        <p style={{color:"white",position:"absolute",top:"40px",fontSize:"10px",left:"85px"}}>INVEST TO PAY. INVEST TO SPEND</p>
      </div>
        <div style={{padding:"2px 5px",width:"200px",display:"flex", gap:"20px",      width: " 400px",
            height: "25px",
            top: "74px",
            left: "694px",
            marginLeft:"-200px",
            borderRadius: " 10px",overflow:"hidden",background: "#81878C"
} }>
        <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      className="pointer-events-none max-h-full max-w-full"
    >
      <path
        d="M10 3a7 7 0 1 0 7 7 7 7 0 0 0-7-7zm11 18-6-6"
        vectorEffect="non-scaling-stroke"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeMiterlimit="10"
        strokeWidth="2"
        color="white"
      />
    </svg>
        <input
          className="white-placeholder"
          placeholder="Search stocks, ETFs, indices"
            style={{width:"80%",height:"100%",border:"none",background: "#81878C",color:"white",outline: "none"}}
        >
        </input>

        </div>
        <button className="loginButton" onClick={()=>{
          navigate("/login");
        }}>
          <svg
            width="34"
            height="34"
            viewBox="0 0 34 34"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2.83472 16.9986H22.6681M22.6681 16.9986L17.7097 12.7486M22.6681 16.9986L17.7097 21.2486"
              stroke="#171E27"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M12.7527 9.91668C12.7699 6.83538 12.9065 5.16668 13.9951 4.07814C15.2399 2.83334 17.2434 2.83334 21.2503 2.83334H22.6669C26.6738 2.83334 28.6774 2.83334 29.9221 4.07814C31.1669 5.32294 31.1669 7.3264 31.1669 11.3333V22.6667C31.1669 26.6736 31.1669 28.677 29.9221 29.9218C28.6774 31.1667 26.6738 31.1667 22.6669 31.1667H21.2503C17.2434 31.1667 15.2399 31.1667 13.9951 29.9218C12.9065 28.8333 12.7699 27.1646 12.7527 24.0833"
              stroke="#171E27"
              stroke-width="2"
              stroke-linecap="round"
            />
          </svg>
          Login
        </button>
      </div>
    </div>
  );
};

export default Navbar;
