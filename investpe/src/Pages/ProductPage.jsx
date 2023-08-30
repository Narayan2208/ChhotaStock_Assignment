import React, { useState } from "react";
import TopNav from "../components/Topnav";
import GatewayNav from "../components/GatewayNav";
import Footer from "../components/Footer";
import Investstack from "../components/Investstack";
import Features from "../components/Features";
import Blackbg from "../components/Blackbox";
import Formbody from "../components/Formbody";
import Solution from "../components/Solution";
import Partners from "../components/Partners";
import Dropdown from "../components/Dropdown";

const ProductPage = () => {
  let [shownav, setshownav] = useState(false);

  return (
    <div>
      <TopNav />
      <GatewayNav setshownav={setshownav} shownav={shownav} />
      <Dropdown setshownav={setshownav} shownav={shownav} />
      <Investstack />
      <Features />
      <Blackbg />
      <Solution />
      <Partners />
      <Formbody />
      <Footer />
    </div>
  );
};

export default ProductPage;
