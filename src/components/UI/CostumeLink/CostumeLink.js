import classes from "./CostumeLink.module.css";

const CostumeLink = (props) => {
  return (
    <a className={`${classes.link} ${props.className}`} href={props.href}>
      {props.children}
    </a>
  );
};
export default CostumeLink;
