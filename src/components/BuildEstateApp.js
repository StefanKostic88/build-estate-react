import React from "react";
import Hero from "./Hero/Hero.js";
import SectionOne from "./Main Content/Section 1/SectionOne.js";
import SectionTwo from "./Main Content/Section 2/SectionTwo.js";
import SectionThree from "./Main Content/Section 3/SectionThree.js";
import SectionFour from "./Main Content/Section 4/SectionFour.js";
import Footer from "./Footer/Footer.js";
import classes from "./BuildEstateApp.module.css";

const BuildEstateApp = () => {
  return (
    <div className={classes["main-wraper"]}>
      <Hero />
      <SectionOne title={"Who We Are"} />
      <SectionTwo title={"What people say"} />
      <SectionThree title={"get in touch with us"} />
      <SectionFour title={"mail us"} />
      <Footer />
    </div>
  );
};

export default BuildEstateApp;
