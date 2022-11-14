import { useEffect, useRef, useState } from "react";
import CostumeLink from "../UI/CostumeLink/CostumeLink.js";
import classes from "./Header.module.css";
const Header = (props) => {
  const headerRef = useRef();
  const [headerHight, setHeaderHight] = useState();
  useEffect(() => {
    setHeaderHight(headerRef.current.offsetHeight);
  }, []);
  const navArr = [
    { name: "Home", href: "https://www.google.com/" },
    { name: "About", href: "https://www.google.com/" },
    { name: "Services", href: "https://www.google.com/" },
    { name: "Contact us", href: "https://www.google.com/" },
  ];
  const navLinks = navArr.map((el, index) => {
    return (
      <li className="" key={index}>
        <CostumeLink className={classes["main-header__link"]} href={el.href}>
          {el.name}
        </CostumeLink>
      </li>
    );
  });
  return (
    <header
      ref={headerRef}
      className={`${classes["main-header"]} ${
        props.className ? classes[props.className] : ""
      }`}
    >
      <h1 className={classes.logo}>
        <span>Build</span> Estate
      </h1>
      <ul className={classes["main-nav"]}>{navLinks}</ul>
    </header>
  );
};

export default Header;
