import React from "react";
import valueDealsLogo from "../Assets/Value Deals.png";
import "./blackcard.css"
const BlackCards = ({cardLogo}) => {
  return (
    <>
      <div style={{width : "300px", borderRadius : "10px", background : "#222529", padding : "20px"}}>
        <div style={{display : "flex", alignItems : "center", width : "70%", justifyContent : "space-around", margin : "auto"}}>
          <div >
            <img src={cardLogo} alt={"img"} />
          </div>
          <div>
            <p style={{color : "#FFF", fontWeight : "bolder" , fontSize : "20px"}}>Value Deals</p>
          </div>
        </div>
        <div>
          <p style={{color : "#d9d9d9"}}>
            For the people who would love to risk huge to get rewarded. People
            who would love to risk huge to get rewarded
          </p>
        </div>
        <div>
          <table className="table">
            <tr>
              <th className="styleTable" style={{color : "#d9d9d9"}}>CAGR</th>
              <th style={{color : "#d9d9d9"}}>Min Amount</th>
            </tr>
            <tr>
              <td className="styleTable" style={{color : "#d9d9d9"}}>17.80%</td>
              <td style={{color : "#d9d9d9"}}>120</td>
            </tr>
          </table>
        </div>
      </div>
    </>
  );
};

export default BlackCards;
