import AboutCardContentList from "./AboutCardContentList";

import classes from "./AboutCard.module.css";
const AboutCard = (props) => {
  return (
    <figure className={classes["about-card"]}>
      <h3>{props.cardContent.title}</h3>
      <p>
        <q>{props.cardContent.text}</q>
      </p>
      <AboutCardContentList cardList={props.cardContent.list} />
    </figure>
  );
};
export default AboutCard;
