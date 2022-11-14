import { useEffect, useRef, useState } from "react";
import CostumeSVG from "../../../UI/CostumeSvg/CostumeSVG.js";
import classes from "./ContactCard.module.css";
const ContactCard = (props) => {
  const cardRef = useRef();
  const [isVisible, setIsvisible] = useState();
  useEffect(() => {
    const cardObserver = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;

        if (entry.isIntersecting) {
          setIsvisible(entry.isIntersecting);
          cardObserver.unobserve(cardRef.current);
        }
      },
      {
        threshold: 0.4,
      }
    );
    cardObserver.observe(cardRef.current);
  }, []);

  const data = props.contactInfo.info.map((el, index) => {
    return (
      <li key={index}>
        <a href="google.com">
          {el.icon && <CostumeSVG items={el.svgParam}>{el.svgVer}</CostumeSVG>}
          {el.text || <CostumeSVG items={el.svgParam}>{el.svgVer}</CostumeSVG>}
        </a>
      </li>
    );
  });
  return (
    <figure
      ref={cardRef}
      className={`${classes["contact-card"]} ${
        isVisible && classes["display-card"]
      }`}
    >
      <h3>{props.title}</h3>
      <ul className={classes["contact-info"]}>{data}</ul>
    </figure>
  );
};

export default ContactCard;
