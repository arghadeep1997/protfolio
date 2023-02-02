import React from "react";
// import { NavLink } from "react-router-dom";
import web from "../src/Images/About.jpg";
import Common from "./Common";
const About = () => {
  return (
    <div>
      <Common
        name="Welcom to About Page"
        imgsrc={web}
        visit="/contact"
        btname="Contact Now"
      ></Common>
    </div>
  );
};
export default About;
