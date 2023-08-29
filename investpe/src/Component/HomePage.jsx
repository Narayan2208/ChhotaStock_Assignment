import React from "react";
import topimg from "../Assets/Screenshot2023-08-20at1.251.png";
import investPeLogo from "../Assets/InvestPe 01-12 1.png";
import phoneImage from "../Assets/image 154.png";
import bikeCopy1 from "../Assets/bike copy 1.png";
import isolationMode from "../Assets/Isolation_Mode.png";
import CardComp1 from "./CardComp1";
import iphone from "../Assets/Iphone (3) 1.png";
import laptop from "../Assets/pngwing 1.png";
import ElipseofLap from "../Assets/Ellipse 2197.png";
import CardComp2 from "./CardComp2";
import CardComp3 from "./CardComp3";
import my from "../Assets/image 155.png"
import bounce from "../Assets/image 157.png"
import appleLogo from "../Assets/image 158.png"
import myntra from "../Assets/image 160.png"
import amazon from "../Assets/image 161.png"
import croma from "../Assets/image 162.png"
import caratlane from "../Assets/image 156.png"
import easeMyTrip from "../Assets/image 159.png"
import pepperfry from "../Assets/image 166.png"
import StockInvestComp from "./StockInvestComp";
import BlackCards from "./BlackCards";
import valueDealsLogo from "../Assets/Value Deals.png";
import evRevolution from "../Assets/EV Revolution.png";
import outPerformers from "../Assets/Outperformers.png";
import valuedeals from "../Assets/Value Deals.png";
import tophead from "../Assets/Screenshot2023-08-20at1.251.png"
import Partners from "./Partners";
import AdoptersReviewComp from "./AdoptersReviewComp";
import ProfileCard from "./ProfileCard";
import ProfileCard2 from "./ProfileCard2";
import firstElipsImg from "../Assets/Ellipse 2063.png"
import secElipImg  from "../Assets/Ellipse 2064.png"
import thirdElipImg  from "../Assets/Ellipse 2084.png"
import fourthElipImg  from "../Assets/Ellipse 2085.png"
import onePlateform from '../Assets/Screenshot 2023-08-29 192218.png'
import footer from "../Assets/Screenshot 2023-08-29 200710.png"
import "./homepage.css"
import Footer from "./Footer";
const HomePage = () => {
  let stylingObj = {
    color: "#FFF",
    textAlign: "center",
    fontFamily: "Gilroy",
    fontSize: "60px",
    fontStyle: "normal",
    fontWeight: 700,
    lineHeight: "normal",
    width: "550px",
  };
  let commonStyleInCard = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };
  return (
    <>
      <div>
        <img src={tophead} width={"100%"} alt="imag" />
      </div>
      <nav
        style={{
          display: "flex",
          justifyContent: "space-around",
          background: "#171E27",
          alignItems: "center",
        }}
      >
        <div style={{ width: "318px", height: "91px", position: "relative" }}>
          <div>
            {" "}
            <img src={investPeLogo} alt="imag" />
          </div>
          <p
            style={{
              color: "white",
              position: "absolute",
              top: "-22",
              bottom: "0",
              right: "5px",
              fontSize: "12px",
              fontFamily: "Inter",
              fontStyle: "normal",
              fontWeight: "400",
              lineHeight: "normal",
            }}
          >
            INVEST TO PAY. INVEST TO SPEND
          </p>
        </div>
        <div style={{ color: "1px solid red" }}>
          {" "}
          <input
            // style={{ width: "20rem" }}
            style={{width:"20rem",height:"100%",border:"none",background: "#81878C",color:"white",outline: "none"}}
            placeholder="Search stocks, ETFs, indices"
            className="placeholderStyle"
          />{" "}
        </div>
        <div>
          {" "}
          <button
            style={{
              width: "145px",
              height: "57px",
              color: "#171E27",
              fontSize: "24px",
              fontWeight: "500",
              borderRadius: "35px",
              background: "linear-gradient(99deg, #FEC826 0%, #F3A61D 100%)",
              boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
            }}
          >
            Login
          </button>{" "}
        </div>
      </nav>
      <div style={{ background: "#171E27" }}>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <h1 style={stylingObj}>Knowledge Based Investing & Trading</h1>
        </div>

        <div>
          <h3
            style={{
              textAlign: "center",
              fontSize: "36px",
              fontStyle: "normal",
              fontWeight: "500",
              lineHeight: "normal",
              color: "#FFF",
            }}
          >
            Ready-made solutions + Deep Research + Disciplined Investing +
            Advanced Trading tools
          </h3>
        </div>
        <div style={{ textAlign: "center" }}>
          <img src={phoneImage} alt="img" />
        </div>
      </div>
      <div style={{ height: "25vh" }}></div>
      <div
        style={{
          display: "flex",
          margin: "auto",
          justifyContent: "space-around",
           position : "relative",  //?added
           
           width : "90%"
        }}
        
      >
        <div style={{ width: "50%" }}>
          <span style={{ color: "#28B570", fontSize: "24px" }}>FEATURES</span>
          <p style={{ fontSize: "42px", width: "70%" }}>
            SAVE NOW. BUY LATER. SIMPLE & REALISTIC
          </p>
          <p
            style={{
              color: "#777",
              fontSize: "35px",
              fontWeigh: "bolder",
              lineHeight: "52px",
            }}
          >
            Get what you love and save up over weeks or months to achieve it
            much lower price. Time & Flexibility on your side.
          </p>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              width: "50%",
              
            }}
          >
            <button
              style={{
                width: "145px",
                height: "57px",
                color: "#171E27",
                fontSize: "24px",
                fontWeight: "500",
                borderRadius: "35px",
                background: "linear-gradient(99deg, #FEC826 0%, #F3A61D 100%)",
                boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
              }}
            >
              Get the App
            </button>
            <a style={{ textDecoration: "underline", fontSize: "24px" }}>
              Learn More
            </a>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "20px"  }}>
          <div style={commonStyleInCard}>
            <CardComp2
              image={bikeCopy1}
              cardTitle={"Bounce Infinity EV"}
              cardPara={"Save up for your next Bike"}
              isolationMode={isolationMode}
            />
          </div>
          <CardComp1
            image={laptop}
            cardTitle={"Lonovo"}
            cardPara={"Save up for your next Laptop"}
            isolationMode={ElipseofLap}
          />
          <div style={commonStyleInCard}>
            {" "}
            <CardComp3
              image={iphone}
              cardTitle={"Apple"}
              cardPara={"Save up for your next Iphone"}
              isolationMode={ElipseofLap}
            />
          </div>
        <div style={{width : "3%", position : "absolute" , right : "36rem" , bottom : "22.5rem"}}><img src={my} alt={"img"} width={"100%"}/></div>  
        <div style={{width : "5%", position : "absolute" , right : "32.5rem" , bottom : "28rem"}}><img src={bounce} alt={"img"} width={"100%"}/></div>  
        <div style={{width : "5%", position : "absolute" , right : "29rem" , bottom : "32rem"}}><img src={appleLogo} alt={"img"} width={"100%"}/></div>  
        <div style={{width : "8%", position : "absolute" , right : "22rem" , bottom : "33rem"}}><img src={myntra} alt={"img"} width={"100%"}/></div>  
        <div style={{width : "4%", position : "absolute" , right : "18rem" , bottom : "34.5rem"}}><img src={amazon} alt={"img"} width={"100%"}/></div>  
        <div style={{width : "7%", position : "absolute" , right : "10rem" , bottom : "34rem"}}><img src={croma} alt={"img"} width={"100%"}/></div>  
        <div style={{width : "10%", position : "absolute" , right : "0rem" , bottom : "32rem"}}><img src={caratlane} alt={"img"} width={"100%"}/></div>  
        <div style={{width : "7%", position : "absolute" , right : "-1rem" , bottom : "28rem"}}><img src={easeMyTrip} alt={"img"} width={"100%"}/></div>  
        <div style={{width : "10%", position : "absolute" , right : "-3rem" , bottom : "23rem"}}><img src={pepperfry} alt={"img"} width={"100%"}/></div>  
        </div>

      </div>
      <div style={{width : "90%", margin : "auto", paddingTop : "50px"}}>
        <img src={onePlateform} alt={"img"} width={"100%"}/>
      </div>
      <StockInvestComp/>
     <div style={{height : "40vh"}}></div>
     <div style={{display  :"flex", margin : "auto", width : "95%", gap:"20px", marginBottom : "50px"}}>
      <BlackCards cardLogo ={valueDealsLogo}/>
      <BlackCards cardLogo ={evRevolution}/>
      <BlackCards cardLogo ={outPerformers}/>
      <BlackCards cardLogo ={valuedeals}/>

     </div>
     <div style={{border : "1px solid #b1b1b1", width : "80%" , margin : "auto"}}></div>
     <div style={{width : "80%", margin : "auto", paddingTop : "30px"}}>
      <Partners/>
     </div>
     <div style={{height : "10vh"}}></div>
     <div style={{border : "1px solid #b1b1b1", width : "80%" , marginTop : "20px, 0px" ,margin : "auto" }}></div>
      <div style={{ margin : "auto", width  :"80%"}}>
        <AdoptersReviewComp/>
      </div>
     <div style={{height : "20vh"}}></div>
      <div style={{display : "flex", width : "90%", margin : "auto", justifyContent : "space-between"}}>
        <ProfileCard cardElipsImages = {firstElipsImg} nameAndPlace = {`Mahesh, Swiggy delivery partner, Bengaluru`}/>
        <ProfileCard2 cardElipsImagesSec = {secElipImg} nameAndPlaceSec={`Sunita, 4th Year B.com
Student. Bihar`}/>
        <ProfileCard cardElipsImages = {thirdElipImg} nameAndPlace = {`Ramesh, Software Engineer, Hyderabad`}/>
        <ProfileCard2 cardElipsImagesSec = {fourthElipImg} nameAndPlaceSec={`Piyush, 17 yrs experience in equities, Mumbai`}/>
        <ProfileCard cardElipsImages = {firstElipsImg} nameAndPlace = {`Mahesh, Swiggy delivery partner, Bengaluru`}/>
      </div>
      <div style={{width : "100%"}}>
       <Footer/>
      </div>
    </>
  );
};

export default HomePage;
