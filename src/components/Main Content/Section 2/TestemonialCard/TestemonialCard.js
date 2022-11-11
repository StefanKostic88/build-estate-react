import TestemonialIconsFullStar from "./TestemonialIcons/TestemonialIconsFullStar.js";
import TestemonialIconsHalfFullStar from "./TestemonialIcons/TestemonialIconsHalfFullStar.js";
import classes from "./TestemonialCard.module.css";
const TestemonialCard = ({ testemonialContent }) => {
  const stars = [];
  for (let i = 0; i < 5; i++) {
    stars.push(<TestemonialIconsFullStar key={i} />);
    if (i === 4) stars.push(<TestemonialIconsHalfFullStar key={i} />);
  }

  return (
    <figure className={classes["testemonial-card"]}>
      <div className={classes["user-profile"]}>
        <div className={classes["user-img__container"]}>
          <img src={testemonialContent.image} alt="user 2 img" />
        </div>
        <div className={classes["rating-container"]}>
          <span className={classes["user-name"]}>
            {testemonialContent.user}
          </span>
          <div className={classes.rating}>
            <span>{stars}</span>
          </div>
        </div>
      </div>
      <div className={classes["testemonial-content"]}>
        {testemonialContent.text}
      </div>
    </figure>
  );
};

export default TestemonialCard;

{
  // <div>
  //     <div >
  //       <div >
  //         <img src="./images/t1.jpg" alt="user 1 img" />
  //       </div>
  //       <div >
  //         <span >
  //
  //         </span>
  //
  //       </div>
  //     </div>
  //     <div >
  //
  //     </div>
  //   </div>
}
