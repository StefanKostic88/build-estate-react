import TestemonialIcons from "./TestemonialIcons.js";
import classes from "./TestemonialCard.module.css";
const TestemonialCard = ({ testemonialContent }) => {
  console.log(testemonialContent);
  const stars = [];
  for (let i = 0; i < 5; i++) {
    stars.push(<TestemonialIcons key={i} />);
  }

  return (
    <figure className="">
      <div className="">
        <div className="">
          <img src="./images/t1.jpg" alt="user 1 img" />
        </div>
        <div className="">
          <span>{testemonialContent.user}</span>
          <span>{stars}</span>
        </div>
      </div>
      <div className="">{testemonialContent.text}</div>
    </figure>
  );
};

export default TestemonialCard;
