import { Fragment } from "react";
import classes from "./SectionTitle.module.css";

const SectionTitle = ({ sectionTitle }) => {
  return (
    <Fragment>
      <h2 className={classes["section-title"]}>{sectionTitle}</h2>
      <div className={classes.symbol}></div>
    </Fragment>
  );
};

export default SectionTitle;
