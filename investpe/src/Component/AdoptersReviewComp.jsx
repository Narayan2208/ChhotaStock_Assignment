import React from "react";

const AdoptersReviewComp = () => {
  return (
    <>
      {/* <div style={{border : "2px solid red", width : "80%"}}> */}
        <div style={{display : "flex", marginTop : "50px"}}>
          <div style={{width : "20%", margin : "auto"}}>
            <p style={{fontSize : "25px", fontWeight : "bolder"}}>Reviews From Early Adopters</p>
          </div>
          <div style={{display : "flex", justifyContent : "space-between" , width : "40%", margin : "auto"}}>
            <div style={{background : "#f3f3f3", padding : "2px 20px", borderRadius : "50px"}}>
              <p style={{fontSize : "20px"}}> <span style={{fontWeight : "bolder", fontSize : "30px"}}>156k+</span> <br/> Registered Users</p>
            </div>
            <div style={{ background : "#f3f3f3", padding : "2px 20px", borderRadius : "50px"}}>
              <p style={{fontSize : "20px"}}> <span style={{fontWeight : "bolder", fontSize : "30px"}}> $1.5Mn+ </span> <br/> Worth investing done</p>
            </div>
          </div>
        </div>
      {/* </div> */}
    </>
  );
};

export default AdoptersReviewComp;
