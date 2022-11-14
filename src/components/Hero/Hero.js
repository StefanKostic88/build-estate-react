import Button from "../UI/Button/Button.js";
import Header from "../Header/Header.js";
import classes from "./Hero.module.css";
import { useEffect, useRef, useState } from "react";
const Hero = () => {
  const heroRef = useRef();
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
        threshold: 0.2,
      }
    );
    heroObserver.observe(heroRef.current);
  }, []);

  return (
    <div ref={heroRef} className={classes.hero}>
      <Header className={heroIsNotVisible && `fixed`} />
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
