import Button from "../UI/Button/Button.js";
import Header from "../Header/Header.js";
import classes from "./Hero.module.css";
const Hero = () => {
  return (
    <div className={classes.hero}>
      <Header />
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
