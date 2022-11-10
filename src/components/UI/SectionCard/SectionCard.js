import classes from "./SectionCard.module.css";
const SectionCard = (props) => {
  console.log(props);
  return (
    <section className={`${classes.section} ${props.className}`}>
      {props.children}
    </section>
  );
};

export default SectionCard;
