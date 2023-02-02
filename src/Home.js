import React from "react";
// import { NavLink } from "react-router-dom";
import web from "../src/Images/Home.jpg";
import Common from "./Common";
const Home = () => {
  return (
    <div>
      <Common
        name="Grow Your Business With"
        imgsrc={web}
        visit="/service"
        btname="Get Started"
      ></Common>
    </div>
  );
};
export default Home;
