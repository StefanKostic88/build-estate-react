import TestemonialIcons from "./TestemonialIcons.js";
import classes from "./TestemonialCard.module.css";
const TestemonialCard = ({ testemonialContent }) => {
  console.log(testemonialContent);
  const stars = [];
  for (let i = 0; i < 5; i++) {
    stars.push(<TestemonialIcons key={i} />);
  }

  return (
    <figure className={classes["testemonial-card"]}>
      <div className={classes["user-profile"]}>
        <div className={classes["user-img__container"]}>
          <img src="./images/t1.jpg" alt="user 1 img" />
        </div>
        <div className={classes["rating-container"]}>
          <span className={classes["user-name"]}>
            {testemonialContent.user}
          </span>
          <span className={classes.rating}>{stars}</span>
        </div>
      </div>
      <div className={classes["testemonial-content"]}>
        {testemonialContent.text}
      </div>
    </figure>
  );
};

export default TestemonialCard;
