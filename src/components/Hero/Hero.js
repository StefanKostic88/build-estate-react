import Button from "../UI/Button/Button.js";
import Header from "../Header/Header.js";
import classes from "./Hero.module.css";
import React, { useEffect, useRef, useState } from "react";
const Hero = () => {
  const heroRef = useRef();
  const refHeader = useRef();

  const [heroIsNotVisible, setHeroIsNotVisible] = useState();

  useEffect(() => {
    const heroObserver = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;

        if (!entry.isIntersecting) {
          setHeroIsNotVisible(true);
        } else {
          setHeroIsNotVisible(false);
        }
      },
      {
        rootMargin: `-${refHeader.current.offsetHeight}px`,
      }
    );

    heroObserver.observe(heroRef.current);
  }, []);
  // console.log(headerHight);
  return (
    <div ref={heroRef} className={classes.hero}>
      <Header ref={refHeader} className={heroIsNotVisible && `fixed`} />
      <div className={classes["hero-content"]}>
        <h2 className={classes["hero-title"]}>
          We shape our buildings thereafter they shape us
        </h2>
        <Button className="">Read more</Button>
      </div>
    </div>
  );
};

export default Hero;
