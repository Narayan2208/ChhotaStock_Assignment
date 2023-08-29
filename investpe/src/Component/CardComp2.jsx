import React from "react";
import apple from "../Assets/Iphone (3) 1.png";
import "./style2.css";

const CardComp2 = ({image , cardTitle, cardPara, isolationMode , Cardwidth, Cardheight}) => {
  return (
    <>
      <div
        style={{
          width: "326px",
          height: "151px",
          borderRadius: "12px",
          background: "linear-gradient(180deg, #3B3B3C 0%, #454747 100%)",
          boxShadow: "0px 13px 14px 0px rgba(0, 0, 0, 0.31)",
          position: "relative",
        }}
      >
        <div style={{ height: "" }}>
        <div style={{display: "flex" }}>
              <div style={{zIndex : "100", marginTop : "-15px"}}>
                <img src={image} alt="img" />
              </div>
              <div style={{ flexDirection: "column" }}>
                <div
                  style={{
                    height: "20px",
                    width: "85%",
                    display: "flex ",
                    alignItems: "center",
                    justifyContent: "space-between",
                    paddingTop: "10px",
                  }}
                >
                  <div
                    style={{
                      background: "black",
                      borderRadius: "20%",
                      width: "15%",
                      textAlign: "center",
                    }}
                  >
                    <img src={isolationMode} alt="img" />
                  </div>
                  <div>
                    <p style={{ fontSize: "14px", color: "#9C9C9C" }}>
                      {cardTitle}
                    </p>
                  </div>
                </div>
                <div>
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
            width: "326px",
            background: "#323333",
            borderRadius: "0px 0px 12px 12px",
            boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
            position: "absolute",
            bottom: "0",
          }}
        >
          <div className="btmDiv">
          <p className="cardPTag">10% return + </p>
            <div className="OfferDiv">
              <p className="Flat400">Flat ₹400 off </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardComp2;
