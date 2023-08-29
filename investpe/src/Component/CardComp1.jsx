import React from "react";
import bikeCopy1 from "../Assets/bike copy 1.png";
import isolationMode from "../Assets/Isolation_Mode.png";
import "./style1.css"
const CardComp1 = ({image , cardTitle, cardPara, isolationMode}) => {
  return (
    <>
    <div
      style={{
        width: "400px",
        height: "175px",
        borderRadius: "12px",
        background: "linear-gradient(180deg, #3B3B3C 0%, #454747 100%)",
        boxShadow: "0px 13px 14px 0px rgba(0, 0, 0, 0.31)",
        position: "relative",
      }}
    >
      <div style={{ height: "" }}>
      <div style={{display: "flex" , position : "relative", justifyContent : "space-around"}}>
            <div style={{zIndex : "100", position : "absolute", top : "0", left : "-30px"}}>
              <img src={image} alt="img" />
            </div>
            <div style={{ flexDirection: "column", position : "absolute", top : "13px", right : "15px" }}>
              <div
                style={{
                  height: "20px",
                  width: "50%",
                  display: "flex ",
                  alignItems: "center",
                  justifyContent: "space-between",
                  paddingTop: "10px",
                  
                  textAlign : "center"
                }}
              >
                <div
                 
                >
                  <img src={isolationMode} alt="img" />
                </div>
                <div>
                  <p style={{ fontSize: "14px", color: "#9C9C9C" }}>
                    {cardTitle}
                  </p>
                </div>
              </div>
              <div style={{ width : "200px" }}>
                <p style={{ fontSize: "16px", color: "#9C9C9C" }}>
                  {cardPara}
                </p>
              </div>
            </div>
          </div>

      </div>
      <div
        style={{
          height: "28px",
          width: "100%",
          background: "#323333",
          borderRadius: "0px 0px 12px 12px",
          boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
          position: "absolute",
          bottom: "0",
        }}
      >
        <div className="btmDiv">
        <p className="cardPTag1">10% return + </p>
          <div className="OfferDiv">
            <p className="Flat400">Flat ₹400 off </p>
          </div>
        </div>
      </div>
    </div>
  </>
  );
};

export default CardComp1;
