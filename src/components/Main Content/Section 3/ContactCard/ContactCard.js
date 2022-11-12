import CostumeSVG from "../../../UI/CostumeSvg/CostumeSVG.js";
import classes from "./ContactCard.module.css";
const ContactCard = (props) => {
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
    <figure className={classes["contact-card"]}>
      <h3>{props.title}</h3>
      <ul className={classes["contact-info"]}>{data}</ul>
    </figure>
  );
};

export default ContactCard;
