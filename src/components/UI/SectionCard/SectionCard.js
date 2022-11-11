import classes from "./SectionCard.module.css";
const SectionCard = (props) => {
  return (
    <section className={`${classes.section} ${props.className}`}>
      {props.children}
    </section>
  );
};

export default SectionCard;
