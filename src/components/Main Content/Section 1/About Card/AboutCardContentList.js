import classes from "./AboutCardContentList.module.css";
const AboutCardContentList = (props) => {
  return (
    <ul className={classes.list}>
      {props.cardList.map((el, index) => {
        return (
          <li className={classes["list-item"]} key={index}>
            <span>
              <svg
                className={classes["list-ietm__svg"]}
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 32 32"
              >
                <title>arrow-right</title>
                <path d="M31 16l-15-15v9h-16v12h16v9z"></path>
              </svg>
            </span>
            {el}
          </li>
        );
      })}
    </ul>
  );
};
export default AboutCardContentList;
